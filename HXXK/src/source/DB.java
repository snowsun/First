package source;
import java.sql.*;
public class DB {
	
	/***登录***///=========================================================================
	public int login(String username ,String password) throws SQLException{
		Connection con=null;
		Statement stmt=null;
		int success=0;
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
		String sql = "select * from baseInfo where id='"+username+"' and password='"+password+"'";
		ResultSet res= stmt.executeQuery(sql);
		while(res.next()){
			success=1;
		}
		con.close();
		stmt.close();
		return success;
	}
	
	/***加入学生信息***///=====================================================================
	public int insertNewInfo(String info[][]){
		Connection con=null;
		Statement stmt=null;
		ResultSet res=null;
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
		String checkSql="",sql="",id="",psw="",name="";	
		int i = 0 ;
		try {
			for(;i<200;i++){
				if(!info[i][0].equals("over")){
					id = info[i][0];
					psw = info[i][0];
					name = info[i][1];
					checkSql = "select * from baseInfo where id='"+id+"'";
					res= stmt.executeQuery(checkSql);
					if(!res.next()){
						sql = "insert into baseInfo values('"+id+"','"+psw+"','"+name+"',2)";
						stmt.executeUpdate(sql);
					}
				}
				else
					break;
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
	public static void main(String args[]){
		
	}
}
