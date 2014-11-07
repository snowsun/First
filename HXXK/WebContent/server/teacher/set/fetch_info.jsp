<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.io.*"%>
<%@ page import="source.*"%>
<%
	String teacherID = session.getAttribute("userID").toString();
	String userType = session.getAttribute("userType").toString();
	if(userType.equals("tea")){
		String con[] = new DB_config().fetch_config();
		String[][] info= new DB_mainInfo().getInfoByTeaID(teacherID);
		if(info[0][0].equals("failed") || con[0].equals("failed")){
			out.write("failed");
		}else{
			String num = con[3];
			String RETURN = "";
			for(int i =0 ; !info[i][0].equals("over") ;i++){
				RETURN = RETURN + info[i][0]+"$"+info[i][1]+"$"+info[i][4]+"$"+info[i][5]+"_CUT_";
			}
			
			out.write(RETURN+num);
		}
	}
	
	
%>
