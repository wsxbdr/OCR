package com.file;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
 
/**
 * ��ȡ������Ŀ��һЩ·��
 * @author lisi
 *
 */
public class GWPWpath {
	
	
	private static File f = null;
	
	public GWPWpath() {
		super();
		//��ȡ����ص���Ŀ��·����һ��λ�ڿ������߹����ռ�Ŀ¼��
		f=new File(this.getClass().getResource("/../../").getPath());
	}
	
	/**
	 * ��ȡeclipse�������߹����ռ�·��
	 * @return
	 */
	public String getWokespacePath(){
		//����eclipse�����ռ���ļ�����.metadata��ȡeclipse�������߹����ռ�·��
		 String wokespacepath=f.toString().substring(0, f.toString().indexOf(".metadata"));
		return wokespacepath;
	}
	
	/**
	 * web��Ŀ����
	 * ��ȡ��Ŀ���·��
	 * @param req �������
	 * @return
	 */
	public String getProjectRelativePath(HttpServletRequest req){
		//��ȡ��Ŀ���·��
		 String projectpath=req.getSession().getServletContext().getContextPath();
		return projectpath;
	}
	
	/**
	 * ͨ��
	 * ��ȡ��Ŀ��
	 * @return
	 */
	public String getProjectRelativePath(){
		//��ȡ��Ŀ��
		String projectpath=f.toString().substring(f.toString().lastIndexOf("\\")).substring(1);
		return projectpath;
	}
	
	/**
	 * ��ǰ�����ռ��д���������Ŀ�ľ���·��
	 * ��ȡeclipse�������߹����ռ��е�ǰ��Ŀ��·��
	 * @return
	 */
	public String getProjectAbsolutePath(){
		//ƴ�ӳ���Ŀ����ǰ·��
		 String filepath=getWokespacePath()+getProjectRelativePath();
		return filepath;
	}
	
	/**
	 * ��ȡWebContent�ľ���·��
	 * @return
	 */
	public String getWebPath(){
		boolean flag=false;
		//��ǰ�����ռ��д���������Ŀ�ľ���·��
		String filepath=getProjectAbsolutePath();
		//������Ŀ����ǰ·��������ȡimg�ļ�������·��
		 File file=new File(filepath);
		 	//��ȡĿ¼�µ������ļ����ļ���
		 File[] listFiles = file.listFiles();
		 for (int i = 0; i<listFiles.length; i++) {
//			 System.out.println(listFiles[i].getName());
			 //�ж��Ƿ�ΪĿ¼����Ŀ¼���Ƿ����web
			 //˼·������file�����isDirectory()�ж��Ƿ���Ŀ¼��
			 //����file�����getName()��ȡ��ǰ�ļ����ַ����������ַ��������toLowerCase()����Сд�ļ����ַ�����
			 //�ڵ����ַ��������indexOf��ȡ�Ӵ�web���ַ��������е�һ�γ��ֵ�λ�ã����������-1��ʾ�ļ���ƥ��
			if(listFiles[i].isDirectory()&&listFiles[i].getName().toLowerCase().indexOf("web")!=-1){
				filepath=filepath+File.separator+listFiles[i].getName();
				//�ҵ�web��ƴ����ϣ�������ѭ���ˣ��������ѭ��
				 flag=true;
				 break;
			}
		}
		 if(flag){
			 return filepath;
		 }
		 return null;	
	}
	
	/**
	 * ��ȡWebContent�ڲ��ļ��еľ���·��
	 * ��ģ������,ֻƥ���һ��
	 * @param filename �ļ�����
	 * @return
	 */
	public String getWebInnerDirectoryPath(String filename){
		boolean flag=false;
		//��ȡWebContent�ľ���·��
		String filepath=getWebPath();
		if(filename==null||"".equals(filename)){
			return null;
		}
		//��ȡimg�ļ�������·��
		 File file=new File(filepath);
		//������ȡwebĿ¼�������ļ����̶�ͼƬ�ļ������ƵĻ�ֱ��ƴ�ӾͿ��Բ����ٱ���
		 	//��ȡĿ¼�µ������ļ����ļ���
		 File[] listFiles = file.listFiles();
		 for (int i = 0; i<listFiles.length; i++) {
//			 System.out.println(listFiles[i].getName());
			//�ж��Ƿ�ΪĿ¼����Ŀ¼���Ƿ����img��
			 //˼·������file�����isDirectory()�ж��Ƿ���Ŀ¼��
			 //����file�����getName()��ȡ��ǰ�ļ����ַ����������ַ��������toLowerCase()����Сд�ļ����ַ�����
			 //�ڵ����ַ��������indexOf��ȡ�Ӵ�img���ַ��������е�һ�γ��ֵ�λ�ã����������-1��ʾ�ļ���ƥ��
			if(listFiles[i].isDirectory()&&listFiles[i].getName().toLowerCase().indexOf(filename)!=-1){
				filepath=filepath+File.separator+listFiles[i].getName();
				//�ҵ�img��ƴ����ϣ�������ѭ���ˣ��������ѭ��
				 flag=true;
				 break;
			}
		}
		 if(flag){
			 return filepath;
		 }
		 return null;	
	}
}

