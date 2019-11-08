create database collegequera;

create table collegequera.admin(
    name varchar(100) NOT NULL,
    mail varchar(100) NOT NULL UNIQUE,
    password varchar(20) NOT NULL
);

insert into collegequera.admin value('Admin','admin@college.com','123');

create table collegequera.member(
    memberid int AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    mail varchar(100) NOT NULL UNIQUE,
    pass varchar(100) NOT NULL,
    type varchar(100) NOT NULL,    
    PRIMARY KEY(memberid)
);

create table collegequera.question(
    qid int AUTO_INCREMENT,
    qus varchar(1000) NOT NULL,
    qdate timestamp default CURRENT_TIMESTAMP,
    student int NOT NULL,
    PRIMARY KEY(qid)
);

create table collegequera.answer(
    aid int AUTO_INCREMENT,
    ans varchar(1000) NOT NULL,
    ansdate timestamp default CURRENT_TIMESTAMP,
    question int NOT NULL,
    faculty int NOT NULL,
    PRIMARY KEY(aid)
);