package com.wooyeon.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Lazy
@Component 
@AllArgsConstructor
@NoArgsConstructor

public class Member {
	private String userId, userName, gender, passwd, email, mobile, birthday;
}
