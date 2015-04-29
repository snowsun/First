<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	String cId = request.getParameter("courseId").toString();
	System.out.println(cId);
	String idSet[] = cId.split("-");
	String t="";
	String conf[] = new DB_config().fetch_config();
	String results = "";
	if(!conf[0].equals("failed")){
		t = conf[3];
		String info[][] = new DB_NPublished().fetch_NPublished();
		if(info[0][0].equals("failed")){
			out.write("failed");
			return;
		}
		else{
			for(int i=0 ; i<idSet.length ; i++){
				int s = inArray(idSet[i],info);
				if(s!=-1){ 
					results=results+info[s][1]+"-";
				}
				else
					results=results+"MY-";
			}
			results = t+"*"+results;
			System.out.print(results);
			out.write(results);
		}
	}
	else
		out.write("failed");
	
	
%>

<%!
	int inArray(String str , String a[][]){
		for(int i=0 ; i<a.length ; i++){
			System.out.println(a[i][0]);
			if(str.equals(a[i][0]))
				return i;
		}
		return -1;
	}

%>