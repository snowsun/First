<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.io.*"%>
<%@ page import="source.*"%>
<%
	System.out.println("in getUserByInput server");
	String[][] USER_INFO= new DB_baseInfo().getAllUserInfo();
	if(USER_INFO[0][0].equals("failed")){
		out.write("failed");
	}else{
	StringBuffer userInfoBF = new StringBuffer("");
	String userInfo = "";
	int col = 0;
	//求列数
	for(int i=0;i<200;i++){
	 	if(!USER_INFO[i][0].equals("over"))
	 			col++;
	 	else
	 		break;
	}
	System.out.println(col);
	//转为table
	userInfoBF.append("<table border=\"1\"style=\"color:DimGray;border-style:Solid;font-style:normal;text-decoration:none;width:100%;border-collapse:collapse;\">");
	userInfoBF.append("<tr style=\"background:lightblue\"><td>用户名</td><td>密码</td><td>用户姓名</td><td>用户类型</td></tr>");
	for(int j=0;j<col;j++){
		if(j%2 == 0){
		userInfoBF.append("<tr style=\"background:white\"><td>").append(USER_INFO[j][0]).append("</td><td>").append(USER_INFO[j][1]).append("</td><td>")
		.append(USER_INFO[j][2]).append("</td><td>").append(USER_INFO[j][3]).append("</td></tr>");
		}else{
			userInfoBF.append("<tr style=\"background:lightblue\"><td>").append(USER_INFO[j][0]).append("</td><td>").append(USER_INFO[j][1]).append("</td><td>")
			.append(USER_INFO[j][2]).append("</td><td>").append(USER_INFO[j][3]).append("</td></tr>");
		}
	}
	userInfoBF.append("</table>");
	userInfo=userInfoBF.toString();
	out.write(userInfo);
	}
%>
