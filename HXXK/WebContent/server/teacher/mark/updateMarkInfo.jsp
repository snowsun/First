<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*"%>
<%
	System.out.println("in updateMark.jsp server");
	String userID = request.getParameter("userID").toString();
	String markInfo = request.getParameter("markInfo").toString();
	markInfo=java.net.URLDecoder.decode(markInfo,"utf-8");
	boolean isSuccess = new DB_baseInfo().updateMarkInfo(userID,markInfo);
	if(isSuccess){
		out.write("success");
	}else{
		out.write("fail");
	}
	System.out.println("out updateMark.jsp server");
%>
