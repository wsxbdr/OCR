	function officeDownload()
	{
		window.open("/WebOcr/DownloadServlet?fileName=WebOffice.exe");
	}
	function documentDownload()
	{
		window.open("/WebOcr/DownloadServlet?fileName=document.pdf");
//		window.open("/WebOcr/DownloadServlet?fileName=合同无表格3.JPGtotal.docx");
	}
	
	
	
	
	 
	    $(function() {
	        // 鼠标经过
	         $(".btns #app-download").mouseover(function() {
//	             $("#app-download-container").stop().show("normal");
	            $("#app-download-container").css({"opacity":1});
	          
	        });
	        // 鼠标离开
	        $(".btns #app-download").mouseout(function() {
//	         	 $("#app-download-container").stop().hide("normal");;
	        	 $("#app-download-container").css({"opacity":0});
	        });
	        
	        
	        $(".btns #mini-program").mouseover(function() {
//	             $("#mini-program-container").stop().show("normal");
	            $("#mini-program-container").css({"opacity":1});
	        });
	       
	        $(".btns #mini-program").mouseout(function() {
//	         	 $("#mini-program-container").stop().hide("normal");
	        	 $("#mini-program-container").css({"opacity":0});
	        });
	    })
	 