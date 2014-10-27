package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DB_expMark {
	/***取回备注表信息***///=====================================================================
	public String fetch_mark(String no){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		String mark="DO_NOT_EXIST";
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
		
		String sql = "select * from expMark where exp_id='"+no+"'";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				mark = res.getString(2);
			}
			con.close();
			stmt.close();	
			return mark;
		
		} catch (SQLException e) {
			return "error";
		}	
	}
	
	/***取回备注表信息***///=====================================================================
	public boolean refresh_mark(String no,String mark){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
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
		
		String sql = "select * from expMark where exp_id='"+no+"'";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				sql = "update expMark set exp_mark='"+mark+"' where exp_id='"+no+"'";
				stmt.executeUpdate(sql);
			}
			else{
				sql = "insert into expMark values('"+no+"','"+mark+"')";
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
