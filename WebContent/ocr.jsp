<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>在线OCR识别小工具</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Favicons -->
  <link href="/WebContent/img/favicon.png" rel="icon">
  <link href="/WebContent/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Roboto:100,300,400,500,700|Philosopher:400,400i,700,700i" rel="stylesheet">

  <!-- Bootstrap css -->
  <!-- <link rel="stylesheet" href="css/bootstrap.css"> -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/assets/owl.theme.default.min.css" rel="stylesheet">
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/animate/animate.min.css" rel="stylesheet">
  <link href="lib/modal-video/css/modal-video.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="/WebContent/css/style.css" rel="stylesheet">


  <!-- button css -->
  <link href="/WebContent/css/buttons.css" rel="stylesheet">
  
  <!-- zoom css -->
  <link href="/WebContent/css/boxImg.css" rel="stylesheet" type="text/css">
 
  <!-- fileinput css-->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
   <link rel="stylesheet" type="text/css" href="css/default.css">
   <link href="/WebContent/css/fileinput.css" media="all" rel="stylesheet" type="text/css" />
   
   <!-- fileinput js-->
   <script src="http://cdn.bootcss.com/jquery/1.11.0/jquery.min.js" type="text/javascript"></script>
   <script>window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js"><\/script>')</script>
   <script src="js/fileinput.js" type="text/javascript"></script>
   
   <!--简体中文-->
   <script src="/WebContent/js/locales/zh.js" type="text/javascript"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" 
    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
 
  <!-- dropdown js -->
  <script src="https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js"></script>
  
  
  <!-- ocr js -->
  <script src="/WebContent/js/ocr.js" type="text/javascript"></script>
  
</head>

<style type="text/css">
    #TabMain {
    width: 1100px;
    height: 500px;
    margin: 0 auto;
    margin-top: 100px;
}
.tabItemContainer {
    width: 100px;
    height: 500px;
    float: left;
}
.tabBodyContainer {
    width: 977px;
    height: 500px;
    float: left;
    background-color: #fff;
    border: 1px solid #ccc;
    -webkit-border-radius: 0 5px 5px 0;
    -moz-border-radius: 0 5px 5px 0;
    border-radius: 0 5px 5px 0;
    margin-left: 1px;
}
.tabItemContainer>li {
    list-style: none;
    text-align: center;
}
.tabItemContainer>li>a {
    float: left;
    width: 100%;
    padding: 30px 0 30px 0;
    font: 16px "微软雅黑", Arial, Helvetica, sans-serif;
    color: #808080;
    cursor: pointer;
    text-decoration: none;
    border:1px solid transparent;
}
.tabItemCurrent {
    background-color: #fff;
    border: 1px solid #ccc !important;
    border-right: 1px solid #fff !important;
    position: relative;
    -webkit-border-radius: 5px 0 0 5px;
    -moz-border-radius: 5px 0 0 5px;
    border-radius: 5px 0 0 5px;
}
.tabItemContainer>li>a:hover {
    color: #333;
}
.tabBodyItem {
    position: absolute;
    width: 978px;
    height: 500px;
    display: none;
    
}
.tabBodyItem>p {
    font: 13px "微软雅黑", Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 30px;
}
.tabBodyItem>p>a {
    text-decoration: none;
    color: #0F3;
}
.tabBodyCurrent{
    display:block;
}  

.container{
	width:980px;	
}

#uploadPanel{
	width:980px;
	height: 450px;
	overflow:auto;
}

#button_text{
	width:150px;
}

#msg{
	font-style: italic;	
}


.detail{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 78%;
	margin: 1% 0px;"
	}
	
.img-item{
	width: 49%;
	height: 100%;
	border: 1px solid #ccc;
	text-align: center;
}

.res-item{
	width: 49%;
	height: 100%;
	border: 1px solid #ccc;	
	margin-left: 2%
}
.img-detail{
	width: 100%;
	height: 100%;
	text-align: center;
	}	

.img-detail img{
	max-height: 100%;
	max-width: 100%";
	
}
	
.results-detail{
	width: 100%;
	height: 100%;
	margin:10px 10px;
	overflow:auto;
}	

.hide{
	display: none;
}
</style>

<script type="text/javascript">
	
</script>


<body>
    
  <header id="header" class="header header-hide">
    <div class="container">

      <div id="logo" class="pull-left">
        <h1><a href="#body" class="scrollto"><span>O</span>CR识别</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="#body"><img src="img/logo.png" alt="" title="" /></a>-->
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li><a href="/WebOcr/index.jsp">首页</a></li>
          <li class="menu-active"><a href="/WebOcr/ocr.jsp">上传识别</a></li>
          <li><a href="/WebOcr/zcrecognize.jsp">章程识别</a></li>
          <li><a href="/WebOcr/api.jsp">URL识别</a></li>
        </ul>
      </nav><!-- #nav-menu-container -->
    </div>
  </header><!-- #header -->

    
