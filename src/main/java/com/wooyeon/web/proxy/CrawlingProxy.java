package com.wooyeon.web.proxy;

import java.util.ArrayList;
import java.util.HashMap;
import org.jsoup.*;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component("crawler") @Lazy
public class CrawlingProxy extends Proxy{
	@Autowired Inventory<HashMap<String, String>> inventory;
	
	public ArrayList<HashMap<String, String>> wantedCrawl()  {
		inventory.clear();	
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String wanted = "https://www.wanted.co.kr/wdlist/518/873?country=kr&job_sort=job.latest_order&years=-1&locations=all";
			Connection.Response homePage;
			homePage = Jsoup.connect(wanted)
					.method(Connection.Method.GET)
					.userAgent(USER_AGENT)
					.execute();
			Document temp = homePage.parse();
			Elements element = temp.select("div._1yHloYOs_bDD0E-s121Oaa");//전체적인부분
			Elements topbar = element.select("div._3Sw_1bFQf9kh5IJl5lTcvJ");//탑 바 
			Elements mini = topbar.select("ul.eIgePrbQoQgjPqTq-IO-X");// 탑바에있는 ul 
			Elements mmini1 = mini.select("li.gray _325QGWdYf8MhT8vQQfvkA7");//ul에 있는 li 
			Elements a = mmini1.select("a");
			Elements b = mmini1.select("a");
			Elements mmini2 = mini.select("li.black _325QGWdYf8MhT8vQQfvkA7");
			Elements c = mmini2.select("a");
			Elements develop = topbar.select("div._2h5Qtv_8mK2LOH-yR3FTRs");
			Elements develop1 = develop.select("div._2Z_oyiwBQOVyqchnDunHh8 span.P__4XM_mbNn2CH6kDyUUJ visible-xs");
			Elements develop2 = develop.select("");
			Elements develop3 = develop.select("");
			Elements develop4 = develop.select("");
			Elements develop5 = develop.select("");
			Elements develop6 = develop.select("");
			Elements develop7 = develop.select("");
			
			HashMap<String, String> map = null;
			for(int i = 0; i < topbar.size(); i++) {
				map = new HashMap<>();
				map.put("topbar", topbar.get(i).text());
				map.put("mini", mini.get(i).text());
				map.put("mmini1", mmini1.get(i).text());
				inventory.add(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("---------- 크롤링 결과 ------------");
		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
	
	
}
