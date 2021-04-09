package com.ocr;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.apache.log4j.Logger;

public class CallPythonOcr {
	private static Logger loger=Logger.getLogger(CallPythonOcr.class);  
	public void callPythonOcr(String batPath) {
		//String batPath = "C:/Philips/SIServer/PostStartupScript.bat"; // 把你的bat脚本路径写在这里
        File batFile = new File(batPath);
        boolean batFileExist = batFile.exists();
        loger.info("batFileExist:" + batFileExist);
        if (batFileExist) {
            callCmd(batPath);
        }
	}
	private static void callCmd(String locationCmd){
		String cmdStr = "cmd /c " + locationCmd;
        StringBuilder sb = new StringBuilder();
        try {
            Process child = Runtime.getRuntime().exec(cmdStr);
            InputStream in = child.getInputStream();
            BufferedReader bufferedReader=new BufferedReader(new InputStreamReader(in));
            String line;
            while((line=bufferedReader.readLine())!=null)
            {
                sb.append(line + "\n");
            }
            in.close();
            try {
                child.waitFor();
            } catch (InterruptedException e) {
            	loger.info(e);
            }
            loger.info("sb:" + sb.toString());
            loger.info("callCmd execute finished");           
        } catch (IOException e) {
        	loger.info(e);
        }
     }
}
