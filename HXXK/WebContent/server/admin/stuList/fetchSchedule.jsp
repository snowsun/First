<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String conf[] = new DB_config().fetch_config();
	String week = conf[6];
	String DDL = conf[5];
	
	String id = request.getParameter("id").toString();
	String ABOUT_BASEINFO[] = new DB_baseInfo().get_info_by_id(id);
	if(ABOUT_BASEINFO[0].equals("failed"))
		out.write("failed");
	else{
		if(ABOUT_BASEINFO[4].equals("zero"))
			out.write("no_choose");	
		else{
			String courses = ABOUT_BASEINFO[4];
			String info[][] = new DB_mainInfo().fetch_mainInfo();
			if(info[0][0].equals("failed")){
				out.write("failed");
			}
			else{//IMP___
				String C[] = courses.split("\\*");
				int len = C.length;
				String RETURN="",temp="";
				for(int i=0;i<200;i++){
					if(info[i][0].equals("over"))
						break;
					else{
							String t = get_t(info[i][0],C,len);
							if(!t.equals("not")){//if have chosen this lab
								temp = info[i][0]+"#"+info[i][1]+"#"+info[i][2]+"#"+info[i][3]+"#"+info[i][4]+"#"+info[i][5]+"#"+t;
								RETURN=RETURN+temp+"&";
						}	
					}
				}
				out.write(week+"<>"+DDL+"<>"+RETURN);
			}
			
		}
	}
	
	
%>

<%!
	String get_t(String a , String[] b ,int len){
		String id,t;
		for(int i =0;i<len;i++){
			id = b[i].split("_")[0];
			t = b[i].split("_")[1];
			if(a.equals(id))
				return t;
		}
		return "not";
	}
%>





