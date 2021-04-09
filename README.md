# OCR
一个在线OCR文字识别小工具，可实现一般文字识别（图片、文字、表格），卡证识别（身份证、营业执照、银行卡、名片），单据识别（火车票、出租车票、行程单、银行回单、增值税发票、定额发票）。
1，部署到服务器虚拟windows：下载安装python环境，java环境，tomcat环境（设置server.xml），eclipse下加载项目，配置服务运行时环境， 配置java build path，运行tomcat server即可

2，部署到Linux服务器：将项目打包成war（打包过程不包含javaweb以外的程序，因此要将ocr程序引擎与java项目分离），Linux下安装java环境， tomcat服务，python环境（他人装），Xshell（linux服务器连接，命令管理工具），Xftp（linux文件传输及文件管理），jsp页面中引入静态资源 文件不要以/WebContent/开头，直接以包名文件夹开始
