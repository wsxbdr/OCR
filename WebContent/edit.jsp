<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>WebOffice模块</title>
</head>
<script language="javascript">
	var isOpen=false;
	var currentPath=""
	
	//保存文档 
	function  SaveLoaclFile() {
	    if(currentPath!=""){
	        try{
	            var WebOffice=document.getElementById("WebOffice"); 
	            WebOffice.ActiveDocument.SaveAs(currentPath);
	        }catch(e){
	            alert("信息提示：\r\n出错内容:"+e+"\r\n错误代码:"+e.number+"\r\n错误描述:"+e.description);
	        }
	    }
	}
	//打开本地文件
	function openLocalFile(){
	    if(1){	        
	        currentPath = document.getElementById('localfile').value;
	        try{
	        	var WebOffice=document.getElementById("WebOffice");	
		        if((currentPath.indexOf(".doc") != -1)){
		        	WebOffice.Open(currentPath,true,"Word.Document");
		        }else if(currentPath.indexOf(".docx") != -1){
		        	WebOffice.Open(currentPath,true,"Word.Document");
		        }else if(currentPath.indexOf(".xls") != -1){
		        	WebOffice.Open(currentPath,true,"Excel.Sheet");
		        }else if(currentPath.indexOf(".xlsx") != -1){
		        	WebOffice.Open(currentPath,true,"xlsx");
		        }else if(currentPath.indexOf(".ppt") != -1){
		        	WebOffice.Open(currentPath,true,"PowerPoint.Show");
		        }else if(currentPath.indexOf(".pptx") != -1){
		        	WebOffice.Open(currentPath,true,"pptx");
		        }	        
		        isOpen=true;   
	        }catch(e){
	        	alert("信息提示：\r\n出错内容:"+e+"\r\n错误代码:"+e.number+"\r\n错误描述:"+e.description);
	        }	             
	    }
	}
	//关闭窗口
	function closeWindow()
	{
	    window.opener=null;window.open('','_self','');window.close();
	}
</script>
<body>
<div>    
           编辑本地文件：<input type="file" id="localfile" onchange="openLocalFile();">     
    <input type=button onclick="SaveLoaclFile();" value="保存">
    <input type=button onclick="closeWindow();" value="关闭窗口">
</div>
<script language="javascript">
	if (!!window.ActiveXObject || "ActiveXObject" in window){
		document.write('<object classid="clsid:FF09E4FA-BFAA-486E-ACB4-86EB0AE875D5" codebase="WebOffice.ocx#Version=2019,1,7,3" id="WebOffice" width="1800" height="900" >');
		document.write("<param name='_ExtentX' value='6350'><param name='_ExtentY' value='6350'>")
		document.write('</object>');}
	else{
		document.write('<object id="WebOffice" CLSID="{FF09E4FA-BFAA-486E-ACB4-86EB0AE875D5}" TYPE="application/x-itst-activex"  width=200% height=900></object>');
	}
</script>
</body>
</html>