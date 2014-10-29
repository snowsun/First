package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DB_mainInfo {
	/***增加实验室信息***///=====================================================================
	public int insert_mainInfo(String no,String name,String turnal,String laboratory,String teacher,String time,String status,String limit){
		Connection con=null;
		Statement stmt=null;
		int flag = 1 ;
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK","sa","131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		
		String sql = "insert into mainInfo values("+no+",'"+name+"',"+turnal+",'"+laboratory+"','"+teacher+"','"+time+"',"+status+","+limit+",0,'',0,'',0,'',0,'',0,'')";
		try {
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();	
			return flag;
		
		} catch (SQLException e) {
			e.printStackTrace();
			flag = 2;//数据库操作失败
			return flag;
		}	
	}
	
	/***增加实验室信息***///=====================================================================
	public int dalete_mainInfo(String no){
		Connection con=null;
		Statement stmt=null;
		int flag = 1 ;
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK","sa","131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		String sql = "delete from mainInfo where no="+no;
		try {
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();	
			return flag;
		
		} catch (SQLException e) {
			flag = 2;//数据库操作失败
			return flag;
		}	
	}
	
	/***取回实验信息***///=====================================================================
	public String[][] fetch_mainInfo(){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		String info[][] = new String[50][13];
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK","sa","131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		
		String sql = "select * from mainInfo order by NAME asc";
		try {
			res= stmt.executeQuery(sql);
			int i = 0 ;
			while(res.next()){
				
				info[i][0] = res.getString(1).trim();
				info[i][1] = res.getString(2).trim();
				info[i][2] = res.getString(3).trim();
				info[i][3] = res.getString(4).trim();
				info[i][4] = res.getString(5).trim();
				info[i][5] = res.getString(6).trim();
				info[i][6] = res.getString(7).trim();
				info[i][7] = res.getString(8).trim();
				
				info[i][8] = res.getString(9).trim();
				info[i][9] = res.getString(11).trim();
				info[i][10] = res.getString(13).trim();
				info[i][11] = res.getString(15).trim();
				info[i][12] = res.getString(17).trim();
				i++;
			}
			info[i][0] = "over";
			con.close();
			stmt.close();	
			return info;
		
		} catch (SQLException e) {
			e.printStackTrace();
			info[0][0] = "failed";
			return info;
		}	
	}
	
	/***判断传入课程是否可选***///=====================================================================
	public boolean if_can_be_chosen(String c_id , String c_t){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		int max_num , now_num;
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK","sa","131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		String col_num = "LAB"+c_t+"_NUM" , col_list = "LAB"+c_t+"_LIST";
		String sql = "select LIMIT,"+col_num+","+col_list+" from mainInfo where NO='"+c_id+"'";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				max_num = Integer.parseInt(res.getString(1).toString().trim());
				now_num = Integer.parseInt(res.getString(2).toString().trim());
			}
			else{
				res.close();
				con.close();
				stmt.close();	
				return false;
			}
			if(max_num <= now_num){
				res.close();
				con.close();
				stmt.close();	
				return false;
			}			
			res.close();
			con.close();
			stmt.close();	
			return true;
		} catch (SQLException e) {
			//数据库操作失败
			return false;
		}	
	}
	
	/***将学生增加到信息表中***///=====================================================================
	public boolean add_one_record(String userID , String c_id , String c_t){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		int now_num;
		String list="";
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK","sa","131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		String col_num = "LAB"+c_t+"_NUM" , col_list = "LAB"+c_t+"_LIST";
		String sql = "select "+col_num+","+col_list+" from mainInfo where NO='"+c_id+"'";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				now_num = Integer.parseInt(res.getString(1).toString().trim())+1;
				list = res.getString(2).toString().trim();
				if(!list.contains(userID)){
					String now_list = list+userID+"#";
					sql = "update mainInfo set "+col_num+"="+now_num+","+col_list+"='"+now_list+"' where NO='"+c_id+"'";
					stmt.executeUpdate(sql);
				}	
				
			}
			else{
				res.close();
				con.close();
				stmt.close();	
				return false;
			}			
			res.close();
			con.close();
			stmt.close();	
			return true;
		} catch (SQLException e) {
			//数据库操作失败
			return false;
		}	
	}
	
	
	/***获取选课学生信息***///=====================================================================
	public String get_student_list_by_id_and_t(String no , String t){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		String list="";
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK","sa","131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		String colName = "LAB"+t+"_LIST";
		String sql = "select "+colName+" from mainInfo where NO='"+no+"'";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				list = res.getString(1).toString().trim();				
			}
			res.close();
			con.close();
			stmt.close();	
			return list;
		} catch (SQLException e) {
			//数据库操作失败
			return "failed";
		}	
	}
	/***将学生选课信息从表中删除***///=====================================================================
	public boolean remove_one_record(String userID , String c_id , String c_t){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		int now_num;
		String list="";
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK","sa","131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		String col_num = "LAB"+c_t+"_NUM" , col_list = "LAB"+c_t+"_LIST";
		String sql = "select "+col_num+","+col_list+" from mainInfo where NO='"+c_id+"'";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				now_num = Integer.parseInt(res.getString(1).toString().trim())-1;
				list = res.getString(2).toString().trim();
				if(list.contains(userID)){
					list = list.replace(userID+"#", "");
					sql = "update mainInfo set "+col_num+"="+now_num+","+col_list+"='"+list+"' where NO='"+c_id+"'";
					stmt.executeUpdate(sql);
				}	
				
			}
			else{
				res.close();
				con.close();
				stmt.close();	
				return false;
			}			
			res.close();
			con.close();
			stmt.close();	
			return true;
		} catch (SQLException e) {
			//数据库操作失败
			return false;
		}	
	}
	// 查找学生列表
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	public String[][] getStuList(String teacherID) {
		Connection con = null;
		Statement stmt = null;
		ResultSet res = null;
		String info[][] = new String[5][14];
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", "sa", "131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}

		String sql = "select * from mainInfo where TEACHER like '" + teacherID + "-%'";
		try {
			res = stmt.executeQuery(sql);
			int i = 0;
			while (res.next()) {
				// 实验名字NAME
				info[i][0] = res.getString(2).trim();
				// 实验室LABORATORY
				info[i][1] = res.getString(4).trim();
				// 老师TEACHER
				info[i][2] = res.getString(5).trim();
				// 时间TIME
				info[i][3] = res.getString(6).trim();
				// LAB1_NUM
				info[i][4] = res.getString(9).trim();
				// LAB1_LIST
				info[i][5] = res.getString(10).trim();
				// LAB2_NUM
				info[i][6] = res.getString(11).trim();
				// LAB2_LIST
				info[i][7] = res.getString(12).trim();
				// LAB3_NUM
				info[i][8] = res.getString(13).trim();
				// LAB3_LIST
				info[i][9] = res.getString(14).trim();
				// LAB4_NUM
				info[i][10] = res.getString(15).trim();
				// LAB4_LIST
				info[i][11] = res.getString(16).trim();
				// LAB5_NUM
				info[i][12] = res.getString(17).trim();
				// LAB5_LIST
				info[i][13] = res.getString(18).trim();
				i++;
			}
			info[i][0] = "over";
			con.close();
			stmt.close();
			return info;

		} catch (SQLException e) {
			info[0][0] = "failed";
			e.printStackTrace();
			System.out.println("sql执行失败");
		}
		return info;
	}
	
	public static void main(String []args){	
	//	new DB_mainInfo().add_one_record("111220106", "30492152", "2");
	}
}
