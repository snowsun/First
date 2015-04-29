<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
<%	
	Calendar c = Calendar.getInstance();
	c.setTime(new Date(System.currentTimeMillis()));
	int dayOfWeek = c.get(Calendar.DAY_OF_WEEK);
	int xq = 0 ;
	switch (dayOfWeek) {
		case 1:
	 		xq = 7;
	 		break;
		case 2:
			xq = 1;
		 	break;
		case 3:
			xq = 2;
			break;
		case 4:
			xq = 3;
			break;
		case 5:
			xq = 4;
			break;
		case 6:
			xq = 5;
			break;
		case 7:
			xq = 6;
			break;
	}
	
	String turns = new DB_config().fetch_config()[3];
	
	String cinfo[][] = new DB_mainInfo().fetch_AllmainInfo();
	if(cinfo[0][0].equals("failed")){
		out.write("failed");
		return;
	}
	
	
	String name ="实验名称";
	String teacher = "指导教师";
	String lab = "实验室";
	String T1 = "第一轮";
	String T2 = "第二轮";
	String T3 = "第三轮";
	String T4 = "第四轮";
	String T5 = "第五轮";
	for(int i=0 ; !cinfo[i][0].equals("over") ; i++){
		if(cinfo[i][5].equals("星期"+xq)){
			name = name + "+-+"+cinfo[i][1];
			teacher = teacher + "+-+" +cinfo[i][4];
			lab = lab + "+-+" +cinfo[i][3];
			T1 = T1 + "+-+" + cinfo[i][9];
			T2 = T2 + "+-+" + cinfo[i][11];
			T3 = T3 + "+-+" + cinfo[i][13];
			T4 = T4 + "+-+" + cinfo[i][15];
			T5 = T5 + "+-+" + cinfo[i][17];
		}
	}
	
	String result = turns+"*"+name+"*"+teacher+"*"+lab+"*"+T1+"*"+T2+"*"+T3+"*"+T4+"*"+T5;
	out.write(result);
%>

