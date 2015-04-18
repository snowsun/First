<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
 <%@ page import="java.io.*" %>
 <%
	String userID = request.getParameter("userID").toString();
 	String folder = request.getParameter("folder").toString();
 	
 	String fileLocation = application.getRealPath("/");//******important
 	String comPath = fileLocation+"/corrected_work_folder/"+folder;
 	File file = new File(comPath);
 	if(file.exists()){
 		String list[] = file.list();
 		for(int i = 0 ; i<list.length ; i++)
 		{
 			if(list[i].contains(userID)){
 				out.write(list[i]);
 				return;
 			}
 		}
 		out.write("failed");
 	}
 	else
 		out.write("failed");
 	
 %>
