<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.io.*"%>
<%@ page import="source.*"%>
<%
	String id = request.getParameter("id").toString();
	String t = request.getParameter("t").toString();
	int realT = Integer.parseInt(t)+1;
	String colName = "DDL"+realT;
	String date = request.getParameter("date").toString();
	String returnMsg = new DB_DDL().updateDDL(id, colName, date);
	out.write(returnMsg);
%>
