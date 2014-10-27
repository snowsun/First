<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
 <%
 	String INFO = request.getParameter("INFO").toString();
	String userID = request.getParameter("stuId").toString();
	
	String CI[] = INFO.split("\\*");
 	int num = CI.length;
 	
 	boolean flag = true;
	String c_id="",c_t="";
	DB_mainInfo DM = new DB_mainInfo();
	for(int i=0;i<num;i++){
		c_id = CI[i].split("_")[0];
		c_t = CI[i].split("_")[1];
		flag = flag && DM.if_can_be_chosen(c_id,c_t);
	}
	if(flag){
		//将信息插入mainInfo表
		for(int i=0;i<num;i++){
 			c_id = CI[i].split("_")[0];
 			c_t = CI[i].split("_")[1];
 			flag = flag && DM.add_one_record(userID, c_id, c_t);
 		}
		
		if(flag){
			//将信息插入学生表
			boolean f = new DB_baseInfo().add_course_info(userID, INFO);
			if(f)
				out.write("success");
			else
				out.write("failed");
		}
		else{
			out.write("failed");
		}

	}
	else{
		out.write("failed");
	}
 %>