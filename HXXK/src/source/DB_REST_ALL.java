package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DB_REST_ALL {
	private String DBUserName = CONFIG.DBUserName;
	private String DBPassword = CONFIG.DBPassword;
	/*** 登录 ***/
	// =========================================================================
	public String reset(){
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
		
		try {
			String sql = "delete  from baseInfo where type='2'";
			stmt.executeUpdate(sql);
			sql = "delete  from DDL";
			stmt.executeUpdate(sql);
			sql = "delete  from expMark";
			stmt.executeUpdate(sql);
			sql = "update mainInfo set LAB1_NUM='0' , LAB2_NUM='0' , LAB3_NUM='0', LAB4_NUM='0', LAB5_NUM='0',LAB1_LIST='',LAB2_LIST='',LAB3_LIST='',LAB4_LIST='',LAB5_LIST=''";
			stmt.executeUpdate(sql);
			sql = "delete  from pushStatus";
			stmt.executeUpdate(sql);
			sql = "delete  from workRequest";
			stmt.executeUpdate(sql);
			sql = "delete  from FirstLoginTimeRecord";
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();
			return "success";
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "failed";
		}	
	}
	public static void main(String args[]){
		new DB_REST_ALL().reset();
	}
}
