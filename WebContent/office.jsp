<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<HTML><HEAD><TITLE>在线编辑</TITLE>
<META http-equiv=Content-Type content="text/html; charset=gb2312">
<LINK href="css/office.css" type=text/css rel=stylesheet>
<SCRIPT src="js/office.js" type=text/javascript></SCRIPT>
<!-- --------------------=== 调用Weboffice初始化方法 ===--------------------- -->
<SCRIPT language=javascript event=NotifyCtrlReady for=WebOffice1>
/****************************************************
*
*	在装载完Weboffice(执行<object>...</object>)
*	控件后执行 "WebOffice1_NotifyCtrlReady"方法
*
****************************************************/
    WebOffice_Event_Flash("NotifyCtrlReady");
	WebOffice1_NotifyCtrlReady()
</SCRIPT>

<SCRIPT language=javascript event=NotifyWordEvent(eventname) for=WebOffice1>
<!--
WebOffice_Event_Flash("NotifyWordEvent");
 WebOffice1_NotifyWordEvent(eventname);
 
//-->
</SCRIPT>

<SCRIPT language=javascript event=NotifyToolBarClick(iIndex) for=WebOffice1>
<!--
  WebOffice_Event_Flash("NotifyToolBarClick");
 WebOffice1_NotifyToolBarClick(iIndex);
//-->
</SCRIPT>

<SCRIPT language=javascript>
/****************************************************
*
*		控件初始化WebOffice方法
*
****************************************************/
function WebOffice1_NotifyCtrlReady() {

	document.all.WebOffice1.OptionFlag |= 128;
	// 新建文档
	//document.all.WebOffice1.LoadOriginalFile("", "doc");
	spnWebOfficeInfo.innerText="----   您电脑上安装的WebOffice版本为:V" + document.all.WebOffice1.GetOcxVersion() +"\t\t\t本实例是根据版本V6044编写";
}
var flag=false;
function menuOnClick(id){
	var id=document.getElementById(id);
	var dis=id.style.display;
	if(dis!="none"){
		id.style.display="none";
		
	}else{
		id.style.display="block";
	}
}
/****************************************************
*
*		接收office事件处理方法
*
****************************************************/
var vNoCopy = 0;
var vNoPrint = 0;
var vNoSave = 0;
var vClose=0;
function no_copy(){
	vNoCopy = 1;
}
function yes_copy(){
	vNoCopy = 0;
}


function no_print(){
	vNoPrint = 1;
}
function yes_print(){
	vNoPrint = 0;
}


function no_save(){
	vNoSave = 1;
}
function yes_save(){
	vNoSave = 0;
}
function EnableClose(flag){
 vClose=flag;
}
function CloseWord(){
	
  document.all.WebOffice1.CloseDoc(0); 
}

function WebOffice1_NotifyWordEvent(eventname) {
	if(eventname=="DocumentBeforeSave"){
		if(vNoSave){
			document.all.WebOffice1.lContinue = 0;
			alert("此文档已经禁止保存");
		}else{
			document.all.WebOffice1.lContinue = 1;
		}
	}else if(eventname=="DocumentBeforePrint"){
		if(vNoPrint){
			document.all.WebOffice1.lContinue = 0;
			alert("此文档已经禁止打印");
		}else{
			document.all.WebOffice1.lContinue = 1;
		}
	}else if(eventname=="WindowSelectionChange"){
		if(vNoCopy){
			document.all.WebOffice1.lContinue = 0;
			//alert("此文档已经禁止复制");
		}else{
			document.all.WebOffice1.lContinue = 1;
		}
	}else   if(eventname =="DocumentBeforeClose"){
	    if(vClose==0){
	    	document.all.WebOffice1.lContinue=0;
	    } else{
	    	//alert("word");
		    document.all.WebOffice1.lContinue = 1;
		  }
 }
	//alert(eventname); 
}
function dd(){

	document.all.WebOffice1.FullScreen=0;

}</SCRIPT>
<LINK href="./style.css" type=text/css rel=stylesheet>
<META content="MSHTML 6.00.2900.5921" name=GENERATOR></HEAD>
<BODY style="BACKGROUND: #ccc" onunload="return window_onunload()">
<CENTER>
<DIV 
style="PADDING-RIGHT: 0px; PADDING-LEFT: 0px; BACKGROUND: #fff; PADDING-BOTTOM: 0px; MARGIN: -10px 0px 0px; WIDTH: 100%; PADDING-TOP: 10px; HEIGHT: 100%" 
align=center>
<FORM name=myform>



