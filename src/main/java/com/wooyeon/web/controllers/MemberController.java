package com.wooyeon.web.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wooyeon.web.domains.Member;
import com.wooyeon.web.enums.Messenger;
import com.wooyeon.web.mappers.MemberMapper;
import com.wooyeon.web.proxies.Pager;
import com.wooyeon.web.services.MemberService;
import com.wooyeon.web.util.Printer;

@RestController
@RequestMapping("/members")
public class MemberController {

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class); 
	@Autowired Map<String, Object> map;
	@Autowired Member member;
	@Autowired Printer printer;
	@Autowired MemberService memberService;
	@Autowired Pager pager;
	
	@PostMapping("/")
	public Messenger join(@RequestBody Member param) {
		printer.accept("join 들어옴:" +param.toString());
		memberService.save(param);
		return Messenger.SUCCESS;
	}
	
	
	@PutMapping("/{id}")
	public Messenger updateMember(@PathVariable String id, @RequestBody Member param) {
		
		map.clear();
		map.put("msg", "SUCCESS");
		return Messenger.SUCCESS;
	}
	
	@DeleteMapping("/{id}")
	public Messenger delete(@PathVariable String userId, @RequestBody Member param) {
		memberService.remove(param);
		return Messenger.SUCCESS;
	}
	
	@PostMapping("/login")
	public Member login(@RequestBody Member param) {
		return memberService.login(param);
	}
	
	/*
	@PostMapping("/selectNIP")
	public Member selectNIP(@RequestBody Member member) {
		System.out.println("controller"+member.getUserId());
		return memberService.selectNIP(member);
	}
	
	@GetMapping("/{userId}/exist")
	public Map<?, ?> existId(@PathVariable String userId) {
		Function<String, Integer> p = o-> memberMapper.existId(userId);
		map.clear();
		printer.accept("중복체크카운트:"+ p.apply(userId));
		map.put("msg", (p.apply(userId)==0) ? "SUCCESS" : "FAIL");
		return map;
	}
	
	
	@PostMapping("/login")
	public Member login(@RequestBody Member param) {
		Function<Member, Member> m = t->memberMapper.selectUserByIdPw(param);
		System.out.println("000000"+param);
		return m.apply(param);
	}

	
	@GetMapping("/search")
	public Member searchMemberById(@PathVariable String userId, @RequestBody Member param) {
		Function<Member, Member> f= t-> memberMapper.selectUserByIdPw(param);
		return f.apply(param);
	}
	*/

	
}