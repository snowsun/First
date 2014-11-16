package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DB_DDL {
	private String DBUserName = CONFIG.DBUserName;
	private String DBPassword = CONFIG.DBPassword;
	/*** 根据课程号得到DDL***/
	// =========================================================================
	public String[] getDDLById(String id){
		Connection con = null;
		Statement stmt = null;
		String DDL[] = new String[5];
		DDL[0] = "NotFound";
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", DBUserName, DBPassword);
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);

		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		String sql = "select * from DDL where courseID='" + id +"'";
		ResultSet res;
		try {
			res = stmt.executeQuery(sql);
			while (res.next()) {
				DDL[0] = res.getString(2).trim();
				DDL[1] = res.getString(3).trim();
				DDL[2] = res.getString(4).trim();
				DDL[3] = res.getString(5).trim();
				DDL[4] = res.getString(6).trim();
			}
			res.close();
			con.close();
			stmt.close();
			return DDL;
		} catch (SQLException e) {
			DDL[0] = "failed";
			return DDL;
		}	
	}
	
	/*** 更新DDL***/
	// =========================================================================
	public String updateDDL(String id, String colName ,String date){
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
		String sql = "select * from DDL where courseID='" + id +"'";
		ResultSet res;
		try {
			res = stmt.executeQuery(sql);
			if(res.next()) {
				sql = "update DDL set "+colName+"='"+date+"' where courseID='"+id+"'";
				stmt.executeUpdate(sql);
			}
			else{
				sql = "insert into DDL values('"+id+"','NoPublished','NoPublished','NoPublished','NoPublished','NoPublished')";
				stmt.executeUpdate(sql);
				sql = "update DDL set "+colName+"='"+date+"' where courseID='"+id+"'";
				stmt.executeUpdate(sql);
			}
			res.close();
			con.close();
			stmt.close();
			return "success";
		} catch (SQLException e) {
			e.printStackTrace();
			return "failed";
		}	
	}

}
