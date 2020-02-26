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
public class Product {

	private String prodSeq, prodName, price, prodImg, saleUnit, prodInfo, category, recommand;
}