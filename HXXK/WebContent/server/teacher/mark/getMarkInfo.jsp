<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%	
	System.out.println("in getMarkInfo.jsp server");
	String userID =  request.getParameter("userID").toString();
	String info = new DB_baseInfo().getMarkInfo(userID);
	out.write(info);
	System.out.println("out getMarkInfo.jsp server");
%>
