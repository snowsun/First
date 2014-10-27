<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%@ page import="java.util.Arrays" %>
<%	
	String t = request.getParameter("t").toString();
	String no = request.getParameter("no").toString();
	String ans = new DB_mainInfo().get_student_list_by_id_and_t(no, t);
	if(ans.equals("failed"))
		out.write("failed");
	else{
		if(ans.length()==0)
			out.write("null");
		else{
			DB_baseInfo db = new DB_baseInfo();
			String list[] = ans.split("#");
			Arrays.sort(list);
			String RETURN="";
			for(int i=0;i<list.length;i++)
				RETURN = RETURN + list[i] + "------"+ db.get_info_by_id(list[i])[2]+"#";
			out.write(RETURN);
		}
	}
%>
