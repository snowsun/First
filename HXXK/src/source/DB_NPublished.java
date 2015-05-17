package source;
import java.sql.*;

public class DB_NPublished {
	private String DBUserName = CONFIG.DBUserName;
	private String DBPassword = CONFIG.DBPassword;
	/***更新配置表***///=====================================================================
	public int insert_NPublished(String id , String NP){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
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
		
		String sql = "select * from NPublished where id='"+id+"'";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				sql = "update NPublished set noPublished='"+NP+"' where id='"+id+"'";
				stmt.executeUpdate(sql);
			}
			else{
				sql = "insert into NPublished values('"+id+"','"+NP+"')";
				stmt.executeUpdate(sql);
			}
			con.close();
			stmt.close();	
			return 1; //更新成功
		} catch (SQLException e) {
			//return -1; //数据库操作失败
			return -1;
		}	
		
	}
	
	/***取回配置表信息***///=====================================================================
	/***更新配置表***///=====================================================================
	public String[][] fetch_NPublished(){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		String result[][] = new String[200][2];
		result[0][0]= "failed";
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
		
		String sql = "select * from NPublished";
		try {
			res= stmt.executeQuery(sql);
			int i = 0 ;
			while(res.next()){			
					result[i][0]= res.getString(1).trim();
					result[i][1]= res.getString(2).trim();
					i++;
			}
			result[i][0]= "over";
			con.close();
			stmt.close();	
			return result; //更新成功
		} catch (SQLException e) {
			//return -1; //数据库操作失败
			return result;
		}	
		
	}
}
