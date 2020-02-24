package com.wooyeon.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;
import com.wooyeon.web.domains.Member;
import com.wooyeon.web.proxies.Pager;
@Repository
public interface MemberMapper {

	public void insert(Member member);
	public Member selectById(String userId);
	public Member selectUserByIdPw(Member member);
	public String existId(String userId);
	public String count();
	public void update(Member member);
	public void delete(String userId);
	public List<?> select(Pager pager);
	public void create();
	public Member selectUserByName(Member member);
}