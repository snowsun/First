<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String info[] = new DB_laboratory().fetch_laboratory();
	if(info[0].equals("failed")){
		out.write("failed");
	}
	else{
		String RETURN="";
		for(int i = 0 ; i<200 ; i++){
			if(!info[i].equals("over"))
				RETURN = RETURN+info[i]+"&";
			else
				break;
		}
		
		out.write(RETURN);
	}
%>
