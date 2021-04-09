


/****************************************************
*
*		�ر�ҳ��ʱ���ô˺������ر��ļ� 
*
****************************************************/
function window_onunload() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.Close();
	}catch(e){
	//	alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
var local = window.location;
//var contextPath = local.pathname.split("/")[1];
var basePath = local.protocol+"//"+local.host;

var wname = window.localStorage.getItem("iname");
window.onload = setTimeout(function(){
	try {
		
//		alert(basePath);
//		alert(wname);
		
		var webObj = document.getElementById("WebOffice1");
//		webObj.LoadOriginalFile(basePath + "/ocr_results/"+wname+".docx","doc");
		webObj.LoadOriginalFile("E:/WorkSpace/ocr/MyProject/ocr_results/"+wname+".docx","doc");
	} catch (e) {
		alert(e.description);
	}
}, 500);
/****************************************************
*
*					�½��ĵ�
*
****************************************************/
function newDoc() {
	try{
		var webObj=document.getElementById("WebOffice1");
		var doctype=document.getElementById("doctype").value;
		webObj.LoadOriginalFile("", doctype);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}

/****************************************************
*
*				��ʾ��ӡ�Ի���
*
/***************************************************/
function showPrintDialog(){
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.PrintDoc(1);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					ֱ�Ӵ�ӡ
*
****************************************************/
function zhiPrint(){
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.PrintDoc(0);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*			�ر�ҳ��ʱ���ô˺������ر��ļ� 
*
****************************************************/
function window_onunload() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.Close();
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*				 ����ĵ����� 
*
****************************************************/
function UnProtect() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.ProtectDoc(0,1, document.all.docPwd.value);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			
*				�����ĵ����� 
*
****************************************************/
function ProtectFull() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.ProtectDoc(1,1, document.all.docPwd.value);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					��ֹ��ӡ
*
****************************************************/
function notPrint() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetSecurity(0x01); 
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					�ָ������ӡ
*
/****************************************************/
function okPrint() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetSecurity(0x01 + 0x8000);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}

}
/****************************************************
*
*					��ֹ����
*
****************************************************/
function notSave() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetSecurity(0x02); 
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}

}
/****************************************************
*
*					�ָ�������
*
/****************************************************/
function okSave() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetSecurity(0x02 + 0x8000);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}

}
/****************************************************
*
*					��ֹ����
*
/****************************************************/
function notCopy() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetSecurity(0x04); 
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					�ָ�������
*
/****************************************************/
function okCopy() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetSecurity(0x04 + 0x8000); 
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					��ֹ�϶�
*
/****************************************************/
function notDrag() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetSecurity(0x08); 
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					�ָ��϶�
*
/****************************************************/
function okDrag() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetSecurity(0x08 + 0x8000); 
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}

}
/****************************************************
*
*					�޶��ĵ�
*
/****************************************************/
function ProtectRevision() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetTrackRevisions(1) 
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					�����޶�
*
/****************************************************/
function UnShowRevisions() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.ShowRevisions(0);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					��ʾ��ǰ�޶�
*
/****************************************************/
function ShowRevisions() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.ShowRevisions(1);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					�˳��޶�״̬
*
/****************************************************/
function ExitRevisions() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetTrackRevisions(0);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					���ܵ�ǰ�����޶�
*
/****************************************************/
function AcceptAllRevisions() {
	try{
		var webObj=document.getElementById("WebOffice1");
 		document.all.WebOffice1.SetTrackRevisions(4);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					�ܾ���ǰ�����޶�
*
/****************************************************/
function unAcceptAllRevisions() {
	try{
		var webObj=document.getElementById("WebOffice1");
		var vCount = webObj.GetRevCount();
		var strUserName;
		for(var i=1;i<=vCount;i++){
			strUserName=webObj.GetRevInfo(i,0);
			document.all.WebOffice1.AcceptRevision(strUserName ,1)	
		}
		}catch(e){
			alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
		}
}
/****************************************************
*
*					��ȡ�޶������Ϣ
*
/****************************************************/
function GetRevAllInfo() {
var vCount;
vCount = document.all.WebOffice1.GetRevCount(); 
var vOpt = 0;
var vDate;
for(var i=1; i<= vCount; i++){
	vOpt = document.all.WebOffice1.GetRevInfo(i,2);
	if("1" == vOpt){
		vOpt = "����";
	}else if("2" == vOpt){
		vOpt = "ɾ��";
	}else{
		vOpt = "δ֪����";
	}
	vDate = new String(document.all.WebOffice1.GetRevInfo(i,1));
	vDate = parseFloat(vDate); 
	dateObj = new Date(vDate);
  alert(dateObj.getYear()   + "��" + dateObj.getMonth() + 1 + "��" + dateObj.getDate() +"��" +  dateObj.getHours() +"ʱ" +  dateObj.getMinutes() +"��" +  dateObj.getSeconds() +"��" );
	alert("�û�:"+document.all.WebOffice1.GetRevInfo(i,0) + "\r\n����:" + vOpt + "\r\n����:" + document.all.WebOffice1.GetRevInfo(i,3));
}
}
/****************************************************
*
*					���õ�ǰ�����û�
*
/****************************************************/
function SetUserName() {
	try{
		var webObj=document.getElementById("WebOffice1");
		if(document.all.UserName.value ==""){
			alert("�û�������Ϊ��")
			document.all.UserName.focus();
			return false;
		}
 		webObj.SetCurrUserName(document.all.UserName.value);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					������ǩ
*
/****************************************************/
function addBookmark() {
		alert("���괦��������Ϊtest����ǩ");
		document.all.WebOffice1.SetFieldValue("test", "������ǩtest", "::ADDMARK::");	
		

}
function taohong(){
	alert("����Ϊtest����ǩ����׺���Ϣ��׿�������������޹�˾");
	document.all.WebOffice1.SetFieldValue("test", "http://127.0.0.1:83/test.doc", "::FILE::");	
}
/****************************************************
*
*					���ģ��
*
/****************************************************/
function FillBookMarks(){
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.BookMarkOpt("/template/FillBookMarks.jsp",2);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					����office2003�ļ��˵�
*
/****************************************************/
function hideFileMenu() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Menu Bar",1,0);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					��ʾoffice2003�ļ��˵�
*
/****************************************************/
function showFileMenu() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Menu Bar",1,4);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					����office2003�༭�˵�
*
/****************************************************/
function hideEditMenu() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Menu Bar",2,0);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					��ʾoffice2003�༭�˵�
*
/****************************************************/
function showEditMenu() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Menu Bar",2,4);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					����office2003�½���ť
*
/****************************************************/
function hideNewItem() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Standard",1,0);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					��ʾoffice2003�½���ť
*
/****************************************************/
function showNewItem() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Standard",1,4);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					����office2003�򿪰�ť
*
/****************************************************/
function hideOpenItem() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Standard",2,0);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					��ʾoffice2003�򿪰�ť
*
/****************************************************/
function showOpenItem() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Standard",2,4);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					����office2003���水ť
*
/****************************************************/
function hideSaveItem() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Standard",1,0);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					��ʾoffice2003���水ť
*
/****************************************************/
function showSaveItem() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Standard",1,4);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					������ҳ
*
/****************************************************/
function return_onclick() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.Close();
		window.location.href  = "index.jsp"
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					�򿪱����ļ�
*
/****************************************************/
function docOpen() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.LoadOriginalFile("open", "doc");
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					�����ĵ�
*
/****************************************************/
function newSave() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.Save();
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					���Ϊ�ĵ�
*
/****************************************************/
function SaveAsTo() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.ShowDialog(84);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					���ز˵�
*
/****************************************************/
function notMenu() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Menu Bar",1,8);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					��ʾ�˵�
*
/****************************************************/
function okMenu() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Menu Bar",1,11);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					���س��ù�����
*
/****************************************************/
function notOfter() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Standard",1,8);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					��ʾ���ù�����
*
/****************************************************/
function okOfter() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Standard",1,11);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					���ظ�ʽ������
*
/****************************************************/
function notFormat() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Formatting",1,8);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					��ʾ��ʽ������
*
/****************************************************/
function okFormat() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.SetToolBarButton2("Formatting",1,11);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}    
/****************************************************
*
*					�׺켰���ݽ���
*
/****************************************************/
function linkRed() {
		window.open("mark.html","newwindow",'height=768, width=1024, top=0, left=0, toolbar=yes,resizable=yes, menubar=yes,location=yes, status=yes');
} 
/****************************************************
*
*					�ϴ��ĵ�
*
/****************************************************/
function SaveDoc(id,docType) {
	try{
		var webObj=document.getElementById("WebOffice1");
		var returnValue;
		 if(myform.DocTitle.value ==""){
			alert("���ⲻ��Ϊ��")
			myform.DocTitle.focus();
			return false;
		}
		if(myform.DocID.value ==""){
			alert("�ĺŲ���Ϊ��")
			myform.DocID.focus();
			return false;
		}
		
		webObj.HttpInit();			//��ʼ��Http����
		// �����Ӧ��PostԪ�� 
		webObj.HttpAddPostString("id", id);
		webObj.HttpAddPostString("DocTitle", myform.DocTitle.value);
		webObj.HttpAddPostString("DocID", myform.DocID.value);
		webObj.HttpAddPostString("DocType",docType);
		webObj.HttpAddPostCurrFile("DocContent","");		// �ϴ��ļ�
		returnValue = webObj.HttpPost("/savedoc.jsp");	// �ж��ϴ��Ƿ�ɹ�
		if("succeed" == returnValue){
			alert("�ļ��ϴ��ɹ�");	
		}else if("failed" == returnValue)
			alert("�ļ��ϴ�ʧ��");
		return_onclick(); 
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					ȫ��
*
/****************************************************/
function bToolBar_FullScreen_onclick() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.FullScreen = true;
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*	����weboffice�Դ����������½��ĵ�����ʾ������
*
/****************************************************/
function bToolBar_New_onclick() {
	try{
		var webObj=document.getElementById("WebOffice1");
		var vCurItem = document.all.WebOffice1.HideMenuItem(0);
		//����vCurItem�жϵ�ǰ��ť�Ƿ���ʾ
		if(vCurItem & 0x01){
			webObj.HideMenuItem(0x01); //Show it
		}else{
			webObj.HideMenuItem(0x01 + 0x8000); //Hide it
		}
		
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*	����weboffice�Դ������������ĵ�����ʾ������
*
/****************************************************/
function bToolBar_Open_onclick() {
	try{
		var webObj=document.getElementById("WebOffice1");
		var vCurItem = webObj.HideMenuItem(0);
		//����vCurItem�жϵ�ǰ��ť�Ƿ���ʾ
		if(vCurItem & 0x02){
			webObj.HideMenuItem(0x02); //Show it
		}else{
			webObj.HideMenuItem(0x02 + 0x8000); //Hide it
		}
		
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*	����weboffice�Դ��������������ĵ�����ʾ������
*
/****************************************************/
function bToolBar_Save_onclick() {
	try{
		var webObj=document.getElementById("WebOffice1");
		var vCurItem = webObj.HideMenuItem(0);
		//����vCurItem�жϵ�ǰ��ť�Ƿ���ʾ
		if(vCurItem & 0x04){
			webObj.HideMenuItem(0x04); //Show it
		}else{
			webObj.HideMenuItem(0x04 + 0x8000); //Hide it
		}
		
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*		����weboffice�Դ���������ʾ������
*
/****************************************************/
function bToolBar_onclick() {
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.ShowToolBar =  !webObj.ShowToolBar;
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*			�õ���ǰ�ĵ��û��б�
*
/****************************************************/
function ReUserList_onclick()
{
	var webObj=document.getElementById("WebOffice1");
	var vCount = webObj.GetRevCount();
//1.Remove All
 	var selLen= document.all.UserList.length;
	for (i=0;i<selLen;i++){
		document.all.UserList.remove(0);
	}
//2.ReLoad All	 
	var vCount;
	vCount = webObj.GetRevCount();
		var  el1   =   document.createElement("OPTION");   
		el1.text  ="--��ѡ���û�--";   
		document.all.UserList.options.add(el1);	 
	
	for(var i=1;i<=vCount;i++){
		var strUserName=webObj.GetRevInfo(i,0);
		var  el   =   document.createElement("OPTION");   
		el.text   =   strUserName;   
		el.value   =   strUserName;   
		document.all.UserList.options.add(el);	   
	}
}

/*************************************************
���ܣ�����ʾ��ε���VBA�ӿ�
      WebOffice�ṩGetDocumentObject()�Ľӿڵ�������
      Word �������ǣ�MSWord::_Document
      Excel��������: MSExcel::_Workbook
      WPS  ��������: WPS::_Document
���ӣ�
1.ͨ��VBA��ȡ��ǰ�û����û���
  document.all.WebOffice1.GetDocumentObject().Application.UserName;
2.��ȡ�ĵ��ı���
	document.all.WebOffice1.GetDocumentObject().FullName;
**************************************************/

function TestVBA(){
	try{
		var webObj=document.getElementById("WebOffice1");
		var vObj = webObj.GetDocumentObject();
		if(!vObj){
			alert("��ȡ����ʧ�ܣ����ʵ���Ѿ����ĵ�");
			return false;
		}
		var vUserName;
		var vFullName;
		var vDocType = webObj.DocType;
		if(11==vDocType){ //����WOrd�ļ�
				vUserName = vObj.Application.UserName;
				vFullName = vObj.Name;
		}else if(12==vDocType){  //����Excel�ļ�
				vUserName = vObj.Application.UserName;
				vFullName = vObj.Name;
		}else{
			alert("��֧�ֵ��ļ���ʽ");
			return false;
		}
		alert("VBA���Խ��\r\n�û���:"+vUserName+"\r\n�ĵ���:"+vFullName+"\r\n���Բ��մ�����������VBA����");
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					�����޶�
*
/****************************************************/
function AcceptRevision_onclick() {
	try{	
	var webObj=document.getElementById("WebOffice1");
		var strUserName=document.all.UserList.value;
		document.all.WebOffice1.AcceptRevision(strUserName ,0)	
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					�ܾ��޶�
*
/****************************************************/
function unAcceptRevision_onclick() {
	try{	
		var webObj=document.getElementById("WebOffice1");
		var strUserName=document.all.UserList.value;
		webObj.AcceptRevision(strUserName ,1)	
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}

}
/****************************************************
*
*		��ʾ������ӡ�¹�����
*	 ͨ��¼��VBA�鿴�����������ơ�
*	Ȼ����Բ������淽ʽ����ʾ������
*
/****************************************************/
function ShowToolBar_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		//ͨ��Document->application->CommandBars ��ȡ���˵�����
		var vObj = webObj.GetDocumentObject().Application.CommandBars("����ӡ��");
		vObj.Visible = !vObj.Visible
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*					����
*
/****************************************************/
function AddSeal_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
   		 //ͨ��Document->application->CommandBars ��ȡ���˵�����
  		var vObj = webObj.GetDocumentObject().Application.CommandBars("����ӡ��");
		if(vObj) vObj.Controls("����").Execute();
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*			Office2007�˵����غͻָ�
*			----��ʼ�˵�����
*
/****************************************************/
function beginMenu_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.HideMenuAction(1,0x100000);
		webObj. HideMenuAction(5,0);//��������
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*
*			Office2007�˵����غͻָ�
*			---����˵�����
*
/****************************************************/
function insertMenu_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.HideMenuAction(1,0x200000);
		webObj. HideMenuAction(5,0);//��������

	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			
*			Office2007�˵����غͻָ�
*			---ҳ��˵�����
*
/****************************************************/
function pageMenu_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.HideMenuAction(1,0x400000);
		webObj. HideMenuAction(5,0);//��������
	
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			Office2007�˵����غͻָ�
*			--���ò˵�����
*
/****************************************************/
function adducMenu_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.HideMenuAction(1,0x800000);
		webObj. HideMenuAction(5,0);//��������

	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			Office2007�˵����غͻָ�
*			---�ʼ��˵�����
*
/****************************************************/
function	emailMenu_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.HideMenuAction(1,0x1000000);
		webObj. HideMenuAction(5,0);//��������
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			Office2007�˵����غͻָ�
*			---���Ĳ˵�����
*
/****************************************************/
function	checkMenu_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.HideMenuAction(1,0x2000000);
		webObj. HideMenuAction(5,0);//��������
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			Office2007�˵����غͻָ�
*			---��ͼ�˵�����
*
/****************************************************/
function	viewMenu_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.HideMenuAction(1,0x4000000);
		webObj. HideMenuAction(5,0);//��������
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			Office2007�˵����غͻָ�
*			---�������߲˵�����
*
/****************************************************/
function	empolderMenu_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.HideMenuAction(1,0x8000000);
		webObj. HideMenuAction(5,0);//��������
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			Office2007�˵����غͻָ�
*			---������˵�����
*
/****************************************************/
function	loadMenu_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.HideMenuAction(1,0x10000000);
		webObj. HideMenuAction(5,0);//��������
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			Office2007�˵����غͻָ�
*			---ȫ���˵�����
*
/****************************************************/
function	allHideMenu_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj.HideMenuAction(1,0x100000+0x200000+0x400000+0x800000+0x1000000+0x2000000+0x4000000+0x8000000+0x10000000);
		webObj. HideMenuAction(5,0);//��������
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			Office2007�˵����غͻָ�
*			---������Ч
*
/****************************************************/
function nullityCopy_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj. HideMenuAction(1,0x2000);
		webObj. HideMenuAction(5,0);//��������
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			Office2007�˵����غͻָ�
*			---ճ����Ч
*
/****************************************************/
function nullityAffix_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj. HideMenuAction(1,0x1000);
		webObj. HideMenuAction(5,0);//��������
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			Office2007�˵����غͻָ�
*	---�ָ�������֮ǰ״̬���˵���ʾ�����ƣ�ճ�����ã�
*
/****************************************************/
function affixCopy_onclick()
{
	try{
		var webObj=document.getElementById("WebOffice1");
		webObj. HideMenuAction(6,0);
	}catch(e){
		alert("�쳣\r\nError:"+e+"\r\nError Code:"+e.number+"\r\nError Des:"+e.description);
	}
}
/****************************************************
*			
*	---����ӡ��
*
/****************************************************/


function hideSeal(){
	var obj;
	try{
        obj = new Object(document.all.WebOffice1.GetDocumentObject());
         if(obj !=null){
         obj.Application.CommandBars("����ӡ��").Visible = !obj.CommandBars("����ӡ��").Visible;
        
					}
	
	
	    delete obj;
    }catch(e){
    	alert("������ʾӡ�¹���������");
    	}
}

function write2(){
	var obj1;
	try{
        obj1 = new Object(document.all.WebOffice1.GetDocumentObject());
         if(obj1 !=null){
         obj1.Application.CommandBars("����ӡ��").Controls("����").Execute();
        
					}
	
	
	delete obj1;
	}catch(e){
    	alert("���³���");
    	}
}
/****************************************************
*			
*	---����
*
/**/
function ChangeFace(kind){
	if(kind==1){
		
		
		document.all.WebOffice1.SetCustomColour(2,250*256*256+244*256+243);
		document.all.WebOffice1.SetCustomColour(1,236*256*256+226*256+225);
		document.all.WebOffice1.SetCustomColour(3,181*256*256+151*256+153);
		document.all.WebOffice1.SetCustomColour(0,247*256*256+243*256+243);
	}
	if(kind==2){
		document.all.WebOffice1.SetCustomColour(2,59*256*256+97*256+131);
		document.all.WebOffice1.SetCustomColour(1,138*256*256+216*256+239);
		document.all.WebOffice1.SetCustomColour(3,53*256*256+94*256+133);
		document.all.WebOffice1.SetCustomColour(0,52*256*256+92*256+130);
	}
	if(kind==3){
		document.all.WebOffice1.SetCustomColour(2,254*256*256+235*256+220);
		document.all.WebOffice1.SetCustomColour(1,249*256*256+219*256+196);
		document.all.WebOffice1.SetCustomColour(3,228*256*256+174*256+136);
		document.all.WebOffice1.SetCustomColour(0,249*256*256+214*256+191);
		
	}
	
}

/****************************************************
*			
*	---�Զ��幤������Ӱ�ť
*
/*****************************************************/
function SetCustomToolBtn(index,name){
	
	document.all.WebOffice1.SetCustomToolBtn(index,name);
	
}
/****************************************************
*			
*	---WebOffice�������¼�������
*
/*****************************************************/
function WebOffice1_NotifyToolBarClick(iIndex){
	if(iIndex>=32776){
			alert(iIndex+"�¼Ӱ�ť�������¼���������д�Լ��Ĺ���");
	}

}
/****************************************************
*			
*	---����office�˵�������
*
/*****************************************************/

function hideAll(pcExcludeBar1,pcExcludeBar2,pcExcludeBar3,pcExcludeBar4){
	document.all.WebOffice1.HideMenuArea(pcExcludeBar1,pcExcludeBar2,pcExcludeBar3,pcExcludeBar4);
}

function UnActiveExcel(){
	document.all.WebOffice1.UnActiveExcel();
}

function GetFileBase64(){
	var v=document.all.WebOffice1.GetFileBase64("",0);
	document.all.FileBase64.value=v;
	document.all.CreateFile5.style.display="block";
	document.all.FileBase64.style.display="block";
	
	
}
function SaveBinaryFileFromBase64(){	
	var tempPath=document.all.WebOffice1.GetTempFilePath();//��ȡ��ʱ�ļ�·��
	var v=document.all.FileBase64.value;
	alert("�ĵ��浽������ʱ·����"+tempPath);
	document.all.WebOffice1.SaveBinaryFileFromBase64(tempPath,v);
	
} 

function GetNowDateTime()
 {
    var nowTime = new Date();
    var NowDateTime = nowTime.getFullYear() + "��" + 
                        (nowTime.getMonth() + 1 )+ "��" + 
                        nowTime.getDate() + "��"  + 
                        " " +
                        nowTime.getHours() + ":" +
                        nowTime.getMinutes() + ":" +
                        nowTime.getSeconds() + "." +
                        nowTime.getMilliseconds();
   var NowDateTime = nowTime.toLocaleString();
   return NowDateTime;
 }
//���һ���¼���¼

//���������ʾ�¼�
function WebOffice_Event_Flash(EventName)
{
	var vValue = "�¼�:"+EventName+"\t\t������:" +GetNowDateTime() + "\r\n"+document.all.commandtext.value;
	document.all.commandtext.value = vValue;
}