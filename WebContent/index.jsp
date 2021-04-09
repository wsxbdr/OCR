<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
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

  <!-- ocr js -->
  <script src="/WebContent/js/ocr.js" type="text/javascript"></script>
</head>


<style type="text/css">
    h3 {font-size:1em;}
    
    .hero-container img {
        height:20em;
        width:40em;
    }   
    
    #getstart{
    	margin: 0 auto;
    	text-align: center;
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
          <li class="menu-active"><a href="#hero">首页</a></li>
          <li><a href="/WebOcr/ocr.jsp">上传识别</a></li>
          <li><a href="/WebOcr/zcrecognize.jsp">章程识别</a></li>
          <li><a href="/WebOcr/api.jsp">URL识别</a></li>
        </ul>
      </nav><!-- #nav-menu-container -->
    </div>
  </header><!-- #header -->

  <!--==========================
    Hero Section
  ============================-->
  <section id="hero" class="wow fadeIn">
    <div class="hero-container">
    
    	<br>
    	<br>
    	<br>
    	<br>
    
    	<div class="col-md-3 col-lg-3">       		
	    </div>
	    <div col-md-3 col-lg-3>
	    	  <div class="row">
		        <div class="col-md-1 col-lg-1"></div>
		        <div class="col-md-10 col-lg-10"><h2>在线OCR识别小工具</h1></div>
		        <div class="col-md-1 col-lg-1"></div>
		      </div>  
	    	     
	          <h3>一个在线OCR文字识别小工具，可实现一般文字识别（图片、文字、表格），卡证识别（身份证、营业执照、银行卡、名片），单据识别（火车票、出租车票、行程单、银行回单、增值税发票、定额发票）。</h2>
	          <br>
	          <div class="row">
		        <div class="col-md-2 col-lg-2"></div>
		        <div class="col-md-8 col-lg-8"><a href="/WebOcr/ocr.jsp" class="btn-get-started scrollto">Get Started</a></div>
		        <div class="col-md-2 col-lg-2"></div>
		      </div>  
		      

			<div class="btns">
	            <a href="#" id="app-download"><i class="fa fa-android fa-3x"></i> Android下载</a>
	           
	            <a href="#" id="mini-program"><i class="fa fa-play fa-3x"></i> 小程序</a>   <br>     
	            <a href="javascript:;" id="office-download" onclick="officeDownload()"><i class="fa fa-apple fa-3x"></i> office控件下载</a>
	            <a href="javascript:;" id="help-download" onclick="documentDownload()"><i class="fa fa-apple fa-3x"></i> 帮助文档下载</a>
	                   
	    	  </div> 
	    	  
	    	  <div class="download-container"  style="display: flex;flex-wrap: wrap;width:100%;height:175px;">
	    	  	 
	    	  	 	<div style="width:10%";></div>
	    	  		<div id="app-download-container" style=" width: 40%;height: 100%;opacity: 0">
	    	  			<img style="height: 80%;width:100%;" src="/WebContent/img/apkdownload.png" alt="Hero Imgs">	 
	    	  		</div>
	    	  		
	    	  		<div id="mini-program-container" style="width: 40%;height: 100%;opacity: 0;">
	    	  			<img style="height: 80%;width:100%;" src="/WebContent/img/miniprogram.jpg" alt="Hero Imgs">	
	    	  		</div>
	    	  		<div style="width:10%";></div>
	    	  </div>

	    </div>
	    <div class="col-md-3 col-lg-3">	    	  
	          <img src="/WebContent/img/timg.jpg" alt="Hero Imgs">	          
	    </div>
	    <div class="col-md-3 col-lg-3">
	    </div> 
      
    </div>   
  </section><!-- #hero -->



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

  <!-- Template Main Javascript File -->
  <script src="/WebContent/js/main.js"></script>
  <script src="/WebContent/js/index.js"></script>



</body>
</html>
