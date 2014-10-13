<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String no = request.getParameter("no").toString();
	String name = request.getParameter("name").toString();
	name = java.net.URLDecoder.decode(name,"utf-8");
	String turnal = request.getParameter("turnal").toString();
	String laboratory = request.getParameter("laboratory").toString();
	laboratory = java.net.URLDecoder.decode(laboratory,"utf-8");
	String teacher = request.getParameter("teacher").toString();
	teacher = java.net.URLDecoder.decode(teacher,"utf-8");
	String time = request.getParameter("time").toString();
	time = java.net.URLDecoder.decode(time,"utf-8");
	String status = request.getParameter("status").toString();
	String limit = request.getParameter("limit").toString();
	System.out.println(no+" "+name+" "+turnal+" "+laboratory+" "+teacher+" "+time+" "+status+" "+limit);
	int fl = new DB_experiment().insert_experiment(no, name, turnal, laboratory, teacher, time, status, limit);
	int fl1 = new DB_mainInfo().insert_mainInfo(no, name, turnal, laboratory, teacher, time, status, limit);
	if(fl==1&&fl1==1)
		out.write("success");
	else{
		new DB_experiment().dalete_experiment(no, name, turnal, laboratory, teacher, time, status, limit);
		out.write("failed");
	}
		
%>
