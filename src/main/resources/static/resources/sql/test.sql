create table users (
	userid varchar(30) primary key,
	username varchar(30),
	gender varchar(30),
	passwd varchar(30),
	email varchar(30),
	mobile varchar(30),
	birthday varchar(30)) default character set utf8 collate utf8_general_ci;


create table product (
	prodseq int(30) primary key auto_increment,
	pro_name varchar(30),
	price varchar(30),
	prod_img varchar(30),
	sale_unit varchar(30),
	prod_info varchar(300),
	category varchar(30)) default character set utf8 collate utf8_general_ci;

create table cart (
	cartseq int(30) primary key auto_increment,
	prodseq int(30),
	userid varchar(30),
	foreign key(userid) references users(userid),
	foreign key(prodseq) references product(prodseq)) default character set utf8 collate utf8_general_ci;
	
create table review (
	artseq int(30) primary key auto_increment,
	comments varchar(100),
	update_date varchar(50),
	userid varchar(30),
	foreign key(userid) references users(userid)) default character set utf8 collate utf8_general_ci;