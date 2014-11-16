<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	

	String ABOUT_CONFIG[] =new DB_config().fetch_config();
	if(ABOUT_CONFIG[0].equals("failed")){
		out.write("failed");
		return;
	}
	//week
	String week = ABOUT_CONFIG[3];
	//time
	String time = ABOUT_CONFIG[7];
	time = time.replaceAll("@", "");
	//room
	String ROOM[] = new DB_laboratory().fetch_laboratory();
	if(ROOM[0].equals("failed")){
		out.write("failed");
		return;
	}
	String room="";
	for(int i = 0 ; i<20 ; i++){
		if(!ROOM[i].equals("over"))
			room = room+ROOM[i]+"*";
		else
			break;
	}
	//teacher
	String TEACHER[][] = new DB_baseInfo().fetch_teacher();
	if(TEACHER[0][0].equals("failed")){
		out.write("failed");
		return;
	}
 	String teacher="";
 	for(int i=0;i<50;i++){
 		if(!TEACHER[i][0].equals("over"))
 			teacher = teacher+TEACHER[i][0]+"-"+TEACHER[i][2]+"*";
 		else
 			break;
 	}
 	
 	
	String info[][] = new DB_experiment().fetch_experiment();
//	String info[][] = new DB_mainInfo().fetch_mainInfo();
	if(info[0][0].equals("failed")){
		out.write("failed");
		return;
	}
	else{
		String RETURN="",temp="";
		for(int i=0;i<50;i++){
			if(info[i][0].equals("over"))
				break;
			else{
				temp = info[i][0]+"#"+info[i][1]+"#"+info[i][2]+"#"+info[i][3]+"#"+info[i][4]+"#"+info[i][5]+"#"+info[i][6]+"#"+info[i][7];
				RETURN=RETURN+temp+"&";
			}
		}
		RETURN = RETURN+"&$"+week+"$"+time+"$"+room+"$"+teacher;
//		System.out.println(RETURN);
		out.write(RETURN);
	}
%>
