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
  <link href="img/favicon.png" rel="icon">
  <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Roboto:100,300,400,500,700|Philosopher:400,400i,700,700i" rel="stylesheet">

  <!-- Bootstrap css -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/assets/owl.theme.default.min.css" rel="stylesheet">
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/animate/animate.min.css" rel="stylesheet">
  <link href="lib/modal-video/css/modal-video.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet">
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/jquery/jquery-migrate.min.js"></script>
  
	<style>
		
		  .item {
	            display: none;
	            margin: 10px;
	        }
	        
   </style>

</head>

<body>

  <header id="header" class="header header-hide">
    <div class="container">

      <div id="logo" class="pull-left">
        <h1><a href="#body" class="scrollto"><span>O</span>CR识别</a></h1>
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li><a href="/WebOcr/index.jsp">首页</a></li>
          <li><a href="/WebOcr/ocr.jsp">上传识别</a></li>
          <li><a href="/WebOcr/zcrecognize.jsp">章程识别</a></li>
          <li class="menu-active"><a href="javascript:;">URL识别</a></li>
        
        </ul>
      </nav><!-- #nav-menu-container -->
    </div>
  </header><!-- #header -->

  

  <!--==========================
    Contact Section
  ============================-->
  <section id="contact" class="padd-section wow fadeInUp">

    <div class="container" style="margin-top:50px">
      <div class="section-title text-center" id="zctitle">
        <h3>URL图片识别</h3>
      </div>
    </div>
 <p style="margin-left:520px">图片链接中文件名称需规范，不能含有& ，等，请求时间限制为10s</p>
    <div  style="display: flex;flex-wrap: wrap;justify-content:center;margin-top:35px; ">
   
    	<div style="display: block;width:205px">
    		
<!--     		<form action="/WebOcr/ApiServlet" method="post" > -->
					  				
				  <div class="form-group" style="display: flex;">			   
				    <input type="text" class="form-control" id="iUrl" name="url" placeholder="请输入图片地址">
				  </div>
				  
				  <p style="font-size:18px">选择类型：	
				       <select id="iType" name="type" style="width:105px;height:35px">
					        <option value="表格">表格</option>
					        <option value="普通文档">普通文档</option>
					        <option value="身份证">身份证</option>
					        <option value="银行卡">银行卡</option>
					        <option value="名片">名片</option>
					        <option value="火车票">火车票</option>
					        <option value="出租车票">出租车票</option>
					        <option value="行程单">行程单</option>
					        <option value="银行回单">银行回单</option>
					        <option value="增值税发票">增值税发票</option>
					        <option value="定额发票">定额发票</option>
					        <option value="营业执照">营业执照</option>
					    </select>
		         </p>		
				  			
<!-- 				  <button type="submit" class="form-control" style="color:#71c55d; ">提交并识别</button> -->
				  <button class="form-control" id="submit"  style="color:#71c55d; ">提交并识别</button>

<!-- 			</form> -->
			
    	</div>
   
           <div class="tab_con" style="display:block;width: 35%;height:auto;border: 1px solid #71c55d;border-radius:.5rem;margin-left:10px">
<!--             <div class="item" id="item1" style="display: block;"> -->
                
<!--             </div> -->


				<div id="apiContent" style="margin-left:10px"></div>

        </div>


    </div>
    
   
    
  </section>
  

  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

  <!-- JavaScript Libraries -->

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
  <script src="js/main.js"></script>
  <script src="js/api.js"></script>

</body>
</html>
