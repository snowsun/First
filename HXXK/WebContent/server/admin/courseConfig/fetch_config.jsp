<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String info[] = new DB_config().fetch_config();
	if(info[0].equals("failed")){
		out.write("failed");
	}
	else{
		String RETURN = "";
		for(int i = 0 ; i<7 ; i++){
			RETURN = RETURN + info[i]+"&";
		}
		out.write(RETURN);
	}
%>
