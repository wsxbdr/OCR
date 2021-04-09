# WebOcr
一个在线OCR文字识别小工具，可实现一般文字识别（图片、文字、表格），卡证识别（身份证、营业执照、银行卡、名片），单据识别（火车票、出租车票、行程单、银行回单、增值税发票、定额发票）。
程序环境：
tomcat8.0  jdk1.8 
前端加载本地文件，fileinput插件进行ajax上传至UploadServlet（处理上传文件，放到指定文件夹保存路径，保存文件名）。
点击识别将   文件路径+文件名（参数1），选择类型（参数2）通过ajax携带请求到OcrServlet（写pthon脚本文件，调用ocr引擎，
cor识别后返回json结果到指定目录），OcrServlet读取json结果并write到前端（前端请求后返回的数据），前端解析json并渲染
如果类型为word，提供在线编辑（调用weboffice控件）和下载（DownloadServlet文件流）

1，部署到服务器虚拟windows：下载安装python环境，java环境，tomcat环境（设置server.xml），eclipse下加载项目，配置服务运行时环境，
配置java build path，运行tomcat server即可

2，部署到Linux服务器：将项目打包成war（打包过程不包含javaweb以外的程序，因此要将ocr程序引擎与java项目分离），Linux下安装java环境，
tomcat服务，python环境（他人装），Xshell（linux服务器连接，命令管理工具），Xftp（linux文件传输及文件管理），jsp页面中引入静态资源
文件不要以/WebContent/开头，直接以包名文件夹开始
