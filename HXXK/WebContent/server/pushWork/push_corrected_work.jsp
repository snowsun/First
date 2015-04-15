<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <jsp:directive.page import="com.jspsmart.upload.SmartUpload"/>
 <jsp:directive.page import="com.jspsmart.upload.File"/>
 <%@ page import="source.*" %>
 <%@ page import="java.io.*" %>
 <%@include file="../../../jsp/common/common.jsp"%>
 <%
		 try {
			 	
		 		SmartUpload mySmartUpload = new SmartUpload();//初始化对象
		 		
				mySmartUpload.initialize(pageContext);
		 		mySmartUpload.setMaxFileSize(80*1024*1024);//设置大小  
				mySmartUpload.setAllowedFilesList("doc,pdf,DOC,PDF,docx,DOCX");//允许上传类型
				mySmartUpload.setDeniedFilesList("exe");//禁止上传类型
				mySmartUpload.upload();//开始上传，放到内存中
				
				String fileNo = mySmartUpload.getRequest().getParameter("fileNo").toString();
			 	String courseID = mySmartUpload.getRequest().getParameter("courseID").toString();
			 	String courseT = mySmartUpload.getRequest().getParameter("courseT").toString();
			 	String filename = mySmartUpload.getRequest().getParameter("fileName").toString();
			 	String folderName = courseID+"_"+courseT;
		 	
			 	int FILE_NO = Integer.parseInt(fileNo);
			 	
				File myFile = mySmartUpload.getFiles().getFile(FILE_NO);//获取上传地址
				String fileLocation = application.getRealPath("/");//******important
				
				java.io.File targetFolder=new  java.io.File(fileLocation+"/corrected_work_folder/"+folderName); 
				//如果文件夹不存在则创建    
				if(!targetFolder.exists()  && !targetFolder.isDirectory())      
				{      
				    targetFolder.mkdir();    
				} 

				if (!myFile.isMissing()) {//路径存在
					String extname = myFile.getFileExt();//获取文件主路径
					String fileName = filename + "." + extname;// 产生一个唯一的文件名
					myFile.saveAs(fileLocation+"/corrected_work_folder/"+folderName+"/"+fileName);//更换路径重命名
					%>
					<script>
						alert("上传成功");
					</script>
					<%						
		 		} 
				else{
					%>
					<script>
						alert("文件不存在，请重新选择文件！");
					</script>
					<%	
				}
		 } catch (Exception e) {
			 e.printStackTrace();
			 %>
				<script>
					alert("请严格按照要求上传文件！");
				</script>
			 <%	
		 }
 %>
