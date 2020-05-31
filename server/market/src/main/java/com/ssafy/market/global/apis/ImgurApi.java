package com.ssafy.market.global.apis;


import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

@Service
public class ImgurApi {

    public static final String CLIENT_ID = "2d1537da8393cd6";

    public static Executor uploadExecutor = Executors.newCachedThreadPool();

    public static String uploadimgtest(String base64) throws IOException {
        Connection.Response response = uploadSync(base64);
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(response.body());
        JsonObject properties = element.getAsJsonObject().get("data").getAsJsonObject();
        String url = String.valueOf(properties.get("link"));
        url = url.replace("\"","");
        return url;
    }



    public static Connection.Response uploadSync(String base64) throws IOException {
        Connection connection = Jsoup.connect("https://api.imgur.com/3/image");
        connection.timeout(10000).userAgent("InventiveImgurUploader").ignoreContentType(true).ignoreHttpErrors(true).method(Connection.Method.POST);
        connection.header("Authorization", "Client-ID " + CLIENT_ID);
        connection.header("Content-Type", "application/x-www-form-urlencoded");
        connection.data("image", base64);
        return connection.execute();
    }
}