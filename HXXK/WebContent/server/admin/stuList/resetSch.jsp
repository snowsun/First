<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String id = request.getParameter("id").toString();
	String ABOUT_BASEINFO[] = new DB_baseInfo().get_info_by_id(id);
	if(ABOUT_BASEINFO[0].equals("failed"))
		out.write("failed");
	else{
		if(ABOUT_BASEINFO[4].equals("zero"))
			out.write("no_choose");	
		else{
			String courses = ABOUT_BASEINFO[4];
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
				out.write("false");
			}
			else{//操作baseInfo表
				if(new DB_baseInfo().add_course_info(id, "zero"))
					out.write("success");
				else
					out.write("failed");
			}
			
			
		}
	}
%>

<%!
%>