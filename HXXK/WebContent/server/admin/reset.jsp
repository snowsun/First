<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <%@ page import="source.*" %>
 <%@ page import="java.io.*" %>
 <%
 	String fileLocation = application.getRealPath("/");//******important
	String path = fileLocation+"/HomeWork";	
	File file = new File(path);
	  if (!file.exists()) {
	    out.write("初始化失败");
	    return;
	  }
	  if (!file.isDirectory()) {
		  out.write("初始化失败");
		  return;
	  }
	  String[] tempList = file.list();
	  File temp = null;
	  for (int i = 0; i < tempList.length; i++) {
		
	     if (path.endsWith(File.separator)) {
	        temp = new File(path + tempList[i]);
	     } else {
	         temp = new File(path + File.separator + tempList[i]);
	     }
	     if (temp.isFile()) {
	        temp.delete();
	     }
	     if (temp.isDirectory()) {
	    	 if(!tempList[i].equals("gitTemp")){
	    		 out.write(tempList[i]);
	    		 String ff = delAllFile(path + File.separator + tempList[i]);
	    		 if(ff.equals("failed")){
	    			 out.write("初始化失败");
	    			 return;
	    		 }
	    		 temp.delete();
	    	 }
	     }
	     
	  }
	  
	  String fff  = new DB_REST_ALL().reset();
	  if(fff.equals("failed")){
		  out.write("数据库初始化失败，请稍后再试，若问题持续存在请联系数据库管理员");
			 return;
	  }
	  
	  out.write("success");
 %>

 <%!
   String delAllFile(String path) {
     File file = new File(path);
     if (!file.exists()) {
       return "failed";
     }
     if (!file.isDirectory()) {
       return "failed";
     }
     String[] tempList = file.list();
     File temp = null;
     for (int i = 0; i < tempList.length; i++) {
        if (path.endsWith(File.separator)) {
           temp = new File(path + tempList[i]);
        } else {
            temp = new File(path + File.separator + tempList[i]);
        }
        if (temp.isFile()) {
           temp.delete();
        }
     }
     return "success";
}
 %>