package com.ocr;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.ws.Response;

import org.apache.log4j.Logger;

import com.file.DownloadServlet;
import com.file.GWPWpath;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLDecoder;
import java.net.URLEncoder;
@WebServlet("/ApiServlet")
public class ApiServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static Logger loger=Logger.getLogger(ApiServlet.class);  
    public ApiServlet() {
        super();     
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		request.setCharacterEncoding("utf-8");					
		//取出识别类型ocr.jsp
		String recogType = request.getParameter("type");
		String strImgUrls = request.getParameter("url");
		if (strImgUrls.equals("")) {
			loger.info("123456");
			response.setStatus(407);
		}
		 loger.info("状态码："+response.getStatus());
		 loger.info("识别类型："+recogType);
		 loger.info("转码前地址："+strImgUrls);
  
		 try {
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		 
            // 构造URL    
            URL url = new URL(strImgUrls);    
            // 打开连接    
            URLConnection con = url.openConnection();    
            //设置请求超时为5s    
            con.setConnectTimeout(5*1000);    
            // 输入流    
            InputStream is = con.getInputStream();    
            
            // 1K的数据缓冲    
            byte[] bs = new byte[1024];    
            // 读取到的数据长度    
            int len;    
            // 输出的文件流    
           File sf=new File("E:/WorkSpace/resources/images/");    
          
//           String eUrl= URLEncoder.encode(strImgUrls,"UTF-8");  
           String dUrl = URLDecoder.decode( strImgUrls, "UTF-8" );
           String fileName = dUrl.substring(dUrl.lastIndexOf("/")+1);  
           
           loger.info("文件名："+fileName+"----"+"转码后地址："+dUrl);
           if(!sf.exists()){    
               sf.mkdirs();    
           }    
           String rPath = sf.getPath();
           loger.info("待识别图片路径："+rPath);
           OutputStream os = new FileOutputStream(rPath+"/"+fileName);  
          
           loger.info("--------下载开始--------");
            while ((len = is.read(bs)) != -1) {    
              os.write(bs, 0, len);    
            }    
            // 完毕，关闭所有链接    
            os.close();    
            is.close();   
     

		//获取路径
//		GWPWpath gpath = new GWPWpath();               
        //bat脚本路径
		String batPath = "E:/WorkSpace/ocr/run.bat";
        //待识别的图片路径
//        List<String> filePaths = new ArrayList<>();          		
//		filePaths.add(rPath+"/"+fileName);
//        String imgPath = String.join(";",filePaths);
		
        String imgPath = rPath+"/"+fileName;
        imgPath = imgPath.replace(" ","");
        //python ocr路径
        String ocrRoot =  "E:/WorkSpace/ocr";		
        String ocrJsonPath = ocrRoot + "/MyProject/ocr_results/";
        
        loger.info("batPath:" + batPath);
        loger.info("imgPath:" + imgPath);
        loger.info("ocrRoot:" + ocrRoot);
        
		//写bat脚本文件
        writeBatFile(batPath, ocrRoot, imgPath, recogType);
		
        loger.info("--------识别开始--------");
        //调用bat脚本
		CallPythonOcr cpo = new CallPythonOcr();
		cpo.callPythonOcr(batPath);
		
		//json结果读取，并按 文件名+json文本 返回	
		String jsonReturnMsg = "{";
//	
			String jsonText = "";	
			jsonText = readJson(ocrJsonPath + fileName + ".json");
////			jsonText = readJson("E:\\WorkSpace\\ocr\\MyProject\\ocr_results\\20161123093209206.jpg.json");


				jsonText = jsonText.replace("\\n", "<br>");
				jsonReturnMsg += "\"" + fileName + "\":" + jsonText + ",";
			
				
//		
		jsonReturnMsg = jsonReturnMsg.substring(0,jsonReturnMsg.length() - 1);
		jsonReturnMsg += "}";
			

		 loger.info("返回消息：" + jsonReturnMsg);		
		
		//设置response
		response.setCharacterEncoding("utf-8");		
//        response.setContentType("application/text; charset=utf-8");
        response.setContentType("application/json; charset=utf-8");//.json类型
//        response.setContentType("text/html; charset=utf-8");  //.stm
//        response.setContentType("text/plain; charset=utf-8");  //文本类型.txt
//        response.setContentType("text/javascript; charset=utf-8");

		
//        request.setAttribute("jsonstr", jsonReturnMsg);
// 	    request.getRequestDispatcher("api.jsp").forward(request, response);
    
        PrintWriter out = response.getWriter();  
        try {
        	out.write(jsonReturnMsg);
        } catch (Exception e) {
        	e.printStackTrace();
        }finally{
        	out.close();
        }
   	 loger.info("状态码111："+response.getStatus());
             
    }
	
	private void writeBatFile(String batPath, String projectRoot, String imgPath, String recogType) {		
		try{		         
	        //使用true，即进行append file 	 
	        FileWriter fileWritter = new FileWriter(batPath, false);
	        StringBuilder sb = new StringBuilder();
	        sb.append("cd " + projectRoot + "\r\n");
	        if(!projectRoot.startsWith("C:")) {
	        	sb.append(projectRoot.substring(0, 2) + "\r\n");
	        }
	        sb.append("python test.py " + imgPath + " " + recogType + "\n");
	        fileWritter.write(sb.toString());
	        fileWritter.close();	 
	        loger.info("Write bat file done !!");	 
	    }catch(IOException e){	 
	        e.printStackTrace();	 
	    }
	}
	
	private String readJson(String jsonPath) {		
		try{
			StringBuffer strBuf = new StringBuffer();
	        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(jsonPath), "UTF-8"));
	        int tempchar;
	        while ((tempchar = bufferedReader.read()) != -1) {
	            strBuf.append((char) tempchar);
	        }
	        
	        bufferedReader.close();
	        return strBuf.toString();
        }catch(Exception e){
            e.printStackTrace();
            return "";
        }		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doGet(request, response);
	}

}
