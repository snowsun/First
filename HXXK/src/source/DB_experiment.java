package source;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DB_experiment {
	/***取回实验信息***///=====================================================================
	public String[][] fetch_experiment(){
		Connection con=null;
		Statement stmt=null;
		ResultSet res = null;
		String info[][] = new String[50][8];
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK","sa","131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		
		String sql = "select * from experiment order by NO asc";
		try {
			res= stmt.executeQuery(sql);
			int i = 0 ;
			while(res.next()){
				info[i][0] = res.getString(1).trim();
				info[i][1] = res.getString(2).trim();
				info[i][2] = res.getString(3).trim();
				info[i][3] = res.getString(4).trim();
				info[i][4] = res.getString(5).trim();
				info[i][5] = res.getString(6).trim();
				info[i][6] = res.getString(7).trim();
				info[i][7] = res.getString(8).trim();	
				i++;
			}
			info[i][0] = "over";
			con.close();
			stmt.close();	
			return info;
		
		} catch (SQLException e) {
			info[0][0] = "failed";
			return info;
		}	
	}
	
	/***增加实验室信息***///=====================================================================
	public int insert_experiment(String no,String name,String turnal,String laboratory,String teacher,String time,String status,String limit){
		Connection con=null;
		Statement stmt=null;
		int flag = 1 ;
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK","sa","131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		
		String sql = "insert into experiment values("+no+",'"+name+"',"+turnal+",'"+laboratory+"','"+teacher+"','"+time+"',"+status+","+limit+")";
		try {
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();	
			return flag;
		
		} catch (SQLException e) {
			e.printStackTrace();
			flag = 2;//数据库操作失败
			return flag;
		}	
	}
	
	/***增加实验室信息***///=====================================================================
	public int dalete_experiment(String no,String name,String turnal,String laboratory,String teacher,String time,String status,String limit){
		Connection con=null;
		Statement stmt=null;
		int flag = 1 ;
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;DatabaseName=HXXK","sa","131317");
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);	  
		}
		catch(Exception ex)
		{
			System.out.println("连接失败");
			ex.printStackTrace();
		}
		String sql = "delete from experiment where no="+no+" and name='"+name+"' and turnal="+turnal+" and laboratory='"+laboratory+"' and teacher='"+teacher+"' and time='"+time+"' and status="+status+" and limit="+limit;     
		try {
			stmt.executeUpdate(sql);
			con.close();
			stmt.close();	
			return flag;
		
		} catch (SQLException e) {
			flag = 2;//数据库操作失败
			return flag;
		}	
	}
	
}
