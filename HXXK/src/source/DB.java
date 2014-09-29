package source;
import java.sql.*;
public class DB {
	
	/***登录***/
	public int login(String username ,String password) throws SQLException{
		Connection con=null;
		Statement stmt=null;
		int success=0;
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK","sa","131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
//			System.out.println("连接成功");
		  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		String sql = "select * from baseInfo where id='"+username+"' and password='"+password+"'";
		ResultSet res= stmt.executeQuery(sql);
		while(res.next()){
			success=1;
		}
		con.close();
		stmt.close();
		return success;
	}
}
