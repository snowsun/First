<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <jsp:directive.page import="com.jspsmart.upload.SmartUpload"/>
 <jsp:directive.page import="com.jspsmart.upload.File"/>
 <%@ page import="source.DeleteAllFile" %>
 <%@include file="../../../jsp/common/common.jsp"%>
 <%
 try {
 		SmartUpload mySmartUpload = new SmartUpload();//初始化对象
		mySmartUpload.initialize(pageContext);
 		mySmartUpload.setMaxFileSize(500000000);//设置大小  
		mySmartUpload.setAllowedFilesList("xls");//允许上传类型
		mySmartUpload.setDeniedFilesList("exe");//禁止上传类型
		mySmartUpload.upload();//开始上传，放到内存中
		File myFile = mySmartUpload.getFiles().getFile(0);//获取上传地址
		String fileLocation = application.getRealPath("/");/////////////////////////////////******important
		/*
			删除文件夹下所有已存在上传文件
		*/
		new DeleteAllFile().delAllFile(fileLocation+"/upload");
		if (!myFile.isMissing()) {//路径存在
			String extname = myFile.getFileExt();//获取文件主路径
			if(!extname.equals("xls")){
				%>
					<script>
						alert("请严格按照要求上传EXCEL文件！");
					</script>
				<%			
			}
			else{
				String fileName = new Date().getTime() + "." + extname;// 产生一个唯一的文件名
				myFile.saveAs(fileLocation+"/upload/"+fileName);//更换路径重命名
			}
 		} 
		else{
			%>
			<script>
				alert("文件不存在！");
			</script>
			<%	
		}
 } catch (Exception e) {
	 %>
		<script>
			alert("请严格按照要求上传EXCEL文件！");
		</script>
	 <%	
 }
 %>
