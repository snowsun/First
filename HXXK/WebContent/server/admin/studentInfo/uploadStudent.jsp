<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.io.File"%>
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
		out.write("1");//导入错误，请重新上传文件
	}
	else{
		
	}
%>
