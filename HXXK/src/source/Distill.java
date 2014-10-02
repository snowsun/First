package source;
import jxl.Sheet; 
import jxl.Workbook; 
import jxl.read.biff.BiffException;

import java.io.File;
import java.io.IOException;

public class Distill {
	public String[][] distill(File file) throws BiffException, IOException{
		
		String a[][] = new String[1][1];
		a[0][0] = "";
		if(!file.exists()){
			a[0][0] = "fileNotExist";
			return a;
		}
		Workbook  book  =  Workbook.getWorkbook(file);  
		Sheet sheet = book.getSheet(0); 
		int rows = sheet.getRows(); 
		int cols = sheet.getColumns(); 
		if(rows==0 || cols<2){
			a[0][0] = "fileWrong";
			return a;
		}
		String info[][] = new String[200][2];
		info[0][0]="0";
		int count=0;
		for(int i = 0 ; i<rows ; i++){
			String id = sheet.getCell(0, i).getContents().trim();
			String name = sheet.getCell(1, i).getContents().trim();
			if(id.matches("[0-9]+")&&name.length()>0){
				info[count][0] = id;
				info[count][1] = name;
				count++;
			}
			else{
				a[0][0] = "fileWrong";
				return a;
			}
		}
		info[count][0] = "over";
		return info;
		
	}
	public static void main(String args[]){}
	
}



