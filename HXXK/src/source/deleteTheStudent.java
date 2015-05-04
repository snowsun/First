package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class deleteTheStudent {
	private String DBUserName = CONFIG.DBUserName;
	private String DBPassword = CONFIG.DBPassword;
	public boolean delete(String id){
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
		String sql="";
		try {
//			String R = id+"#";
//			sql = "update mainInfo set LAB1_LIST=replace(LAB1_LIST,'"+R+"','') ,LAB2_LIST=replace(LAB2_LIST,'"+R+"','') ,LAB3_LIST=replace(LAB3_LIST,'"+R+"','') ,LAB4_LIST=replace(LAB4_LIST,'"+R+"','') ,LAB5_LIST=replace(LAB5_LIST,'"+R+"','')";
//			stmt.executeUpdate(sql);
			sql = "delete from baseInfo where id='"+id+"'";
			stmt.executeUpdate(sql);
			sql = "delete from FirstLoginTimeRecord where id='"+id+"'";
			stmt.executeUpdate(sql);
			sql = "delete from pushStatus where id='"+id+"'";
			con.close();
			stmt.close();	
			return true;
		
		} catch (SQLException e) {
			return false;
		}	
	}
	
}
