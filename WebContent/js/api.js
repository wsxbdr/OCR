//			var jsonstr = <%=request.getAttribute("jsonstr")%>; 
// 			console.log(jsonstr);
// 			var data = JSON.stringify(jsonstr);
// 			console.log(data);
// 			$("#apiContent").append(data);
						
			$("#submit").click(function() {		
			    Document.charset="utf-8";
				url = $("#iUrl").val();
				type = $("#iType").val();			
				$.ajax({
					   url: '/WebOcr/ApiServlet',   
					   data: {
						   "url":url,
						   "type":type						  
					   },	
		 	           async: true,
		 	           cache:false,
		 	           type: 'POST', 
 		 	           dataType:'json',
//		 	           dataType:'text',			
		 	           success: function(data){	
		 	        	   var dataString = JSON.stringify(data);
		 	        	  $("#apiContent").append(dataString);
		 	        	  console.log(data);
		 	        	  console.log(dataString);
//		 	        	  var obj = $.parseJSON(data); 
//		 	        	  $.each(data, function(key, value) {  
//// 		 	        		 $("#apiContent").append(key+":"+value);
//		 	        		 console.log(key+"++++++++"+value);
//		 	        	  })
	 	           }		 	        	
			})
		})