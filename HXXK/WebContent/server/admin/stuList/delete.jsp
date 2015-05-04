<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%	
	String id = request.getParameter("id").toString();
	
	String ABOUT_BASEINFO[] = new DB_baseInfo().get_info_by_id(id);
	if(ABOUT_BASEINFO[0].equals("failed"))
		out.write("failed");
	else{
		if(!ABOUT_BASEINFO[4].equals("zero")){
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
				out.write("failed");
				return;
			}
		}
	}
	
	if(new deleteTheStudent().delete(id)){
		out.write("success");
	}
	else
		out.write("failed");
	
%>