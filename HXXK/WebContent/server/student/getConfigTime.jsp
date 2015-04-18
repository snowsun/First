<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%	
	String info[] = new DB_config().fetch_config();
	String time  = info[7];
	out.write(time);
%>
