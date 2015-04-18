package source;
import java.sql.*;
public class DB_FirstLoginTimeRecord {
	private String DBUserName = CONFIG.DBUserName;
	private String DBPassword = CONFIG.DBPassword;
	/***查找信息是否存在于表中***///=====================================================================
	public boolean if_set(String id){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		boolean f = false;
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
		
		String sql = "select * from FirstLoginTimeRecord where id='"+id+"'";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				f = true;
			}
			con.close();
			stmt.close();	
			return f; //更新成功
		} catch (SQLException e) {
			//return -1; //数据库操作失败
			return false;
		}	
		
	}
	
	/***插入时间记录于表中***///=====================================================================
	public boolean set_time(String id,String time){
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
		
		String sql = "insert into FirstLoginTimeRecord values('"+id+"','"+time+"')";
		try {
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();	
			return true; //更新成功
		} catch (SQLException e) {
			//return -1; //数据库操作失败
			return false;
		}	
		
	}
	
	/***取回信息***///=====================================================================
	public String fetch_info(String id){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		String cannotTime="failed";
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
		
		String sql = "select cannotTime from FirstLoginTimeRecord where id='"+id+"'";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				cannotTime = res.getString(1).trim();
			}
			con.close();
			stmt.close();	
			return cannotTime; //更新成功
		} catch (SQLException e) {
			//return -1; //数据库操作失败
			return cannotTime;
		}	
		
	}
}