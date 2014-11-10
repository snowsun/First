<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
 <%@ page import="java.io.*" %>
 <%
	String courseID = request.getParameter("courseID").toString();
 	String courseT = request.getParameter("courseT").toString();
 	int t = Integer.parseInt(courseT)+1;
 	String folderName = courseID+"_"+t;
 	String fileLocation = application.getRealPath("/");//******important
 	String comPath = fileLocation+"/HomeWork/"+folderName;
 	try {
 		new CompressFolder().zip(comPath , comPath+".zip");//你要压缩的文件夹
 		out.write(folderName+".zip");
    }catch (Exception ex) {
    	out.write("failed");
    }
 %>
