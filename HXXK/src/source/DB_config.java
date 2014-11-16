package source;
import java.sql.*;

public class DB_config {
	private String DBUserName = CONFIG.DBUserName;
	private String DBPassword = CONFIG.DBPassword;
	/***更新配置表***///=====================================================================
	public int update_config(String year,String lab_no,String begin_time,String end_time,String week,String openTime){
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
		
		String sql = "update config set IF_CONFIG=1,YEAR="+year+",LAB_NO="+lab_no+",BEGIN_TIME='"+begin_time+"',END_TIME='"+end_time+"',WEEK="+week+",OPEN_TIME='"+openTime+"'";
		try {
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();	
			return 1; //更新成功
		} catch (SQLException e) {
			//return -1; //数据库操作失败
		}	
		return -1;
	}
	
	/***取回配置表信息***///=====================================================================
	public String[] fetch_config(){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		String info[] = new String[8];
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
		
		String sql = "select * from config";
		try {
			res= stmt.executeQuery(sql);
			if(res.next()){
				for(int i = 0 ; i<8;i++){
					info[i] = res.getString(i+1).trim();
				}
			}
			con.close();
			stmt.close();	
			return info;
		
		} catch (SQLException e) {
			info[0] = "failed";
			return info;
		}	
	}
}
