var library = [{
title : "JavaScript",
price : 500,
readers : [{
 name : "Person 1",
 count : 300
},
{
 name : "Person 2",
 count : 400
}
],
authorDetails : {
 name : "Raj",
 age : 40
}
},
{
 title : "Nodejs",
 price : 600,
 readers :[],
 authorDetails : {
   name : "Raj",
   age : 40
 }
}
]


//day3 task
library[0].readers[1].count = 700// ques1 :- Update the count of Person 2 inside readers Array in Javascript;
library[0].authorDetails.email="email1@gmail.com"//ques2 :-Insert a new key called email and assign a value email1@gmail.com and email2@gmail.com
library[1].readers[0] = "reader1" //ques3 :- Insert a new reader in the readers array for Nodejs.
library[2]=[{title : "sql",price : "not_specified",}]//ques4 :- Create a New Object in the library for a new Book called SQL.
console.log(typeof library[1].authorDetails.age)//ques5 :- Find the datatype of author age in Nodejs Object
