<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String year=request.getParameter("year").toString();
	String lab_no=request.getParameter("lab_no").toString();
	String begin_time=request.getParameter("begin_time").toString();
	String end_time=request.getParameter("end_time").toString();
	String week=request.getParameter("week").toString();
	
	System.out.println(year+"\n"+lab_no+"\n"+begin_time+"\n"+end_time+"\n"+week);
	int fl = new DB_config().update_config(year, lab_no, begin_time, end_time, week);
	if(fl==1)
		out.write("success");
	else
		out.write("failed");
%>
