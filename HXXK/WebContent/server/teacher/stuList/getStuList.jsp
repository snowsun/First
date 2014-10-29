<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.io.*"%>
<%@ page import="source.*"%>
<%
	System.out.println("in getStuList server");
	String teacherID = request.getParameter("teacherID").toString();
	String[][] USER_INFO= new DB_mainInfo().getStuList(teacherID);
	if(USER_INFO[0][0].equals("failed")){
		out.write("failed");
	}else{
	StringBuffer userInfoBF = new StringBuffer("");
	String userInfo = "";
	String[] labList;
	int col = 0;
	//求列数
	for(int i=0;i<10;i++){
	 	if(!USER_INFO[i][0].equals("over"))
	 			col++;
	 	else
	 		break;
	}
	System.out.println(col);
	for(int i=0;i<col;i++){
		for(int j=0;j<14;j++){
			userInfoBF.append(USER_INFO[i][j]).append("_ROW_");
		}
		userInfoBF.append("_COL_");
	}
	userInfo=userInfoBF.toString();
	out.write(userInfo);
	}
%>
