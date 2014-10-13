package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;

// 处理与公告有关的数据库操作
public class DB_noticeInfo {

	// 获得当前公告信息
	public String[] getNoticeInfo() {
		Connection con = null;
		Statement stmt = null;
		ResultSet res = null;
		String info[] = new String[3];
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", "sa", "131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}

		String sql = "select * from notice order by time desc";
		try {
			res = stmt.executeQuery(sql);
			if (res.next()) {
				info[0] = res.getString(1).trim();
				info[1] = res.getString(1).trim();
				info[2] = res.getString(2).trim();

			} else {
				info[0] = "null";
			}
			con.close();
			stmt.close();
			return info;

		} catch (SQLException e) {
			info[0] = "failed";
			return info;
		}
	}

	// 发布新公告
	public boolean updateNoticeInfo(String noticeInfo) {
		boolean isSuccess = false;
		Date myDate = new Date();
		String myDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(myDate);
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

		String sql = "insert into notice values('" + myDateFormat + "','" + noticeInfo + "')";
		System.out.println(sql);
		try {
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();
			isSuccess = true; // 更新成功
		} catch (SQLException e) {
			e.printStackTrace();
			isSuccess = false;
		}
		return isSuccess;
	}
}
