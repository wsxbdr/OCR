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
        // 1.��ȡ��Դ�ļ���·�������ļ��������ĵ�ʱ����ֲ������������������Ҫ����url����
        GWPWpath gpath = new GWPWpath();   
        if (fileName.equals("document.pdf")||fileName.equals("zallocr.apk")||fileName.equals("WebOffice.exe")) {
        	 path = gpath.getProjectAbsolutePath() + "/WebContent/res/" + fileName;
        	loger.info("��Դ��ַ��"+path);
		}else {
			 path = "E:\\WorkSpace\\ocr\\MyProject\\ocr_results\\" + fileName;
			loger.info("��Դ��ַ��"+path);
		}
        
        
//        String path = gpath.getProjectAbsolutePath() + "/ocr/MyProject/ocr_results/" + URLEncoder.encode(fileName, "UTF-8");
//        String path = "E:\\WorkSpace\\resources\\" + fileName;
//        String path = gpath.getProjectAbsolutePath() + "/WebContent/res/" + fileName;
        try {
            // 2.���ݻ�ȡ����·���������ļ�������
            fis = new FileInputStream(path);
            out = response.getOutputStream();
            // 3.����������������л��棬��Ȼ�ᷢ�����ع�����opera��firefox����úõ�û���⣬��IE������ǲ��У������Ҳ����ļ�
            response.setHeader("Pragma", "No-cache");
            response.setHeader("Cache-Control", "No-cache");
            response.setDateHeader("Expires", -1);
            // 4.����Content-type�ֶ�
            //response.setContentType("image/jpeg");
            // 5.����http��Ӧͷ����������������صķ�ʽ�������ǵ���Ӧ��Ϣ
            response.setHeader("content-disposition", "attachment;filename=" + URLEncoder.encode(fileName, "UTF-8"));
            loger.info("��ʼ����---------->");
            // 6.��ʼд�ļ�
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
        loger.info("������ϣ�");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
