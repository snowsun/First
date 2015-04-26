<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%	

	String time = request.getParameter("time").toString();
	String info = new DB_noticeInfo().getNoticeByTime(time);
	out.write(info);
%>
