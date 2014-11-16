package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DB_laboratory {
	private String DBUserName = CONFIG.DBUserName;
	private String DBPassword = CONFIG.DBPassword;
	/***取回实验室信息***///=====================================================================
	public String[] fetch_laboratory(){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		String info[] = new String[20];
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
		
		String sql = "select * from laboratory order by room asc";
		try {
			res= stmt.executeQuery(sql);
			int i = 0 ;
			while(res.next()){
				info[i] = res.getString(1).trim();
				i++;
			}
			info[i] = "over";
			con.close();
			stmt.close();	
			return info;
		
		} catch (SQLException e) {
			info[0] = "failed";
			return info;
		}	
	}
	
	/***增加实验室信息***///=====================================================================
	public int insert_laboratory(String ROOM){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		int flag = 0 ;//ROOM 已存在
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
		
		String sql = "insert into laboratory values('"+ROOM+"')";
		String checkSql = "select * from laboratory where ROOM='"+ROOM+"'";
		try {
			res= stmt.executeQuery(checkSql);
			if(!res.next()){
				stmt.executeUpdate(sql);
				flag = 1;//ROOM 更新成功
			}
			con.close();
			stmt.close();	
			return flag;
		
		} catch (SQLException e) {
			flag = 2;//数据库操作失败
			return flag;
		}	
	}
	
	/***删除实验室信息***///=====================================================================
	public int delete_laboratory(String ROOM){
		Connection con=null;
		Statement stmt=null;
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
		String sql = "delete from laboratory where ROOM='"+ROOM+"'";
		try {	
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();	
			return 1;
		} catch (SQLException e) {
			//数据库操作失败
			return 0;
		}	
	}
}
