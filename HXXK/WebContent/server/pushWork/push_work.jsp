<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*"%>
<%
	String id = request.getParameter("id").toString();
	String type = request.getParameter("type").toString();
	
	if(type.equals("stu")){
		String DDL="未开放提交";
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
					for(int i=0;i<50;i++){
						if(info[i][0].equals("over"))
							break;
						else{
								String t = get_t(info[i][0],C,len);
								if(!t.equals("not")){//if have chosen this lab
									
									int It = Integer.parseInt(t);
									String DDLs[] = new String[5];
									DDLs = new DB_DDL().getDDLById(info[i][0]);
									if(DDLs[0].equals("failed")){
										out.write("failed");
										return;
									}
									else if(!DDLs[0].equals("NotFound")){
										DDL = DDLs[It-1];
										if(DDL.equals("NoPublished"))
											DDL="未开放提交";		
									}
									
									String if_pushed = new DB_pushStatus().if_pushed(id, info[i][0], t);
									if(if_pushed.equals("failed")){
										out.write("failed");
										return;
									}
									temp = info[i][0]+"#"+info[i][1]+"#"+info[i][4].split("-")[1]+"#"+info[i][5]+"#"+t+"#"+DDL+"#"+if_pushed;
									RETURN=RETURN+temp+"&";
									DDL="未开放提交";
							}	
						}
					}
					out.write(RETURN);
				}
				
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
