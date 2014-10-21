package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DB_baseInfo {

	/*** 登录 ***/
	// =========================================================================
	public int login(String username, String password) throws SQLException {
		Connection con = null;
		Statement stmt = null;
		int success = 0;
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", "sa", "131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);

		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		String sql = "select * from baseInfo where id='" + username + "' and password='" + password + "'";
		ResultSet res = stmt.executeQuery(sql);
		while (res.next()) {
			success = 1;
		}
		con.close();
		stmt.close();
		return success;
	}

	/*** 加入学生信息 ***/
	// =====================================================================
	public int insertNewInfo(String info[][], int flag) {
		Connection con = null;
		Statement stmt = null;
		ResultSet res = null;
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", "sa", "131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}

		String checkSql = "", sql = "", id = "", psw = "", name = "";
		int i = 0;
		try {
			for (; i < 200; i++) {
				if (!info[i][0].equals("over")) {
					id = info[i][0];
					psw = info[i][0];
					name = info[i][1];
					checkSql = "select * from baseInfo where id='" + id + "'";
					res = stmt.executeQuery(checkSql);
					if (!res.next()) {
						sql = "insert into baseInfo values('" + id + "','" + psw + "','" + name + "'," + flag + ",'zero')";
						stmt.executeUpdate(sql);
					}
				} else {
					break;
				}
			}
			con.close();
			stmt.close();
			res.close();
			return i;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			return -1;
		}

	}

	/*** 重置密码 ***/
	// =====================================================================
	public int resetPsw(String id) {
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

		String sql = "update baseInfo set password='" + id + "' where id='" + id + "'";
		try {
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();
			return 1; // 重置密码成功
		} catch (SQLException e) {
			return -1; // 数据库操作失败
		}
	}

	/*** 根据id取回信息 ***/
	// =====================================================================
	public String[] get_info_by_id(String id) {
		Connection con = null;
		Statement stmt = null;
		ResultSet res = null;
		String info[] = new String[5];
		info[0] = "failed";
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", "sa", "131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}

		String sql = "select * from baseInfo where id='"+id+"'";
		try {
			res = stmt.executeQuery(sql);
			while (res.next()) {
				info[0] = res.getString(1).trim();
				info[1] = res.getString(2).trim();
				info[2] = res.getString(3).trim();
				info[3] = res.getString(4).trim();
				info[4] = res.getString(5).trim();
			}
			con.close();
			stmt.close();
			return info;

		} catch (SQLException e) {
			return info;
		}
	}
	
	/*** 插入学生选课信息***/
	// =====================================================================
	public boolean add_course_info(String userID,String course) {
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

		String sql = "update baseInfo set mark='"+course+"' where id='"+userID+"'";
		System.out.println(sql);
		try {
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();
			return true;

		} catch (SQLException e) {
			return false;
		}
	}
	
	/*** 取回基本信息表 ***/
	// =====================================================================
	public String[][] fetch_teacher() {
		Connection con = null;
		Statement stmt = null;
		ResultSet res = null;
		String info[][] = new String[50][5];
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", "sa", "131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}

		String sql = "select * from baseInfo where type=3 order by name asc ";
		try {
			res = stmt.executeQuery(sql);
			int i = 0;
			while (res.next()) {
				info[i][0] = res.getString(1).trim();
				info[i][1] = res.getString(2).trim();
				info[i][2] = res.getString(3).trim();
				info[i][3] = res.getString(4).trim();
				info[i][4] = res.getString(5).trim();
				i++;
			}
			info[i][0] = "over";
			con.close();
			stmt.close();
			return info;

		} catch (SQLException e) {
			info[0][0] = "failed";
			e.printStackTrace();
		}
		return info;
	}
	

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// 返回用户类型(1是管理员,2是学生,3是老师)
	public int getUserType(String userID) {

		Connection con = null;
		Statement stmt = null;
		ResultSet res = null;
		String userType = "-1";
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK", "sa", "131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
		} catch (Exception ex) {
			System.out.println("连接失败");
			ex.printStackTrace();
		}

		String sql = "select type from baseInfo where id = '" + userID + "'";
		try {
			res = stmt.executeQuery(sql);
			if (res.next()) {
				userType = res.getString(1).trim();
			}
			con.close();
			stmt.close();
		} catch (SQLException e) {
			System.out.println("sql执行失败");
			e.printStackTrace();
		}
		int type = Integer.parseInt(userType);

		return type;

	}

	public static void main(String args[]) {

	}
}
