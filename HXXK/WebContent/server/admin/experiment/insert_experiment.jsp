<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%@ page import="java.util.*" %>

<%	
	Random random = new Random();
	int id = random.nextInt(99999999)%(90000001) + 10000000;
	String no = id+"";
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
	
	int fl = new DB_experiment().insert_experiment(no, name, turnal, laboratory, teacher, time, status, limit);
	int fl1 = new DB_mainInfo().insert_mainInfo(no, name, turnal, laboratory, teacher, time, status, limit);
	if(fl==1&&fl1==1)
		out.write("success");
	else{
		out.write("failed");
	}
		
%>
