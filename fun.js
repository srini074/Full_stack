// // console.log("😁😁😁")
// // console.log(a) // not defined - error | undefined - value and data type
// // var a =10;
// // // Interpreted language - First step is compilation and second step is execution.
// // // Javascript hoisting

// // var price = 300;

// // function getPrice(){
// //     console.log("The price is old:",price)
// //     var price = 500
// //     console.log("The price is new:",price)
// // }

// // getPrice()

// // // Initializion

// // console.log(b)
// // let b = 10;
// // console.log(b);


// // sayhello(){
// //     return 'Hello'
// // }
// // console.log(typeof(sayhello))

// // function sayHello(){
// //     return function(){
// //         console.log("Hello!");
// //     }
// // }

// // console.log(sayHello())


// // function sayHello(){
// //     return function(){
// //         console.log("Hello!");
// //     };
// // }

// // a=sayHello()
// // a()

// // function sayHello(){
// //     return function(){
// //         console.log("Hello!");
// //     };
// // }

// // sayHello()()

// let codeWord = "Hulk";
 
// function spaceShip(){
//     let question = "Please provide the code word"
 
//     function codeWordCheck(){
//         let password = "Hulk";
//         console.log(question)
//         if(password === codeWord){
//             console.log("Welcome," + password + " the strongest avenger")
//         }else{
//             console.log("Access denied")
//         }
//     }
//     codeWordCheck();
// }
// spaceShip();

// let oranges = [3,6,7,2];
// oranges.push(10);
// console.log(oranges); // [3,6,7,2,10]

// const mangoes = [3,6,7,2];
// mangoes.push(10);
// console.log(mangoes); // [3,6,7,2,10]
// mangoes[0]; // address of the first value + 0
// mangoes[1]; // address of the first value + 1
// mangoes[2]; // address of the first value + 2

// mangoes[0] = 8 // no error 
// mangoes = [6,9] // Error changing the address of the array.

let ch = [5,6,9,10]


// function double(ch){
//     let z=[]
//     for(i of ch){
//         z.push(i*2)
       
//     }
//     return z
// }
// console.log(double(ch))
// console.log(ch)

// const chikus = [5,6,9,10]

// function double(chikus){
//     let z = []
//     for ( let xyz of chikus){
//         z.push(xyz * 2)
//     }
//     return z
// }
// console.log(double(chikus))
// console.log(chikus)

// arr=[5,6,9,10]
// function myownmap(fn,arr){
//     let z = []
    
//             for(let xyz of arr){
//              z.push(fn(xyz))   
//             }
//     console.log(z)
// }
// myownmap((chiku) => chiku * 2,arr)

// const arr=[5,6,9,10]
// function ownmap(fn,arr){
//     let s=[]
//     for(let index in arr){
//         console.log(typeof index)
//         s.push(fn(arr[index],+index));
        

//     }
//     return s
// }
// console.log(ownmap((x,i) => x*2+i,[5,6,9,10]))
// let v=[5,6,9,10].map((x,i)=>x*2 +i);
// console.log(v)

// const avengers = [

//     "Hulk",
  
  
//     "Iron man",
  
  
//     "Black widow",
  
  
//     "Captain america",
  
  
//     "Spider man",
  
  
//     "Thor"  
//   ];

// //   console.log( avengers.map(x => x.length))

// console.log(avengers.filter(x=>x.length >= 10))

const books = [
    { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
    { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
    { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
    { title: "Sapiens", rating: 4.9, genre: "History" },
    { title: "Clean Code", rating: 4.7, genre: "Technology" },
  ];
   
   
   console.log((books.filter(books => books.rating>=4.7)).map(z => z.title).sort())
   
  // Rating 4.7 or more
   
  // Output
  // ['A Brief History of Time', 'Clean Code', 'Sapiens' ]

