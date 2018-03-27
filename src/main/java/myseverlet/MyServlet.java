package myseverlet;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(name = "MyServlet")
public class MyServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            request.setCharacterEncoding("UTF-8");
            DiskFileItemFactory factory = new DiskFileItemFactory();
            ServletFileUpload upload = new ServletFileUpload(factory);
            List<FileItem> items = upload.parseRequest(request);

            String fileName="";
            File savefile;
            String apkPath = "E:/temp/";

            for (FileItem item : items) {
                if (!item.isFormField()) {
                    fileName = apkPath + item.getName();
                    System.out.println("fileName = " + fileName);
                    savefile = new File(fileName);
                    item.write(savefile);
                }
            }
        }catch(Exception e){
            e.printStackTrace();
        }

        PrintWriter out = null;
        try {
            out = response.getWriter();
        }catch (Exception e){
            e.printStackTrace();
        }
        out.println("upload successed!");

}


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request,response);
    }
}
