<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%
	String info[][] = new DB_baseInfo().getAllUserInfo();
	if(info[0][0].equals("failed")){
		out.write("failed");
		return;
	}
	String result = "";
	for(int i=0 ; !info[i][0].equals("over");i++){
		if(info[i][3].equals("2")){
			result = result+info[i][0]+"~"+info[i][2]+"~"+info[i][4]+"^";
		}
	}
	out.write(result);
%>