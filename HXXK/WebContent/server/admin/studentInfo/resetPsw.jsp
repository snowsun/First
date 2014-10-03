<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String id = request.getParameter("id").toString();
	int fl = new DB().resetPsw(id);
	if(fl==-1)
		out.write("error4");
	else
		out.write("同学"+id+"的密码已经重置为学号");
%>
