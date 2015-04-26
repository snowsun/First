package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;

// 处理与公告有关的数据库操作
public class DB_noticeInfo {
	private String DBUserName = CONFIG.DBUserName;
	private String DBPassword = CONFIG.DBPassword;

	// 获得当前公告信息
	public String[] getNoticeInfo() {
		Connection con = null;
		Statement stmt = null;
		ResultSet res = null;
		String info[] = new String[3];
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", DBUserName, DBPassword);
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
	// 获得当前公告信息
		public String getNoticeByTime(String time) {
			Connection con = null;
			Statement stmt = null;
			ResultSet res = null;
			String result="";
			try {
				Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
				con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", DBUserName, DBPassword);
				stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
			} catch (Exception ex) {
				System.out.println("连接失败");
				ex.printStackTrace();
			}

			String sql = "select info from notice where time='"+time+"'";
			try {
				res = stmt.executeQuery(sql);
				if (res.next()) {
					result = res.getString(1).trim();
				} 
				con.close();
				stmt.close();
				return result;

			} catch (SQLException e) {
				return "failed";
			}
		}
	// 获得当前公告信息
		public String[] getNoticeTimeInfo() {
			Connection con = null;
			Statement stmt = null;
			ResultSet res = null;
			String info[] = new String[100];
			try {
				Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
				con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", DBUserName, DBPassword);
				stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
			} catch (Exception ex) {
				System.out.println("连接失败");
				ex.printStackTrace();
			}

			String sql = "select time from notice order by time desc";
			try {
				res = stmt.executeQuery(sql);
				int i =  0 ; 
				while(res.next()) {
					info[i] = res.getString(1).trim();
					i++;
				} 
				if(i==0)
					info[0] = "my";
				else
					info[i] = "over";
				
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
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", DBUserName, DBPassword);
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}

		String sql = "insert into notice values('" + myDateFormat + "','" + noticeInfo + "')";
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
	
	public boolean deleteNoticeInfo(String time) {
		boolean isSuccess = false;
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

		String sql = "delete from  notice where time='"+time+"'";
		try {
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();
			isSuccess = true; // 更新成功
		} catch (SQLException e) {
			isSuccess = false;
		}
		return isSuccess;
	}
}