<div id="TabMain">
    <div class="tabItemContainer">
        <li><a id="navTab1" class="tabItemCurrent" onClick="showTab1()">上传图片</a></li>
        <li><a id="navTab2" onClick="showTab2()">识别结果</a></li>        
    </div>
    <div class="tabBodyContainer">
        <div id="tab1" class="tabBodyItem tabBodyCurrent">
            <div class="container">
                <div class="row">                	
                	<!-- inputfile -->
					<div class="htmleaf-container">                
                		<div id="uploadPanel" class="container kv-main">                    		                    
                        		<input id="file-zh" name="file-zh[]" type="file" multiple>                        				
                        		<p></p>
		                        <div class="form-group">  
		                        	<div class="col-md-4 col-lg-4">
		                        	</div>
		                            <div class="col-md-2 col-lg-2">
		                            	<div class="dropdown">
										    <button type="button" id="button_text" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
										           请选择识别类型
										    </button>
										    <div class="dropdown-menu">
										      <a class="dropdown-item" href="#">表格</a>
										      <a class="dropdown-item" href="#">普通文档</a>
										      <a class="dropdown-item" href="#">身份证</a>
										      <a class="dropdown-item" href="#">银行卡</a>
										      <a class="dropdown-item" href="#">名片</a>
										      <a class="dropdown-item" href="#">火车票</a>
										      <a class="dropdown-item" href="#">出租车票</a>
										      <a class="dropdown-item" href="#">行程单</a>
										      <a class="dropdown-item" href="#">银行回单</a>
										      <a class="dropdown-item" href="#">增值税发票</a>										      
										      <a class="dropdown-item" href="#">定额发票</a>
										      <a class="dropdown-item" href="#">营业执照</a>
										    </div>
										 </div>
		                            </div>
		                            <div class="col-md-6 col-lg-6">
		                            	<button class="btn btn-warning" id="recognize" >点击识别</button>
		                            </div>         
		                        </div>
		                        <br>
		                        <br>
		                        <span id="msg">
		                        	待识别图片应为同一类型，且确保上传后再识别
		                        </span>
                		</div>               
            		</div>                	
                </div>               
            </div>
		</div>
        	
        
        <div id="tab2" class="tabBodyItem">       
            
            <div class="container" style="display: flex;flex-wrap: wrap;width: 100%;height: 80%">    
            	
            	
            	<div style="width: 100%;height: 10%;display: flex;flex-wrap: wrap;">
            		<div style="width: 50%;text-align: center;"><h2>图片</h2></div>
            		<div style="width: 50%;text-align: center;"><h2>结果</h2></div>
            	</div>
            	
            	
				<div class="detail" >
				
					<div class="img-item">
     					<!-- 	图片展示 -->
	            		<div class="img-detail" >
		            		<h2>预览图</h2>
		            	</div>						
					</div>
	            	
	            	<div class="res-item">		            		
		            	<div class="results-detail" >
		            		<h2>识别结果详细内容</h2>
		            	</div>			
            		</div>
            		
	            </div>            
            
            	<div style="width: 100%;height: 10%;display: flex;flex-wrap: wrap;">
            		<div style="width: 80%">            			
						<!--   分页 -->
	            		<div class="demo" style="min-height: 300px;">	
			                <nav class="pagination-outer" aria-label="Page navigation">
			                    <ul class="pagination" style=" margin:0px;">
									<!--  <li class='page-item'><a class='page-link' id='page"+ pageCount +"' href='#'>111</a></li>; -->
			                    </ul>			                      
			                </nav>			                
						</div>		
            		</div>            		        		
            	</div>
                 
                <div class="officebuttons" style="width:100%;height: 10%;text-align:center;">
           			 <input type="button" onclick="editByWebOffice()" style="height:80%;width:100%;font-size:15px;line-height:30px;" class="button button-block button-rounded button-highlight button-large" value="打开weboffice编辑识别结果">
           			 <input type="button" onclick="download()" style="height:80%;width:100%;font-size:15px;line-height:30px;" class="button button-block button-rounded button-action button-large" value="下载文档" >
           		</div>       
                
		    </div>
		    
		    
		    
		    
		    
		    
        </div>        
    </div>
</div>

  <br>
  <br>  
  
  <!--==========================
    Footer
  ============================-->
  <footer class="footer">
    <div class="container">
      <div class="row">

        <div class="col-md-12 col-lg-4">
          <div class="footer-logo">

            <a class="navbar-brand" href="#">在线OCR识别小工具</a>
            <p style="margin-bottom: 5px;">技术支持：卓尔智联（武汉）研究院有限公司</p>
            <p style="margin-bottom: 5px;">地址：中国湖北省武汉市黄陂区巨龙大道卓尔企业社区NO.1绿茵馆5楼</p>
            <p style="margin-bottom: 5px;">邮编：430000</p>

          </div>
        </div>

      </div>
    </div>

    

  </footer>



  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

  <!-- JavaScript Libraries -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/jquery/jquery-migrate.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="lib/superfish/hoverIntent.js"></script>
  <script src="lib/superfish/superfish.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/modal-video/js/modal-video.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <!-- Contact Form JavaScript File -->
  <script src="contactform/contactform.js"></script>
<!-- 	<script src="/WebContent/js/ocr.js"></script> -->
  <!-- Template Main Javascript File -->
  <script src="/WebContent/js/main.js"></script>

</body>
</html>