<BR>
<TABLE class=TableBlock width="100%" height="100%">
  <TBODY>
  <TR>
    <TD class=leftTableData vAlign=top width="5%" height="100%">
      <DIV class=menuItem onclick="menuOnClick('chc')">常用接口调用 </DIV>
      <DIV id=chc><!-- ---------------=== 该处文件格式的value不可以自定义 ===------------------------- --><SELECT 
      id=doctype size=1 name=doctype> <OPTION value=doc selected>Word</OPTION> 
        <OPTION value=xls>Excel</OPTION> <OPTION value=wps>wps</OPTION></SELECT> <INPUT class=btn id=CreateFile onclick=newDoc() type=button value=新建文档 name=CreateFile> 
<INPUT class=btn onclick="return docOpen()" type=button value=打开本地文件 name=button> 
<INPUT class=btn id=showPrint onclick=showPrintDialog() type=button value=显示对话框 name=CreateFile4> 
<INPUT class=btn id=zhiPrints onclick=zhiPrint() type=button value=直接打印 name=zhiPrints> 
<INPUT class=btn id=CreateFile2 onclick=newSave() type=button value=保存 name=CreateFile2> 
<INPUT class=btn id=CreateFile3 onclick=SaveAsTo() type=button value=另存为 name=CreateFile3> 
 
      </DIV>
      <DIV class=menuItem onclick="menuOnClick('docSafe')">文档安全设置 </DIV>
      <DIV id=docSafe style="DISPLAY: none">保护密码： <INPUT style="WIDTH: 74px" 
       value=Password name=docPwd> <INPUT class=btn onclick="return ProtectFull()" type=button value=保护文档> <INPUT class=btn onclick="return UnProtect()" type=button value=解除保护 name=button3> 
<INPUT class=btn onclick="return notPrint()" type=button value=禁用打印> <INPUT class=btn onclick="return okPrint()" type=button value=启用打印 name=button3> 
<INPUT class=btn onclick="return notSave()" type=button value=禁止保存 name=button10> 
<INPUT class=btn onclick="return okSave()" type=button value=允许保存 name=button32> 
<INPUT class=btn onclick="return notCopy()" type=button value=禁止复制 name=button11> 
<INPUT class=btn onclick="return okCopy()" type=button value=允许复制 name=button33> 
<INPUT class=btn onclick="return notDrag()" type=button value=禁止拖动 name=but11> 
<INPUT class=btn onclick="return okDrag()" type=button value=允许拖动 name=but33> 
      事件控制方式： <INPUT class=btn onclick="return no_print()" type=button value=禁用打印> <INPUT class=btn onclick="return yes_print()" type=button value=启用打印 name=button3> 
<INPUT class=btn onclick="return no_save()" type=button value=禁止保存 name=button10> 
<INPUT class=btn onclick="return yes_save()" type=button value=允许保存 name=button32> 
<INPUT class=btn onclick="return no_copy()" type=button value=禁止复制 name=button11> 
<INPUT class=btn onclick="return yes_copy()" type=button value=允许复制 name=button33> 
      </DIV>
      <DIV class=menuItem onclick="menuOnClick('recension')">修订操作 </DIV>
      <DIV id=recension style="DISPLAY: none"><INPUT style="WIDTH: 74px" 
      maxLength=10 value=Test name=UserName> <INPUT class=btn onclick="return SetUserName()" type=button value=设置用户 name=button2> 
