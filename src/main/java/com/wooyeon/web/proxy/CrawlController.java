package com.wooyeon.web.proxy;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/crawls")
public class CrawlController {
	@Autowired CrawlingProxy crawlpxy;
	
	@GetMapping() 
	public ArrayList<HashMap<String, String>> wanted() {
		System.out.println("원티드");
		return crawlpxy.wantedCrawl();
	}
}
