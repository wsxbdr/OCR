package com.ocr;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.file.GWPWpath;
import com.google.gson.GsonBuilder;
import com.sun.xml.internal.bind.v2.runtime.Name;

/**
 * Servlet implementation class ZcOcrServlet
 */
@WebServlet("/ZcOcrServlet")
public class ZcOcrServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static Logger loger=Logger.getLogger(CallPythonOcr.class); 
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ZcOcrServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		System.out.println("--------识别开始--------");
		
		//取出识别类型
		String pdfName = request.getParameter("pdfName");
		String name = request.getParameter("name");
		String item = request.getParameter("item");
		
        System.out.println("待识别pdf文件名："+pdfName);
        System.out.println("执行人姓名："+name);
        System.out.println("待操作事项："+item);
		
//        String[] fileNames = strFilenames.split(";");      
        
		//获取路径
		GWPWpath gpath = new GWPWpath();                  
		//python ocr路径
		String ocrRoot = "E:/WorkSpace/webUI";
		   //bat脚本路径
		String batPath = ocrRoot + "/run.bat";
        //待识别的图片路径
        List<String> filePaths = new ArrayList<>();   
      		
		filePaths.add(ocrRoot + "/MyProject/source_data/" + pdfName);
	
        String pdfPath = String.join(";",filePaths);
     
	
        String ocrJsonPath = ocrRoot + "/MyProject/";
        
        System.out.println("batPath:" + batPath);
		System.out.println("pdfPath:" + pdfPath);
		System.out.println("ocrRoot:" + ocrRoot);
        
		//写bat脚本文件
        writeBatFile(batPath, ocrRoot, pdfPath, name, item);
		
        //调用bat脚本
		CallPythonOcr cpo = new CallPythonOcr();
		cpo.callPythonOcr(batPath);
		
		//json结果读取，并按 文件名+json文本 返回	
		String jsonReturnMsg = "[";
		
//		    String jsonReturnMsg = "";		
			String jsonText = "";	
			String jsonText1 = "";	
			jsonText = readJson(ocrJsonPath + "extract_result.json");
			jsonText1 = readJson(ocrJsonPath + "decision_result.json");
//			jsonText = jsonText.replace("\\n", "<br>");
//			jsonReturnMsg += "\"" + pdfName + "\":" + jsonText + ",";		
			jsonReturnMsg += jsonText + "," + jsonText1;
		
		jsonReturnMsg = jsonReturnMsg.substring(0,jsonReturnMsg.length());
		jsonReturnMsg += "]";
			
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


       
    }
	
	private void writeBatFile(String batPath, String projectRoot, String pdfPath,String name,String item) {		
		try{		         
	        //使用true，即进行append file 	 
	        FileWriter fileWritter = new FileWriter(batPath, false);
	        StringBuilder sb = new StringBuilder();
	        sb.append("cd " + projectRoot + "\r\n");
	        if(!projectRoot.startsWith("C:")) {
	        	sb.append(projectRoot.substring(0, 2) + "\r\n");
	        }
	        
	        sb.append("python test.py " + pdfPath + " " + name + " " + item + "\n");
	        loger.info(sb.toString()+"+++++++");	

	        fileWritter.write(sb.toString());

	        fileWritter.close();	 
	        System.out.println("Write bat file done !!");	 
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
