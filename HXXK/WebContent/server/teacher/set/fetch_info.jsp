<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.io.*"%>
<%@ page import="source.*"%>
<%
	String teacherID = session.getAttribute("userID").toString();
	String userType = session.getAttribute("userType").toString();
	if(userType.equals("tea")){
		String con[] = new DB_config().fetch_config();
		String[][] info= new DB_mainInfo().getInfoByTeaID(teacherID);
		if(info[0][0].equals("failed") || con[0].equals("failed")){
			out.write("failed");
		}else{
			String num = con[3];
			int ts = Integer.parseInt(num);
			String RETURN = "";
			String DDLs="";
			String DDL[] = new String[5];
			String id="";
			int flag=1; //标记用于标记数据库DDL的操作是否成功
			for(int i =0 ; !info[i][0].equals("over") ;i++){
				id = info[i][0];
				DDL = new DB_DDL().getDDLById(id);
				if(DDL[0].equals("failed")){
					out.write("failed");
					flag=0;
					break;
				}
				for(int j=0 ; j<ts;j++){
					if(DDL[0].equals("NotFound"))
						DDLs = DDLs+"NoPublished=";
					else
						DDLs = DDLs+DDL[j]+"=";
				}
				RETURN = RETURN + info[i][0]+"$"+info[i][1]+"$"+info[i][4]+"$"+info[i][5]+"$"+DDLs+"_CUT_";
				DDLs="";
			}
			
			if(flag==1){
				out.write(num+"_NUM_INFO_"+RETURN);
			}
		}
	}
	
	
%>
