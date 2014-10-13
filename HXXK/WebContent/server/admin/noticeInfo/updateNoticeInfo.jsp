<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*"%>
<%
	String noticeInfo = request.getParameter("noticeInfo").toString();
	noticeInfo=java.net.URLDecoder.decode(noticeInfo,"utf-8");
	System.out.println("$"+noticeInfo+"$");
	boolean isSuccess = new DB_noticeInfo().updateNoticeInfo(noticeInfo);
	if(isSuccess){
		out.write("success");
	}else{
		out.write("fail");
	}
%>
