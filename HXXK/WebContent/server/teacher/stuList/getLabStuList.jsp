<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.io.*"%>
<%@ page import="source.*"%>
<%
	System.out.println("in getLabStuList server");
	String span_info = request.getParameter("span_info").toString();
	System.out.println(span_info);
	StringBuffer infoBF =new StringBuffer("");
	String info = "";
	String[] LAB_USER = span_info.split("#");
	String[][] USER_INFO = new DB_baseInfo().getAllUserInfo();
	if(USER_INFO[0][0].equals("failed")){
		out.write("failed");
	}else{
	int col = 0;
	//求列数
	for(int i=0;i<200;i++){
	 	if(!USER_INFO[i][0].equals("over"))
	 			col++;
	 	else
	 		break;
	}
	System.out.println("col:"+col);
	for(int i=0;i<LAB_USER.length;i++){
		String tempID = LAB_USER[i];
		for(int j=0;j<col;j++){
			if(tempID.equals(USER_INFO[j][0])){
				tempID = USER_INFO[j][0]+"-"+USER_INFO[j][2];
				infoBF.append(tempID).append("#");
				break;
			}
		}
	}
	info = infoBF.toString();
	System.out.println(info);
	out.write(info);
	}
%>
