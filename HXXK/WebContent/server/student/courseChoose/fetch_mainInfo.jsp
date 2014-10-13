<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	


	String ABOUT_CONFIG[] =new DB_config().fetch_config();
	//num_of_lab
	String week = ABOUT_CONFIG[3];	
	String info[][] = new DB_mainInfo().fetch_mainInfo();
	if(info[0][0].equals("failed")){
		out.write("failed");
	}
	else{
		String RETURN="",temp="";
		for(int i=0;i<50;i++){
			if(info[i][0].equals("over"))
				break;
			else{
				temp = info[i][0]+"#"+info[i][1]+"#"+info[i][2]+"#"+info[i][3]+"#"+info[i][4]+"#"+info[i][5]+"#"+info[i][6]+"#"+info[i][7]+"#"+info[i][8]+"#"+info[i][9]+"#"+info[i][10]+"#"+info[i][11]+"#"+info[i][12];
				RETURN=RETURN+temp+"&";
			}
		}
		RETURN = week+"<>"+RETURN;
//		System.out.println("2!!!"+RETURN);
		out.write(RETURN);
	}
%>
