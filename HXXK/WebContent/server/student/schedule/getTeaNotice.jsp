<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String id = request.getParameter("teaId").toString();
	String info[] = new DB_baseInfo().get_info_by_id(id);
	out.write(info[4]);
%>





