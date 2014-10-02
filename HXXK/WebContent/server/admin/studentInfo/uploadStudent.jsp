<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.io.File"%>
 <%@ page import="source.*" %>
<%	
	String fileLocation = application.getRealPath("/")+"/upload";
	File file = new File(fileLocation);
	String s[] = file.list();
	int i = 0 ;
	File temp = null;
	for(;i<s.length;i++){
		temp = new File(fileLocation+"/"+s[i]);
		if(temp.isFile())
			break;
	}
	if(i==s.length){
		out.write("error1");//导入错误，请重新上传文件
	}
	else{
		String info[][]=new Distill().distill(temp);
		if(info[0][0].equals("fileNotExist"))
			out.write("error2");//未发现上传文件，请重新上传多等待几秒
		else if(info[0][0].equals("fileWrong"))
			out.write("error3");//文件格式错误，请仔细核查！！！
		else{
			int fl=new DB().insertNewInfo(info);
			if(fl==-1)
				out.write("error4");//数据库存储错误
			else
				out.write(fl+"");	
		}
	}
%>
