<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	
	String id = request.getParameter("id").toString();
	String name = request.getParameter("name").toString();
	name = java.net.URLDecoder.decode(name,"utf-8");
	String info[][] = new String [2][2];
	info[0][0] = id;
	info[0][1] = name;
	info[1][0] = "over";
	int fl = new DB().insertNewInfo(info,3);
	if(fl==-1){
		out.write("error4");//数据库存储错误
	}
	else{
		out.write("教师"+id+"已经成功导入数据库");
	}
	
%>
