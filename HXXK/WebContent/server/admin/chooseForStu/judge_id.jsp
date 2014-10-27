<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%
	String id = request.getParameter("stuId").toString();
	DB_baseInfo db = new DB_baseInfo();
	String info[] = db.get_info_by_id(id);
	if(info[0].equals("failed"))
		out.write("failed");
	else{
		if(info[4].equals("zero"))
			out.write(info[2]);
		else{
			String courses = info[4];
			String CI[] = courses.split("\\*");
			int num = CI.length,flag=0;
			String c_id,c_t;
			for(int i=0;i<num;i++){
	 			c_id = CI[i].split("_")[0];
	 			c_t = CI[i].split("_")[1];
	 			if(!new DB_mainInfo().remove_one_record(id, c_id, c_t)){
	 				flag=1;
	 				break;
	 			}
	 		}
			
			if(flag==1){
				out.write("failed");
			}
			else{//操作baseInfo表
				if(new DB_baseInfo().add_course_info(id, "zero"))
					out.write(info[2]);
				else
					out.write("failed");
			}
				
		}
	}
%>