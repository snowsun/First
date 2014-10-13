<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%	
	String info[] = new DB_noticeInfo().getNoticeInfo();
	if(info[0].equals("failed")){
		out.write("failed");
	}else if(info[0].equals("null")){
		out.write("null");
	}
	else{
		String RETURN = "";
		RETURN = info[2];
		out.write(RETURN);
	}
%>
