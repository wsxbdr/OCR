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
  <script type="text/javascript" src="js/zcrecognize.js"></script>
  
		<style>
		 .tab_list .current {
	          
	            color: #71c55d;
	        }
		
	  .item {
	            display: none;
	            margin: 10px;
	        }
	        
	    DIV.scott {
			PADDING-RIGHT: 3px; PADDING-LEFT: 3px; PADDING-BOTTOM: 3px; MARGIN: 3px; PADDING-TOP: 3px; TEXT-ALIGN: center
		}
		DIV.scott span {
			BORDER-RIGHT: #ddd 1px solid; PADDING-RIGHT: 10px; BORDER-TOP: #ddd 1px solid; PADDING-LEFT: 10px; PADDING-BOTTOM: 2px; BORDER-LEFT: #ddd 1px solid; COLOR: #88af3f; MARGIN-RIGHT: 2px; PADDING-TOP: 2px; BORDER-BOTTOM: #ddd 1px solid; TEXT-DECORATION: none
		}
		DIV.scott span:hover {
			BORDER-RIGHT: #85bd1e 1px solid; BORDER-TOP: #85bd1e 1px solid; BORDER-LEFT: #85bd1e 1px solid; COLOR: #638425; BORDER-BOTTOM: #85bd1e 1px solid; BACKGROUND-COLOR: #f1ffd6
		}
		DIV.scott span:active {
			BORDER-RIGHT: #85bd1e 1px solid; BORDER-TOP: #85bd1e 1px solid; BORDER-LEFT: #85bd1e 1px solid; COLOR: #638425; BORDER-BOTTOM: #85bd1e 1px solid; BACKGROUND-COLOR: #f1ffd6
		}
		DIV.scott span.current {
			BORDER-RIGHT: #b2e05d 1px solid; PADDING-RIGHT: 10px; BORDER-TOP: #b2e05d 1px solid; PADDING-LEFT: 10px; FONT-WEIGHT: bold; PADDING-BOTTOM: 2px; BORDER-LEFT: #b2e05d 1px solid; COLOR: #fff; MARGIN-RIGHT: 2px; PADDING-TOP: 2px; BORDER-BOTTOM: #b2e05d 1px solid; BACKGROUND-COLOR: #b2e05d
		}
		
	     .screenshot-item{
		     text-align: center;
		     margin-top: 15px;
	     }   
   </style>

</head>

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
          <li><a href="/WebOcr/ocr.jsp">上传识别</a></li>
          <li class="menu-active"><a href="javascript:;">章程识别</a></li>
          <li><a href="/WebOcr/api.jsp">URL识别</a></li>
        
        </ul>
      </nav><!-- #nav-menu-container -->
    </div>
  </header><!-- #header -->

  

  <!--==========================
    Contact Section
  ============================-->
  <section id="contact" class="padd-section wow fadeInUp">
<div  id="zform";style="display: block;">
    <div class="container">
      <div class="section-title text-center" id="zctitle">
        <h3>公司章程识别</h3>
      </div>
    </div>

    <div  style="display: flex;flex-wrap: wrap;justify-content:center; ">
    	<div style="display: flex;">
    		<form enctype="multipart/form-data" accept-charset="utf-8">
    	
	    	     <div class="form-group">
				    <input type="file" id="pdfInputFile" name="file" style="opacity: 0">			   
				  </div>
				  
	    	     <div class="form-group">
				    <input type="text" class="filetext form-control"   placeholder="点击选择要识别得pdf文件"/>		   
				  </div>
				  
				  	<button type="button" class="form-control uploadbtn" style="color:#71c55d; margin-bottom: 1rem;background-color: rgb(239, 239, 239);">第一步:上传pdf文件</button>			
				  
				  <div class="form-group">			   
				    <input type="text" class="form-control" id="name" name="name" placeholder="请输入姓名">
				  </div>
				  <div class="form-group">
				    <input type="text" class="form-control" id="item" name="item" placeholder="请输入待办事项">
				  </div>
				  			
				  <button type="button" class="form-control subbtn" style="color:#71c55d; background-color: rgb(239, 239, 239);">第二步:提交并识别</button>
			</form>
    	</div>
   
     </div>
  </div>  
    
    
<!--     //结果页面 -->
<div id="zresult" style="display: none">
    <div class="container">
      <div class="section-title text-center" id="zctitle">
        <h3>公司章程识别</h3>
      </div>
    </div>

    <div class="tab" style="display: flex;flex-wrap: wrap;">
        <div class="tab_list" style="margin-left: 20%;width: 15%;margin-top: 10px">
            <ul>
                <li class="current">出资信息</li>
                <li>出资人</li>
                <li>出资额|出资比例</li>
                <li>资金到位时间</li>
                <li>注册资本</li>
                <li>经营范围</li>
                <li>股东会权限</li>
                <li>董事会权限</li>
                <li>是否具备权限</li>
            </ul>
        </div>
        <div class="tab_con" style="width: 45%;height:auto;border: 1px solid #71c55d;border-radius:.5rem;">
<!--             <div class="item" id="item1" style="display: block;"> -->
                
<!--             </div> -->
<!--             <div class="item"  id="item2"> -->
               
<!--             </div> -->
<!--             <div class="item"  id="item3"> -->
                
<!--             </div> -->
        </div>
        <div style="width: 100%;height: 100px;">
     
			<p>
				<div class="scott">		
	<!-- 				<span class="current">1</span> -->
	<!-- 				<span class="">1</span> -->
	<!-- 				<span class="">1</span> -->
	<!-- 				<span class="">1</span> -->
					
				</div>
			</p>
				
        
        </div>
    </div>
</div>    
  </section>
  
  <!-- #contact -->
    
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

    <div class="copyrights">
      <div class="container">
        <p>版权信息</p>
      </div>
    </div>

  </footer>



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
  <script src="js/zcrecognize.js"></script>

</body>
</html>
