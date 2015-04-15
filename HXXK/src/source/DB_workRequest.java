package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DB_workRequest {
	private String DBUserName = CONFIG.DBUserName;
	private String DBPassword = CONFIG.DBPassword;
	/***取回备注表信息***///=====================================================================
	public String fetch_request(String id , String turn){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		String mark="DO_NOT_EXIST";
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK",DBUserName,DBPassword);
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		
		String sql = "select * from workRequest where courseId='"+id+"' and courseTurn='"+turn+"'";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				mark = res.getString(3);
			}
			con.close();
			stmt.close();	
			return mark;
		
		} catch (SQLException e) {
			return "error";
		}	
	}
	
	/***取回备注表信息***///=====================================================================
	public boolean refresh_request(String id,String turn ,String mark){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK",DBUserName,DBPassword);
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		
		String sql = "select * from workRequest where courseId='"+id+"' and courseTurn='"+turn+"'";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				sql = "update workRequest set workRequest='"+mark+"' where courseId='"+id+"' and courseTurn='"+turn+"'";
				stmt.executeUpdate(sql);
			}
			else{
				sql = "insert into workRequest values('"+id+"','"+turn+"','"+mark+"')";
				stmt.executeUpdate(sql);
			}
			con.close();
			stmt.close();	
			return true;
		
		} catch (SQLException e) {
			return false;
		}	
	}
}