<INPUT class=btn onclick="return ProtectRevision()" type=button value=修订文档 name=button4> 
<INPUT class=btn onclick="return ExitRevisions()" type=button value=退出修订 name=button42> 
<INPUT class=btn onclick="return ShowRevisions()" type=button value=显示修订 name=button5> 
<INPUT class=btn onclick="return UnShowRevisions()" type=button value=隐藏修订 name=button6> 
<INPUT class=btn onclick="return AcceptAllRevisions()" type=button value=接受所有修订 name=button7> 
<INPUT class=btn onclick="return unAcceptAllRevisions()" type=button value=拒绝所有修订 name=button72> 
<INPUT class=btn onclick="return GetRevAllInfo()" type=button value=获取修订信息 name=button922> 
      </DIV>
      <DIV class=menuItem onclick="menuOnClick('markset')">书签操作 </DIV>
      <DIV id=markset style="DISPLAY: none"><INPUT class=btn onclick="return addBookmark()" type=button value=设置书签 name=button8> 
		<INPUT class=btn onclick="return taohong()" type=button value=套红 name=button8> 
      </DIV>



     
      <DIV class=menuItem onclick="menuOnClick('webofficeTool')">weboffice工具栏 
      </DIV>
      <DIV id=webofficeTool style="DISPLAY: none"><INPUT language=javascript class=btn onclick="return bToolBar_onclick()" type=button value=工具栏(隐/显) name=bToolBar> 
<INPUT language=javascript class=btn onclick="return bToolBar_New_onclick()" type=button value=新建文档(隐/显) name=bToolBar_New> 
<INPUT language=javascript class=btn onclick="return bToolBar_Open_onclick()" type=button value=打开文档(隐/显) name=bToolBar_Open> 
<INPUT language=javascript class=btn onclick="return bToolBar_Save_onclick()" type=button value=保存文档(隐/显) name=bToolBar_Save> 
      </DIV>
       <DIV class=menuItem onclick="menuOnClick('tools')">自定义工具栏</DIV>
      <DIV id=tools style="DISPLAY: none"><INPUT class=btn onclick="return SetCustomToolBtn(0,'扩展钮一')" type=button value=添加扩展钮一 name=EnableClose1> 
      <INPUT class=btn onclick="return SetCustomToolBtn(1,'扩展钮二')" type=button value=添加扩展钮二 name=EnableClose1>
      <INPUT class=btn onclick="return SetCustomToolBtn(2,'扩展钮三')" type=button value=添加扩展钮三 name=EnableClose1>
      <INPUT class=btn onclick="return SetCustomToolBtn(3,'扩展钮四')" type=button value=添加扩展钮四 name=EnableClose1>
      <INPUT class=btn onclick="return SetCustomToolBtn(4,'扩展钮五')" type=button value=添加扩展钮五 name=EnableClose1>

      </DIV>

       <DIV class=menuItem onclick="menuOnClick('word')">屏蔽word关闭按钮 </DIV>
      <DIV id=word style="DISPLAY: none"><INPUT class=btn onclick="return EnableClose(0)" type=button value=禁用Word关闭 name=EnableClose1> 
<INPUT class=btn onclick="return EnableClose(1)" type=button value=启用Word关闭 name=EnableClose2> 
<INPUT class=btn onclick="return CloseWord()" type=button value=关闭Word name=closeWord> 
      </DIV>
      <DIV class=menuItem onclick="menuOnClick('face')">换肤</DIV>
      <DIV id=face style="DISPLAY: none"><INPUT class=btn onclick="return ChangeFace(1)" type=button value=温馨浪漫 name=EnableClose1> 
      <INPUT class=btn onclick="return ChangeFace(2)" type=button value=深沉儒雅 name=EnableClose1>
      <INPUT class=btn onclick="return ChangeFace(3)" type=button value=office风格 name=EnableClose1>
      </DIV>
      
     
      </TD>
    <TD class=TableData vAlign=top width="95%" height="100%">
    	<!-- -----------------------------== 装载weboffice控件 ==--------------------------------- -->
      <SCRIPT src="js/LoadWebOffice.js"></SCRIPT>
			<!-- --------------------------------== 结束装载控件 ==----------------------------------- -->
			</TD></TR></TBODY></TABLE></FORM></DIV></CENTER></BODY></HTML>
