<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <jsp:directive.page import="com.jspsmart.upload.SmartUpload"/>
 <jsp:directive.page import="com.jspsmart.upload.File"/>
 <%@ page import="source.*" %>
 <%@ page import="java.io.*" %>
 <%@include file="../../../jsp/common/common.jsp"%>
 <%
		 try {
				String username = "";
			 	if(request.getSession(false)==null){
			 		%>
					<script>
						alert("您的身份验证已过期，请重新登录");
					</script>
					<%	
					return;
			 	}	 
			 	else
			 		username=session.getAttribute("userID").toString();
			 		
		 		SmartUpload mySmartUpload = new SmartUpload();//初始化对象
		 		
				mySmartUpload.initialize(pageContext);
		 		mySmartUpload.setMaxFileSize(80*1024*1024);//设置大小  
				mySmartUpload.setAllowedFilesList("doc,pdf,DOC,PDF,docx,DOCX");//允许上传类型
				mySmartUpload.setDeniedFilesList("exe");//禁止上传类型
				mySmartUpload.upload();//开始上传，放到内存中
				
				String fileNo = mySmartUpload.getRequest().getParameter("fileNo").toString();
			 	String courseID = mySmartUpload.getRequest().getParameter("courseID").toString();
			 	String courseT = mySmartUpload.getRequest().getParameter("courseT").toString();
			 	String folderName = courseID+"_"+courseT;
		 	
			 	int FILE_NO = Integer.parseInt(fileNo);
			 	
				File myFile = mySmartUpload.getFiles().getFile(FILE_NO);//获取上传地址
				String fileLocation = application.getRealPath("/");//******important
				
				java.io.File targetFolder=new  java.io.File(fileLocation+"/HomeWork/"+folderName); 
				//如果文件夹不存在则创建    
				if(!targetFolder.exists()  && !targetFolder.isDirectory())      
				{      
				    targetFolder.mkdir();    
				} 

				if (!myFile.isMissing()) {//路径存在
					String extname = myFile.getFileExt();//获取文件主路径
					String fileName = username + "." + extname;// 产生一个唯一的文件名
					System.out.println(fileName);
					myFile.saveAs(fileLocation+"/HomeWork/"+folderName+"/"+fileName);//更换路径重命名
					
					String status = new DB_pushStatus().insert_status(username, courseID, courseT);
					if(status.equals("success")){
						%>
						<script>
							alert("作业提交成功,请刷新页面查看作业提交状态");
						</script>
						<%
					}
					else{
						%>
						<script>
							alert("数据库访问失败，请稍后再试，若情况一直存在，请联系网站管理员");
						</script>
						<%
					}
					
					
					
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
