package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DB_pushStatus {
	private String DBUserName = CONFIG.DBUserName;
	private String DBPassword = CONFIG.DBPassword;
	/***获取是否已经提交对应 姓名、课程、期数的作业状态***/
	// =========================================================================
	public String if_pushed(String stuID , String courseID , String t ){
		Connection con = null;
		Statement stmt = null;
		String flag="";
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", DBUserName, DBPassword);
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);

		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		String sql = "select * from pushStatus where stuID='" + stuID +"' and courseID='"+courseID+"' and courseT='"+t+"'";
		ResultSet res;
		try {
			res = stmt.executeQuery(sql);
			if(res.next()) {
				flag = "yes";
			}
			else
				flag = "no";
			res.close();
			con.close();
			stmt.close();
			return flag;
		} catch (SQLException e) {
			return "failed";
		}	
	}
	
	// =========================================================================
	public String insert_status(String stuID , String courseID , String t ){
		Connection con = null;
		Statement stmt = null;
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", DBUserName, DBPassword);
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);

		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		String sql = "select * from pushStatus where stuID='" + stuID +"' and courseID='"+courseID+"' and courseT='"+t+"'";
		ResultSet res;
		try {
			res = stmt.executeQuery(sql);
			if(!res.next()) {
				sql = "insert into pushStatus values('"+stuID+"','"+courseID+"','"+t+"')";
				stmt.executeUpdate(sql);
			}
			res.close();
			con.close();
			stmt.close();
			return "success";
		} catch (SQLException e) {
			return "failed";
		}	
	}
}
