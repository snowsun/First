package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DB_password {

	public boolean changePassword(String userID, String newPassword) {
		boolean isSuccess = false;
		Connection con = null;
		Statement stmt = null;
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", "sa", "131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}

		String sql = "update baseInfo set password = '" + newPassword + "' where id = '" + userID + "'";
		System.out.println(sql);
		try {
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();
			isSuccess = true; // 更新成功
		} catch (SQLException e) {
			System.out.println("sql执行出错");
			e.printStackTrace();
			isSuccess = false;
		}
		return isSuccess;
	}

}
