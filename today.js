// // Description: Given an array of transactions, identify transactions that
// //are above $5000, occurred in 2023, and belong to the 'Business' category. Transform this filtered
// // array into an array of strings formatted as "Transaction [id]: $[amount] on [date]

// // const transactions = [
// //     { id: 'T1', category: 'Personal', amount: 3000, date: '2023-01-15' },
// //     { id: 'T2', category: 'Business', amount: 6500, date: '2023-02-20' },
// //     { id: 'T3', category: 'Business', amount: 4500, date: '2023-03-05' },
// //     // more transactions...
// //     ];

// // let salary = 10_00_000 // These underscores are called numeric separators.

// // console.log(transactions.filter((transactions) => transactions.amount > 5000 && transactions.category == 'Business' && transactions.date.slice(0,4))
// //                 .map((y) => `Transaction ${y.id}:${y.amount} on ${y.date}`))

// // const students = [
// //     { name: "Alice", score: 85 },
// //     { name: "Bob", score: 92 },
// //     { name: "Charlie", score: 88 },
// //     { name: "David", score: 79 },
// //     { name: "Eva", score: 95 },
// //   ];

// //   // This should output: "Eva, Bob, Charlie"

// //   console.log(`"${students.sort((a,b) => (b.score-a.score))
// //                 .slice(0,3)
// //                 .map((student)=>student.name).join()}"`)

// // Grade is 80 or more - promote

// // const employees = [
// //     { id: 1, name: "Alice", grade: 78 },
// //     { id: 2, name: "Bob", grade: 85 },
// //     { id: 3, name: "Charlie", grade: 92 },
// //     { id: 4, name: "David", grade: 88 },
// //     { id: 5, name: "Eva", grade: 76 },
// //   ];

// // console.log(employees.sort((a,b)=>(b.grade-a.grade))
// //                     .filter((x) => x.grade >= 80)
// //                     .map((employee) => ({...employee,status: "promoted"})))

// // const players = [
// //   { name: "Alice", skills: ["defense", "speed"] },
// //   { name: "Bob", skills: ["speed", "attack", "strategy"] },
// //   { name: "Charlie", skills: ["speed", "attack"] },
// //   { name: "David", skills: ["strategy", "defense", "speed"] },
// //   { name: "Eva", skills: ["speed", "strategy"] },
// // ];

// // const requiredSkills = ["speed", "strategy"];

// // console.log(players
// //   .filter(player => requiredSkills.every(skill => player.skills.includes(skill)))
// //   .map(player => player.name));

// // const person1 = {
// //     name: {
// //       first: "Alice",
// //       last: "Johnson",
// //     },
// //     age: 28,
// //     favoriteColors: ["blue", "green"],
// //       place: {
// //         city: "Chennai",
// //       },
// //   };

// //   if(person1.place && person1.place.city){
// //     console.log(person1.place)
// //   }else{
// //     console.log("Error")
// //   }

// //   console.log(person1?.place?.city ?? 'unknown')

// // const person = {
// //   name: {
// //     first: "Alice",
// //     last: "Johnson",
// //   },
// //   age: 28,
// //   favoriteColors: ["blue", "green"],
// // };

// // function getPersonInfo(p) {
// //   const {
// //     age: personAge,
// //     name: { first: firstName, last: lastName },
// //     favoriteColors: [primaryColor, secondaryColor],
// //   } = p;
// //   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// // }

// // const getPersonInfo = ({
// //     age: personAge,
// //     name: { first: firstName, last: lastName },
// //     favoriteColors: [primaryColor, secondaryColor],
// //   } )=> `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`
   



// // console.log(getPersonInfo(person));

// // Ex2:
// // function createBook(title, author, year) {
// //     return {
// //       title: title,
// //       author: author,
// //       year: year,
// //       getSummary: function () {
// //         return `${title} by ${author}, published in ${year}.`;
// //       },
// //     };
// //   }

// //   const book = createBook("1984", "George Orwell", 1949);
// //   console.log(book.getSummary(), book);

// // optimize

// // createBook=(title, author, year)=> ({
  
// //     title,
// //     author,
// //     year,
// //     getSummary() {
// //       return `${title} by ${author}, published in ${year}.`;
// //     },
// //   })

// // const book = createBook("1984", "George Orwell", 1949);
// // console.log(book.getSummary(), book);

// // Ex3:
// const users = [
//     {
//       id: 1,
//       name: "Alice",
//       profile: {
//         age: 25,
//         address: {
//           city: "Wonderland",
//           zip: "12345",
//         },
//       },
//     },
//     {
//       id: 2,
//       name: "Bob",
//     },
//   ];
//   function displayUserProfile(userId) {
//     const user = users.find((u) => u.id === userId);
//     const age = user?.profile?.age ?? "Age not unavailable";
//     const city = user?.profile?.address?.city ?? "city not available";
//     console.log(`User ${user.name} is ${age} years old and lives in ${city}.`);
//   }
//   displayUserProfile(1); // Should work
//   displayUserProfile(2); // Throws  error due to missing profile data =. Hence gracefully handle the case
   

//   const library = [
//     {
//       title: "The Great Gatsby",
//       authors: ["F. Scott Fitzgerald"],
//       borrowed: true,
//     },
//     { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
//     { title: "1984", authors: ["George Orwell"], borrowed: true },
//     { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
//     { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true },
//   ];
   
//   // Task 4.1: Determine if all books in the library have been borrowed.
//    getlibrary=( {
//     title: "The Great Gatsby",
//     authors: ["F. Scott Fitzgerald"],
//     borrowed: true,
//   },
//   { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
//   { title: "1984", authors: ["George Orwell"], borrowed: true },
//   { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
//   { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true }) => ({
    
//   })
//   Output
//   "Yes, all books are borrowed"
   
//   // Task 4.2: Determine if there are books in the library written by multiple authors
   
//   Output
//   "No, there are no multiple authors"

// const sum = [1,7,3,10,5].reduce((acc,curr)=>acc.concat(curr),[])
// console.log(sum)

const sum = [1,7,3,10,5].reduce((acc,curr,i)=>acc.concat(curr * i),[])
console.log(sum)

console.log(
    [1,7,3,10,5].reduce((acc,curr)=>{
        return acc > curr ? acc : curr;
    })
)
// ## Create map and filter using reduce method