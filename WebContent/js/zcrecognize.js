var file = '';
var name = '';
var item = '';
var pdfName = '';

//选择文件
$(".filetext").click(function () { 
		$("#pdfInputFile").click(); 
	});

$('#pdfInputFile').change(function(){				

   file = $('#pdfInputFile').val();	
   console.log( $('#pdfInputFile')[0].files[0].name);
   pdfName =  $('#pdfInputFile')[0].files[0].name;
   $('.filetext').val(pdfName);
});

//上传文件
$(".uploadbtn").click(function() {				
	var formData = new FormData();
	formData.append("file", $('#pdfInputFile')[0].files[0]);
	$.ajax({
           type: 'post',      
           url: '/WebOcr/UploadServlet',  	      
           async: false,
//4.1 因为传进来的参数被预先处理了，所以才出现了illegal invocation报错,只要将processData的值改为false就能解决这个小问题；
//4.2 因为JQ自动的帮我们设置了请求头，但是ajax2.0中不需要设置请求头，我们找到contentType，把它的值设为false就能够取消掉这个设置。
           processData:false,
           contentType:false,
		   data: formData,
           success: function(data){			 	        	 			 	        	 
 	        	  console.log("123");
        	   }
           })				
})

//提交表单
$(".subbtn").click(function() {		
	    Document.charset="utf-8";
		name = $("#name").val();
		item = $("#item").val();			
		$.ajax({
 	           type: 'post',      
 	           url: '/WebOcr/ZcOcrServlet',  
 	           dataType:'json',
 	           async: false,
			   data: {
				   "name":name,
				   "item":item,
				   "pdfName":pdfName
			   },
			
 	           success: function(data){			 	        	 			 	        	 
 	        	console.log(data[0]+"123");
			$('#zform').hide();
			$('#zresult').show();
			
           var itemCount = 0;
           var page = '';
           $(".scott").empty();
           $.each(data[0],function(key,value){    	     
        		  itemCount++;						 
				var itemContent = " <div class='item'  id='item" + itemCount + "'> </div>";
				$(".tab_con").append(itemContent);
				$("#item"+itemCount).html(value);						
				console.log(itemCount); 
           })
           $.each(data[1],function(key,value){
                itemCount++;						 
				var itemContent = " <div class='item'  id='item" + itemCount + "'> </div>";
				$(".tab_con").append(itemContent);
				$("#item"+itemCount).html(value);
//	     	            	  var screenshot = "<div class='item'  id='screenshot" + itemCount + "'> <img style='max-width:100%'  src='" + imgsrcs[pageCount-1] + "'></div>";
            	  var hr = "<hr style = 'height:0px;background-color:#71c55d;'/>"
            	  var screenshot1 = "<div class='screenshot-item'  id='screenshot" + itemCount + "'> <img style='max-width:80%'  src='/WebContent/img/sign.png'></div>";
            	  var screenshot2 = "<div class='screenshot-item'  id='screenshot" + itemCount + "'> <img style='max-width:80%'  src='/WebContent/img/item.png'></div>";
            	  $("#item"+itemCount).append(hr);
            	  $("#item"+itemCount).append(screenshot1);
            	  $("#item"+itemCount).append(screenshot2);    
           })
 		
				
		
				 //点击展示不同item
			     $(".tab_list li").click(function() {
	              
	                $(this).addClass("current").siblings().removeClass("current");
	                // 点击的同时，得到当前li 的索引号
	                var index = $(this).index();				               
	         
	                console.log(index);
	                // 让下部里面相应索引号的item显示，其余的item隐藏
	                $(".tab_con .item").eq(index).show().siblings().hide();
	            });
			     $(".tab_list li").eq(0).click();
		
		
 	        	   }
 	           })				
	})
	  