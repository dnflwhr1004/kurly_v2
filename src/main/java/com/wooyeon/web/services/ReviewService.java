package com.wooyeon.web.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wooyeon.web.domains.Review;
import com.wooyeon.web.mappers.ReviewMapper;

@Service
public class ReviewService implements IService{
 
	@Autowired ReviewMapper reviewMapper;

	@Override
	public void save(Object o) {
		
	}

	@Override
	public void edit(Object o) {
		
	}

	@Override
	public void remove(Object o) {
		
	}

	@Override
	public String count(Object o) {
		return null;
	}

	@Override
	public Object detail(Object o) {
		return null;
	}

	@Override
	public List<?> list(Object o) {return reviewMapper.select((Review)o);}
}
