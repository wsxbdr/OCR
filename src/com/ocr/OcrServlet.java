package com.ocr;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import com.file.GWPWpath;

@WebServlet("/OcrServlet")
public class OcrServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static Logger loger=Logger.getLogger(CallPythonOcr.class);  
    public OcrServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//response.getWriter().append("Served at: ").append(request.getContextPath());
	
		//取出识别类型
		String recogType=request.getParameter("recogType");
		String strFilenames = request.getParameter("strFilenames");
		loger.info("识别类型："+recogType);
		loger.info("待识别图片："+strFilenames);
		
        String[] fileNames = strFilenames.split(";");      
        
		//获取路径
		GWPWpath gpath = new GWPWpath();               
        //bat脚本路径
//		String batPath = gpath.getProjectAbsolutePath() + "/" + "ocr/run.bat";
		String batPath = "E:/WorkSpace/ocr/run.bat";
        //待识别的图片路径
        List<String> filePaths = new ArrayList<>();   
        for (String fileName : fileNames) {			
//			filePaths.add(gpath.getProjectAbsolutePath() + "/" + "resources/images/" + fileName);
			filePaths.add("E:/WorkSpace/resources/images/" + fileName);
		}
        String imgPath = String.join(";",filePaths);
        //python ocr路径
//        String ocrRoot =  gpath.getProjectAbsolutePath() + "/" + "ocr";		
        String ocrRoot =  "E:/WorkSpace/ocr";		
        String ocrJsonPath = ocrRoot + "/MyProject/ocr_results/";
        
        loger.info("batPath:" + batPath);
        loger.info("imgPath:" + imgPath);
        loger.info("ocrRoot:" + ocrRoot);
        
		//写bat脚本文件
        writeBatFile(batPath, ocrRoot, imgPath, recogType);
		
        //调用bat脚本
		loger.info("--------识别开始--------");
		CallPythonOcr cpo = new CallPythonOcr();
		cpo.callPythonOcr(batPath);
		
		//json结果读取，并按 文件名+json文本 返回	
		String jsonReturnMsg = "{";
		for (String imgName : fileNames) {
			String jsonText = "";	
			jsonText = readJson(ocrJsonPath + imgName + ".json");
			jsonText = jsonText.replace("\\n", "<br>");
			jsonReturnMsg += "\"" + imgName + "\":" + jsonText + ",";		
		}		
		jsonReturnMsg = jsonReturnMsg.substring(0,jsonReturnMsg.length() - 1);
		jsonReturnMsg += "}";
		loger.info("返回消息：" + jsonReturnMsg);		
		
		//设置response
		response.setCharacterEncoding("utf-8");		
        response.setContentType("application/text; charset=utf-8");
        PrintWriter out = response.getWriter();  
        try {
        	out.write(jsonReturnMsg);
        } catch (Exception e) {
        	e.printStackTrace();
        }finally{
        	out.close();
        }
        //request.getServletContext().getRequestDispatcher("/WebOcr/ocr.jsp").forward(request,response);
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

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
