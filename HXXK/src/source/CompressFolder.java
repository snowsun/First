package source;
import java.util.zip.*;
import java.io.*;
public class CompressFolder {
	public void zip(String folderPath , String outputFile) throws IOException
    {
	  File file = new File(folderPath);
	  File files[] = null;
	  if(!file.isDirectory()){
		  return;
	  }
	  String fileList[] = file.list();
	  files = new File[fileList.length];
	  for(int i =0 ; i<fileList.length ; i++){
		  files[i] = new File(folderPath+"\\"+fileList[i]);
	  }
	  
	 int BUFF_SIZE=1024;
     //如果files长度为0，zout.close()方法会抛异常： ZIP file must have at least one entry
     if(files.length == 0)
     {
    	 return;
     }
        FileOutputStream out = null;
        BufferedOutputStream buffOut = null;
        ZipOutputStream zout = null;
        try
        {
            out = new FileOutputStream(outputFile);
            buffOut = new BufferedOutputStream(out);
            zout = new ZipOutputStream(buffOut);
            for (int i = 0; i < files.length; i++)
            {
                InputStream in = null;
                BufferedInputStream buffIn = null;
                try
                {
                    in = new FileInputStream(files[i]);
                    buffIn = new BufferedInputStream(in, BUFF_SIZE);
                    ZipEntry zipEntry = new ZipEntry(files[i].getName());
                    zout.putNextEntry(zipEntry);
                    int len = 0;
                    byte data[] = new byte[BUFF_SIZE];
                    while ((len = buffIn.read(data)) != -1)
                    {
                        zout.write(data, 0, len);
                    }
                }
                finally
                {
                    try
                    {
                        zout.closeEntry();
                    }
                    catch (IOException e)
                    {
           //          LogUtils.exception(e, "Close zip file entry failed");
                    }
                    buffIn.close();
                    in.close();
                }
            }
        }
        finally
        {
            zout.close();
            buffOut.close();
            out.close();;
        }
    }
	
	public static void main(String args[]){
		try {
			new CompressFolder().zip("C:\\Users\\Administrator\\Desktop\\test", "C:\\Users\\Administrator\\Desktop\\test2.zip");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
