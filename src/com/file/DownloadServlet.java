package com.file;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.Reader;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.log4j.Logger;

import com.sun.org.apache.xerces.internal.impl.xs.opti.DefaultDocument;
/**
 * Servlet implementation class DownloadServlet
 */
@WebServlet("/DownloadServlet")
public class DownloadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static Logger loger=Logger.getLogger(DownloadServlet.class);   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DownloadServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		       
        String path = "";
        String fileName = request.getParameter("fileName");
        OutputStream out = null;
        FileInputStream fis = null;
        // 1.获取资源文件的路径，当文件名是中文的时候出现不正常的情况，所以需要进行url编码
        GWPWpath gpath = new GWPWpath();   
        if (fileName.equals("document.pdf")||fileName.equals("zallocr.apk")||fileName.equals("WebOffice.exe")) {
        	 path = gpath.getProjectAbsolutePath() + "/WebContent/res/" + fileName;
        	loger.info("资源地址："+path);
		}else {
			 path = "E:\\WorkSpace\\ocr\\MyProject\\ocr_results\\" + fileName;
			loger.info("资源地址："+path);
		}
        
        
//        String path = gpath.getProjectAbsolutePath() + "/ocr/MyProject/ocr_results/" + URLEncoder.encode(fileName, "UTF-8");
//        String path = "E:\\WorkSpace\\resources\\" + fileName;
//        String path = gpath.getProjectAbsolutePath() + "/WebContent/res/" + fileName;
        try {
            // 2.根据获取到的路径，构建文件流对象
            fis = new FileInputStream(path);
            out = response.getOutputStream();
            // 3.设置让浏览器不进行缓存，不然会发现下载功能在opera和firefox里面好好的没问题，在IE下面就是不行，就是找不到文件
            response.setHeader("Pragma", "No-cache");
            response.setHeader("Cache-Control", "No-cache");
            response.setDateHeader("Expires", -1);
            // 4.设置Content-type字段
            //response.setContentType("image/jpeg");
            // 5.设置http响应头，告诉浏览器以下载的方式处理我们的响应信息
            response.setHeader("content-disposition", "attachment;filename=" + URLEncoder.encode(fileName, "UTF-8"));
            loger.info("开始下载---------->");
            // 6.开始写文件
            byte[] buf = new byte[1024];
            int len = 0;
            while ((len = fis.read(buf)) != -1) {
                out.write(buf, 0, len);
            }
        } finally {
            if (fis != null) {
                fis.close();
            }
        }
        loger.info("下载完毕！");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
