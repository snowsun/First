<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="source.*" %>
<%@ page import="java.io.File" %>
<%@ page import="jxl.*" %>
<%@ page import="jxl.write.*" %>

<%
	System.out.println(1111);

	WritableFont wf_title = new WritableFont(WritableFont.TIMES, 15, WritableFont.BOLD, false);
	WritableFont wf_room = new WritableFont(WritableFont.TIMES, 10, WritableFont.BOLD, false);
	WritableCellFormat title = new WritableCellFormat(wf_title);
	WritableCellFormat room = new WritableCellFormat(wf_room);
	WritableCellFormat factor = new WritableCellFormat(wf_room);
	WritableCellFormat t = new WritableCellFormat(wf_room);
	
	try { 
		//title;
		title.setAlignment(Alignment.CENTRE);
		title.setBorder(Border.ALL, BorderLineStyle.THIN); // 设置边框线
        title.setBackground(jxl.format.Colour.LIGHT_GREEN); // 设置单元格的背景颜色
        
        //room;
		room.setBorder(Border.ALL, BorderLineStyle.THIN); // 设置边框线
        room.setBackground(jxl.format.Colour.LIGHT_ORANGE); // 设置单元格的背景颜色
        
        //factor;
		factor.setBorder(Border.ALL, BorderLineStyle.THIN); // 设置边框线
        factor.setBackground(jxl.format.Colour.LIGHT_TURQUOISE); // 设置单元格的背景颜色
        
        //t
        t.setBorder(Border.ALL, BorderLineStyle.THIN); // 设置边框线
        t.setBackground(jxl.format.Colour.LIGHT_BLUE); // 设置单元格的背景颜色
        
	} catch (WriteException e1) {
		out.write("error_0");
	} // 设置居中
	
	
	String baseInfo[][] = new DB_baseInfo().getAllUserInfo();
	String mainInfo[][] = new DB_mainInfo().fetch_AllmainInfo();
	String T = new DB_config().fetch_config()[3];
	int turns = Integer.parseInt(T); 
	
	if(baseInfo[0][0].equals("failed") || mainInfo[0][0].equals("failed")){
		out.write("error_1");
	}
	else{//解析数组下载excel课程表
		javax.swing.filechooser.FileSystemView fsv = javax.swing.filechooser.FileSystemView.getFileSystemView(); 
		String desktopPath = fsv.getHomeDirectory().toString();
		WritableWorkbook book  =  Workbook.createWorkbook( new File(desktopPath+"\\综合化学课表.xls"));
        WritableSheet sheet  =  book.createSheet( "课表 " ,  0 );
        sheet.mergeCells(0,0,15,0);
        for(int j =1 ; j<800;j++){
			 sheet.mergeCells(0,j,1,j);
			 sheet.mergeCells(2,j,3,j);
			 sheet.mergeCells(4,j,15,j);
        }
        sheet.setRowView(0,500);    
        Label label  =   new  Label( 0 ,  0 ,  "南京大学综合化学实验选课表" ,title);
        sheet.addCell(label);
        
        String tt[] = new String[5];
        int row=1;//极其重要
        
		for(int i = 0 ; !mainInfo[i][0].equals("over") ; i++){
			System.out.println(i);
			try{
	            //  打开文件     
	            sheet.mergeCells(0,row,10,row);
	            label  =   new  Label( 0 ,  row ,  "实验室："+mainInfo[i][3],room);
	            sheet.addCell(label);
	            row++;
	            
	            label  =   new  Label( 0 ,  row ,  "时间："+mainInfo[i][5],factor);
	            sheet.addCell(label);
	            
	            String tea = mainInfo[i][4].split("-")[1];
	            label  =   new  Label( 2 ,  row ,  "教师："+tea,factor);
	            sheet.addCell(label);
	            
	            label  =   new  Label( 4 ,  row ,  "实验："+mainInfo[i][1],factor);
	            sheet.addCell(label); 
	            row++;
	            
	            //五期学生拆分开来
	            tt[0] = mainInfo[i][9];
	            tt[1] = mainInfo[i][11];
	            tt[2] = mainInfo[i][13];
	            tt[3] = mainInfo[i][15];
	            tt[4] = mainInfo[i][17];
	            
	            //-1-
	            for(int k=0;k<turns;k++){
	            	sheet.mergeCells(0,row,3,row);
		            label  =   new  Label( 0 ,  row ,  "第"+(k+1)+"期",t);
		            sheet.addCell(label);
		            row++;
		            
		            String stuList[] = tt[k].split("#");
		            for(int r=0 ; r<stuList.length ;r++){
		            	if(stuList[r].length()<1){
		            		System.out.println("in");
		            		label = new  Label( 0 ,  row , "无同学选课");
			            	sheet.addCell(label);
			            	row++;
		            	}
		            	else{
			            	label = new  Label( 0 ,  row , stuList[r]);
			            	sheet.addCell(label);
			            	label = new  Label( 2 ,  row , get_name_by_id(stuList[r],baseInfo));
			            	sheet.addCell(label);
			            	row++;	
		            	}
		            }
	            }  
			}catch  (Exception e){
	      		out.write("error_0");
	       	} 
		}
		book.write();
        book.close();
	}
%>

<%!
	String get_name_by_id(String id,String baseInfo[][]){
		for(int i =0 ;!baseInfo[i][0].equals("over");i++){
			if(baseInfo[i][0].equals(id))
				return baseInfo[i][2];
		}
		return "姓名录入错误";
	}

%>