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


/*solution for
3A. Print the price of Javascript book in console.
3B. Print the age of Nodejs Author in console.
3C. Print how many readers for javascript in console.
3D. Print the count value of Person 2 in console.
*/

//day2 task
console.log(library[0].price) //ques1 :-price of javascript book
console.log(library[1].authorDetails.age) //ques2 :-age of nodejs author
console.log(library[0].readers.length) //ques3 :- number of readers in javascript in console
console.log(library[0].readers[1].count) //ques4 :- count value of person 2
