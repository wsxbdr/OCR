var imgnames = new Array();	
//window.globalConfig={
//		iname:imgnames[0]
//}
var recogType = "";
function callOcr()
	{
	 	window.location.href="/WebOcr/OcrServlet";      
	}
	
	function editByWebOffice()
	{
		window.localStorage.setItem("iname",imgnames[0]);
		window.open("/WebOcr/office.jsp");
	}	
	
	
	function download()
	{
		if(recogType=="普通文档")
		{
			console.log(imgnames[0]);
			window.open("/WebOcr/DownloadServlet?fileName="+imgnames[0]+"total.docx");
		}
		else if(recogType=="表格")
		window.open("/WebOcr/DownloadServlet?fileName="+imgnames[0]+"total.xlsx");
	}

	
	function showTab2(){	     
	      document.getElementById("navTab2").className="tabItemCurrent";
	      document.getElementById("navTab1").className="";
	      document.getElementById("tab2").style.display="block";
	      document.getElementById("tab1").style.display="none"; 
	}
	function showTab1(){	     
	      document.getElementById("navTab1").className="tabItemCurrent";
	      document.getElementById("navTab2").className="";
	      document.getElementById("tab1").style.display="block";
	      document.getElementById("tab2").style.display="none"; 
	}
	
	
	
	
	// 	fileinput插件jquery冲突解决办法
    console.log($().jquery);
	var $1 = $.noConflict();

	// 	抽离到main.js布局紊乱，原因未知
	$1(document).ready(function() {
		
		//下拉框选中显示
		$(".dropdown-item").click(function () {
		    var val = $(this).html();
		    $("#button_text").text(val);	    
		})
		
		//图片上传
		$1('#file-zh').fileinput({
		    language: 'zh',
		    uploadUrl: '/WebOcr/UploadServlet',
		    allowedFileExtensions : ['jpg', 'png','gif'],
		    browseOnZoneClick:false,
		    uploadAsync:true
		})
		
		$("#file-zh").on('fileuploaded', function(event, data, previewId, index) {//异步上传成功结果处理
			//var uploadRetMsg= JSON.parse(data.response);//接收后台传过来的json数据
			//alert(uploadRetMsg.error);
			$("#msg").html("上传成功");
		});
	
		$("#file-zh").on('fileerror', function(event, data, msg) {//异步上传失败结果处理
			$("#msg").html("上传失败");
		});
				
		
		 
		
		//点击识别
		$1("#recognize").click(function() { 
			$("#msg").html("识别中……请耐心等待");
			
			
			 recogType = $("#button_text").text();
			if(recogType=="普通文档" || recogType=="表格"){
				$(".officebuttons").show();
			}else{
				$(".officebuttons").hide();
			}
			
					
			var imgs = $("div.kv-file-content img");
			console.log(imgs);
			
			 imgnames = new Array();
			 
			var imgsrcs = new Array();
            
			$.each(imgs, function(i,img){     
				if($.inArray(img.title, imgnames) == -1){
					imgnames.push(img.title);
					imgsrcs.push(img.src);
				}								
			  });
			var strFilenames=imgnames.join(';');				
			console.log(strFilenames);
			
            $.ajax({
                url:"/WebOcr/OcrServlet",//要请求的服务器url              
                data:{
                	"recogType":recogType,
                	"strFilenames":strFilenames},
                async:true,   //是否为异步请求
                cache:false,  //是否缓存结果
                type:"POST", //请求方式为POST
                dataType:"text",   //服务器返回的数据是什么类型 
                success:function(data){  //这个方法会在服务器执行成功是被调用 ，参数result就是服务器返回的值(现在是json类型) 
                	showTab2();
                	var currImgSrc = imgsrcs[0];
                	$(".img-item").empty();
        			$(".res-item").empty();
        			$(".demo .pagination").empty();
        			
        			
                	var pageCount = 0;
                	var result = "";	
		            var pagination = '';
		            var obj = $.parseJSON(data); 
		            
                    $.each(obj, function(key, value) {  
                    	//alert("key:"+key);
                    	pageCount++;		            	
						// 动态生成预览容器
		            	  imgDetail = "<div class='img-detail hide'  id='img" + pageCount + "'> <img style='max-width:350px' modal='zoomImg' src='" + imgsrcs[pageCount-1] + "'></div>";			            		            			            	 		            	 			            		            			            	 
			              $(".img-item").append(imgDetail);
			              			
						//  动态生成结果容器  
		            	  resDetail = "<div class='results-detail hide' id='res" + pageCount + "'></div>";
		            	  $(".res-item").append(resDetail);
		            				           
						//  动态生成页码
	            	      pagination = "<li class='page-item'><a class='page-link'  href='javascript:;' >" + pageCount + "</a></li>";
			        	  $(".demo .pagination").append(pagination);	
			        	  console.log( $(".demo .pagination"));
			        	  
			        	  result = '';
			        	  try{
				        	  $.each(value,function(k,v){
				        		  console.log(k + ':' + v);
					        	  result += "<p contenteditable=\"true\"><b>" +  k + '</b> : ' + v + "</p>";					        				        						        	   
								});			        	  
			        	  }catch(e){
			        		  console.log(e);
			        		  result += "<p contenteditable=\"true\">" + value + "</p>";
			        	  }		        	  
			        	  
		            	  $("#res" + pageCount).append(result);     
		            	  
		            	  $(".detail .img-detail").eq(0).removeClass("hide").siblings().addClass("hide");
						  $(".detail .results-detail").eq(0).removeClass("hide").siblings().addClass("hide");													
						});  
                   
                    // 点击页码展示对应的内容
                	$(".pagination li").on("click", function () {
            			var index = $(this).index();            			
            			$(".detail .img-detail").eq(index).removeClass("hide").siblings().addClass("hide");
            			$(".detail .results-detail").eq(index).removeClass("hide").siblings().addClass("hide");		
                        currImgSrc = imgsrcs[index];                        
            		}); 
                 	
                   //图片点击放大、旋转
	            	//var arrPic = imgsrcs;					
	            	$("img[modal='zoomImg']").each(function () {
	            	    
	            	    $(this).on("click", function () {  
	            	        //给body添加弹出层的html
	            	        $("body").append("<div class=\"mask-layer\">" +
	            	            "   <div class=\"mask-layer-black\"></div>" +
	            	            "   <div class=\"mask-layer-container\">" +
	            	            "       <div class=\"mask-layer-container-operate\">" +
	            	            "           <button class=\"mask-out btn-default-styles\">放大</button>" +
	            	            "           <button class=\"mask-in btn-default-styles\">缩小</button>" +
	            	            "           <button class=\"mask-clockwise btn-default-styles\">顺旋转</button>" +
	            	            "           <button class=\"mask-counterclockwise btn-default-styles\">逆旋转</button>" +
	            	            "           <button class=\"mask-close btn-default-styles\">关闭</button>" +	            	            
	            	            "       </div>" +
	            	            "       <div class=\"mask-layer-imgbox auto-img-center\"></div>" +
	            	            "   </div>" +
	            	            "</div>"
	            	        );

	            	        //var $this = $(this);
	            	        //var img_index = $this.index(); //获取点击的索引值
	            	        //var num = img_index;   

	            	        function showImg() {
	            	            $(".mask-layer-imgbox").append("<p><img src=\"\" alt=\"\"></p>");
	            	            $(".mask-layer-imgbox img").prop("src", currImgSrc); //给弹出框的Img赋值

	            	            //图片居中显示
	            	            var box_width = $(".auto-img-center").width(); //图片盒子宽度
	            	            var box_height = $(".auto-img-center").height();//图片高度高度
	            	            var initial_width = $(".auto-img-center img").width();//初始图片宽度
	            	            var initial_height = $(".auto-img-center img").height();//初始图片高度
	            	            if (initial_width > initial_height) {
	            	                $(".auto-img-center img").css("width", box_width);
	            	                var last_imgHeight = $(".auto-img-center img").height();
	            	                $(".auto-img-center img").css("margin-top", -(last_imgHeight - box_height) / 2);
	            	            } else {
	            	                $(".auto-img-center img").css("height", box_height);
	            	                var last_imgWidth = $(".auto-img-center img").width();
	            	                $(".auto-img-center img").css("margin-left", -(last_imgWidth - box_width) / 2);
	            	            }

	            	            //图片拖拽
	            	            var $div_img = $(".mask-layer-imgbox p");
	            	            //绑定鼠标左键按住事件
	            	            $div_img.bind("mousedown", function (event) {
	            	                event.preventDefault && event.preventDefault(); //去掉图片拖动响应
	            	                //获取需要拖动节点的坐标
	            	                var offset_x = $(this)[0].offsetLeft;//x坐标
	            	                var offset_y = $(this)[0].offsetTop;//y坐标
	            	                //获取当前鼠标的坐标
	            	                var mouse_x = event.pageX;
	            	                var mouse_y = event.pageY;
	            	                //绑定拖动事件
	            	                //由于拖动时，可能鼠标会移出元素，所以应该使用全局（document）元素
	            	                $(".mask-layer-imgbox").bind("mousemove", function (ev) {
	            	                    // 计算鼠标移动了的位置
	            	                    var _x = ev.pageX - mouse_x;
	            	                    var _y = ev.pageY - mouse_y;
	            	                    //设置移动后的元素坐标
	            	                    var now_x = (offset_x + _x ) + "px";
	            	                    var now_y = (offset_y + _y ) + "px";
	            	                    //改变目标元素的位置
	            	                    $div_img.css({
	            	                        top: now_y,
	            	                        left: now_x
	            	                    });
	            	                });
	            	            });
	            	            //当鼠标左键松开，接触事件绑定
	            	            $(".mask-layer-imgbox").bind("mouseup", function () {
	            	                $(this).unbind("mousemove");
	            	            });

	            	            //缩放
	            	            var zoom_n = 1;
	            	            $(".mask-out").click(function () {
	            	                zoom_n += 0.1;
	            	                $(".mask-layer-imgbox img").css({
	            	                    "transform": "scale(" + zoom_n + ")",
	            	                    "-moz-transform": "scale(" + zoom_n + ")",
	            	                    "-ms-transform": "scale(" + zoom_n + ")",
	            	                    "-o-transform": "scale(" + zoom_n + ")",
	            	                    "-webkit-": "scale(" + zoom_n + ")"
	            	                });
	            	            });
	            	            $(".mask-in").click(function () {
	            	                zoom_n -= 0.1;
	            	                console.log(zoom_n)
	            	                if (zoom_n <= 0.1) {
	            	                    zoom_n = 0.1;
	            	                    $(".mask-layer-imgbox img").css({
	            	                        "transform":"scale(.1)",
	            	                        "-moz-transform":"scale(.1)",
	            	                        "-ms-transform":"scale(.1)",
	            	                        "-o-transform":"scale(.1)",
	            	                        "-webkit-transform":"scale(.1)"
	            	                    });
	            	                } else {
	            	                    $(".mask-layer-imgbox img").css({
	            	                        "transform": "scale(" + zoom_n + ")",
	            	                        "-moz-transform": "scale(" + zoom_n + ")",
	            	                        "-ms-transform": "scale(" + zoom_n + ")",
	            	                        "-o-transform": "scale(" + zoom_n + ")",
	            	                        "-webkit-transform": "scale(" + zoom_n + ")"
	            	                    });
	            	                }
	            	            });
	            	            //旋转
	            	            var spin_n = 0;
	            	            $(".mask-clockwise").click(function () {
	            	                spin_n += 15;
	            	                $(".mask-layer-imgbox img").parent("p").css({
	            	                    "transform":"rotate("+ spin_n +"deg)",
	            	                    "-moz-transform":"rotate("+ spin_n +"deg)",
	            	                    "-ms-transform":"rotate("+ spin_n +"deg)",
	            	                    "-o-transform":"rotate("+ spin_n +"deg)",
	            	                    "-webkit-transform":"rotate("+ spin_n +"deg)"
	            	                });
	            	            });
	            	            $(".mask-counterclockwise").click(function () {
	            	                spin_n -= 15;
	            	                $(".mask-layer-imgbox img").parent("p").css({
	            	                    "transform":"rotate("+ spin_n +"deg)",
	            	                    "-moz-transform":"rotate("+ spin_n +"deg)",
	            	                    "-ms-transform":"rotate("+ spin_n +"deg)",
	            	                    "-o-transform":"rotate("+ spin_n +"deg)",
	            	                    "-webkit-transform":"rotate("+ spin_n +"deg)"
	            	                });
	            	            });
	            	            //关闭
	            	            $(".mask-close").click(function () {
	            	                $(".mask-layer").remove();
	            	            });
	            	            $(".mask-layer-black").click(function () {
	            	                $(".mask-layer").remove();
	            	            });
	            	        }
	            	        showImg();

	            	        
	            	    })
	            	});
                },
                error: function(){
                	$("#msg").html("识别失败");
                }
            });	 
      
		});
		
		
	
		
		
	});