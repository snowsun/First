<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%	
	String time = request.getParameter("time").toString();
	if(new DB_noticeInfo().deleteNoticeInfo(time)){
		out.write("success");
	}
	else
		out.write("failed");
%>
