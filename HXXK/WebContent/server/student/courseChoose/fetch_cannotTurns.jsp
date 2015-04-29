<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String cannotTurns[][] = new DB_NPublished().fetch_NPublished();
	String result = ""; 
	if(cannotTurns[0][0].equals("failed"))
		out.write("failed");
	else{
		for(int i = 0 ;!cannotTurns[i][0].equals("over") ; i++){
			result =result+cannotTurns[i][0]+"-"+cannotTurns[i][1]+"#";
		}
		out.write(result);
	}
	
	
	
	
%>
