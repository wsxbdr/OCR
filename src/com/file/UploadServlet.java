package com.file;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.log4j.Logger;

import com.file.GWPWpath;


/**
 * Servlet implementation class UploadServlet
 */
@WebServlet("/UploadServlet")
public class UploadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static Logger loger=Logger.getLogger(UploadServlet.class);  
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UploadServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	@SuppressWarnings("deprecation")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		loger.info("--------上传开始--------");  
		//设置request,response编码为utf8 , response类型为json
		request.setCharacterEncoding("utf-8");		
        response.setCharacterEncoding("utf-8");		
        response.setContentType("application/json; charset=utf-8");
		
		
		FileItemFactory factory = new DiskFileItemFactory();
		 
        // 创建文件上传处理器
        ServletFileUpload upload = new ServletFileUpload(factory);

        // 开始解析请求信息
        List items = null;
        try {
            items = upload.parseRequest(request);
        }
        catch (FileUploadException e) {
            e.printStackTrace();
        }

        // 对所有请求信息进行判断
        List<String> fileNames = new ArrayList<>();
        Iterator iter = items.iterator();
        while (iter.hasNext()) {
            FileItem item = (FileItem) iter.next();
            // 信息为普通的格式
            if (item.isFormField()) {
                String fieldName = item.getFieldName();
                String value = item.getString();
                //request.setAttribute(fieldName, value);                
            }
            // 信息为文件格式
            else {
                String fileName = item.getName();
                if(fileName != "") {
                	System.out.println("图片名称：" + fileName);
                    int index = fileName.lastIndexOf("\\");
                    fileName = fileName.substring(index + 1);
                    //request.setAttribute("realFileName", fileName);

                    //String basePath = request.getRealPath("/images");    
                    GWPWpath gpath = new GWPWpath();               
                    GWPWpath wpath = new GWPWpath();               
                    GWPWpath rpath = new GWPWpath();               
//                    String basePath = gpath.getProjectAbsolutePath() + "/" + "resources/images";
                    String basePath = "E:\\WorkSpace\\resources\\images";                   
                    String wPath = wpath.getWokespacePath();
                    String rPath = rpath.getProjectRelativePath();
              
                	loger.info("完整路径：" + basePath+"/"+fileName);
                	loger.info("工作空间路径：" + wPath);
                	loger.info("相对路径：" + rPath);
                    
                    File file = new File(basePath, fileName);
                    if(!file.exists()) {
                    	try {
                            item.write(file);
                        }
                        catch (Exception e) {
                            e.printStackTrace();
                        }
                    } 
                    fileNames.add(fileName); 
                }                               
            }            
        }
        
        //filenames存储到session中
        //HttpSession sess = request.getSession(true);
        //sess.setAttribute("fileNames",fileNames);
        
        
        //拼接json数据
        String jsonStr = "{\"error\":\"\"}";        
        //将数据写入流中
        try {
        	PrintWriter out= null;
            out = response.getWriter();
            out.print(jsonStr);//将json字符串转换为JSON对象，并向前端输出
	        out.flush();
	        out.close();
	     } catch (IOException e) {
	         e.printStackTrace();
	    }
        
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
