package com.file;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
 
/**
 * 获取本地项目的一些路径
 * @author lisi
 *
 */
public class GWPWpath {
	
	
	private static File f = null;
	
	public GWPWpath() {
		super();
		//获取类加载的项目根路径，一般位于开发工具工作空间目录下
		f=new File(this.getClass().getResource("/../../").getPath());
	}
	
	/**
	 * 获取eclipse开发工具工作空间路径
	 * @return
	 */
	public String getWokespacePath(){
		//根据eclipse工作空间的文件夹名.metadata获取eclipse开发工具工作空间路径
		 String wokespacepath=f.toString().substring(0, f.toString().indexOf(".metadata"));
		return wokespacepath;
	}
	
	/**
	 * web项目可用
	 * 获取项目相对路径
	 * @param req 请求对象
	 * @return
	 */
	public String getProjectRelativePath(HttpServletRequest req){
		//获取项目相对路径
		 String projectpath=req.getSession().getServletContext().getContextPath();
		return projectpath;
	}
	
	/**
	 * 通用
	 * 获取项目名
	 * @return
	 */
	public String getProjectRelativePath(){
		//获取项目名
		String projectpath=f.toString().substring(f.toString().lastIndexOf("\\")).substring(1);
		return projectpath;
	}
	
	/**
	 * 当前工作空间中此类所在项目的绝对路径
	 * 获取eclipse开发工具工作空间中当前项目的路径
	 * @return
	 */
	public String getProjectAbsolutePath(){
		//拼接成项目部署前路径
		 String filepath=getWokespacePath()+getProjectRelativePath();
		return filepath;
	}
	
	/**
	 * 获取WebContent的绝对路径
	 * @return
	 */
	public String getWebPath(){
		boolean flag=false;
		//当前工作空间中此类所在项目的绝对路径
		String filepath=getProjectAbsolutePath();
		//根据项目部署前路径遍历获取img文件夹所在路径
		 File file=new File(filepath);
		 	//获取目录下的所有文件及文件夹
		 File[] listFiles = file.listFiles();
		 for (int i = 0; i<listFiles.length; i++) {
//			 System.out.println(listFiles[i].getName());
			 //判断是否为目录，且目录名是否包含web
			 //思路：调用file对象的isDirectory()判断是否是目录，
			 //调用file对象的getName()获取当前文件名字符串并调用字符串对象的toLowerCase()返回小写文件名字符串，
			 //在调用字符串对象的indexOf获取子串web在字符串对象中第一次出现的位置，如果不等于-1表示文件名匹配
			if(listFiles[i].isDirectory()&&listFiles[i].getName().toLowerCase().indexOf("web")!=-1){
				filepath=filepath+File.separator+listFiles[i].getName();
				//找到web并拼接完毕，不用在循环了，跳出这个循环
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
	 * 获取WebContent内部文件夹的绝对路径
	 * 可模糊搜索,只匹配第一个
	 * @param filename 文件夹名
	 * @return
	 */
	public String getWebInnerDirectoryPath(String filename){
		boolean flag=false;
		//获取WebContent的绝对路径
		String filepath=getWebPath();
		if(filename==null||"".equals(filename)){
			return null;
		}
		//获取img文件夹所在路径
		 File file=new File(filepath);
		//遍历获取web目录下所有文件，固定图片文件夹名称的话直接拼接就可以不用再遍历
		 	//获取目录下的所有文件及文件夹
		 File[] listFiles = file.listFiles();
		 for (int i = 0; i<listFiles.length; i++) {
//			 System.out.println(listFiles[i].getName());
			//判断是否为目录，且目录名是否包含img，
			 //思路：调用file对象的isDirectory()判断是否是目录，
			 //调用file对象的getName()获取当前文件名字符串并调用字符串对象的toLowerCase()返回小写文件名字符串，
			 //在调用字符串对象的indexOf获取子串img在字符串对象中第一次出现的位置，如果不等于-1表示文件名匹配
			if(listFiles[i].isDirectory()&&listFiles[i].getName().toLowerCase().indexOf(filename)!=-1){
				filepath=filepath+File.separator+listFiles[i].getName();
				//找到img并拼接完毕，不用在循环了，跳出这个循环
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

