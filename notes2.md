## Temporal dead zone - TDZ

- In case of let / const the variable is stored in temporal dead zone if we try to access them before initialization. But in case of var if we try to access it before declaration or initialization it says undefined. But  in case of let and const if we do the same thing we get reference error cannot access the variable before initialization.

- To break out of tdz we need to declare variables before accessing them in let and const case

## Lexical scope

- If function does not have variable declaration inside it will look for outer scope and if there is a declared variable inside then the function will give preference for it. 

## Variable shadowing in javascript

- In case of shadowing a variable when we declare the same variable two times one inside the function and the other outside the function then the inside variable value will shadow the outer one. 

![shadowing](image-3.png)

![example of shadowing](image-4.png)

- Here var has a functional scope it lives and dies inside the function so outside the function after closing the function when we try to access the price it will not take the value assigned inside the function.

## Example 2

![Example2](image-6.png)

- In case of example 2 var has functional scope so it will be accessible unti the function is closed.
// GeeksforGeeks
// GeeksforGeeks


## Example 3

![example 3](image-7.png)

- In case of example 3 let has block scope so it can't be accessed after if block.


## Only way to print geeks for the same example

![only way to print geeks](image-8.png)

## Redeclaration

- When we want to redeclare we need to do it in same scope


## Function is a first class citizen - Higher order function

- A function taking a function as a argument is called a higher order function.

![example](image-9.png)

![imp](image-10.png)

## Anonymous function

![Anonymous- no name for function](image-11.png)

![substitution](image-12.png)

![rules ](image-13.png)

![rules](image-14.png)


## Lexical scope and closure

![lexical scope](image-15.png)

- Lexical scope + scope is called as closure.

![closure](image-16.png)

![child's closure](image-17.png)

## Example 2

![example2](image-18.png)

![exampl2again](image-19.png)

![new](image-20.png)

## Google chrome's cool features 

![ex](image-21.png)

## let reassignment

- We can't do reassignment in case of const whereas we can do it in let case. var can have lexical scope but it can't be accessed outside of function.


![let,const](image-22.png)

![var](image-23.png)

## Array imp method

![alt text](image-24.png)

- reverse mutates/modifies the original array ( changes the original array)

- Copy by reference 
![alt text](image-25.png)


- copy by value use spreader operator
![copy by value use spreader operator](image-26.png)
## Immutation

- let allows mutation , const does not allow mutation so if i declare a variable x using const and later write some 1000 lines of code and later console.log(x) the x value will be the same.

## Create a table(methods,mutable or not) of array methods which allows mutation of array vs which don't allow mutation of array



## Why do we have to use immutable methods?

- Readability
- Maintainability
- Extensibility
- Testability
- Performance

## Slicing of array

- Slice is immutable array method
- join is immutable
- split is immutable
- All strings are immutable
![slice](image-27.png)

![join](image-28.png)

![join2](image-29.png)

![join3](image-30.png)

## First class citizens - functions

- A function can be passed as an argument, it can return a function and it can be assigned to a variable.
- Basically it says that function can be treated as a value.

## map()

- map is an inbuilt higher order function which can take arrow function or function as an argument.


## Do without using map()
```js
let ch = [5,6,9,10]


function double(ch){
    let z=[]
    for(i of ch){
        z.push(i*2)
       
    }
    return z
}
console.log(double(ch))
console.log(ch)
```

```js
const chikus = [5,6,9,10]

function double(chikus){
    let z = []
    for ( let xyz of chikus){
        z.push(xyz * 2)
    }
    return z
}
console.log(double(chikus))
console.log(chikus)
```
```js

[5,6,9,10].map((chiku) => chiku * 2)

```

![map](image-31.png)

## Write your own map function
```js
arr=[5,6,9,10]
function myownmap(fn,arr){
    let z = []
    
            for(let xyz of arr){
             z.push(fn(xyz))   
            }
    console.log(z)
}
myownmap((chiku) => chiku * 2,arr)
```

```js
const arr=[5,6,9,10]
function ownmap(fn,arr){
    let s=[]
    for(let i =0; i <ch.length; i++){
        let g;
        g = fn(arr[i],i);
        s.push(g)

    }
    return s
}
console.log(ownmap((x,i) => x*2+i,[5,6,9,10]))
// let v=[5,6,9,10].map((x,i)=>x*2 +i);
// console.log(v)
```

![ex2](image-32.png)
![ex2.1](image-33.png)

## Usage of map for tranforming data types

![datatypes](image-34.png)

```js
const avengers = [

    "Hulk",
  
  
    "Iron man",
  
  
    "Black widow",
  
  
    "Captain america",
  
  
    "Spider man",
  
  
    "Thor"  
  ];

  console.log( avengers.map(x => x.length))
  ```

  ## Filter ( in the below image actually returns 6 and 7)

  ![filter](image-35.png)

- filter filtering marks greater than or equal to 40
- filter is a higher order function
  ![filter filtering marks greater than or equal to 40](image-36.png)

  ```js
  
const avengers = [

    "Hulk",
  
  
    "Iron man",
  
  
    "Black widow",
  
  
    "Captain america",
  
  
    "Spider man",
  
  
    "Thor"  
  ];

//   console.log( avengers.map(x => x.length))

console.log(avengers.filter(x=>x.length >= 10))
```

```js

const books = [
    { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
    { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
    { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
    { title: "Sapiens", rating: 4.9, genre: "History" },
    { title: "Clean Code", rating: 4.7, genre: "Technology" },
  ];
   
   
   console.log((books.filter(books => books.rating>=4.7)).map(z => z.title))
   ```

   ## Question

   ![q](image-37.png)

   - How long i can continue the pattern


   ## Immutable Array Methods
 
| Method        | Description                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------- |
| map()         | Creates a new array with the results of calling a provided function on every element in the calling array.      |
| filter()      | Creates a new array with all elements that pass the test implemented by the provided function.                  |
| slice()       | Returns a shallow copy of a portion of an array into a new array object.                                        |
| concat()      | Merges two or more arrays and returns a new array.                                                              |
| reduce()      | Applies a function against an accumulator and each element in the array to reduce it to a single value.         |
| every()       | Tests whether all elements in the array pass the test implemented by the provided function.                     |
| some()        | Tests whether at least one element in the array passes the test implemented by the provided function.           |
| find()        | Returns the value of the first element in the array that satisfies the provided testing function.               |
| findIndex()   | Returns the index of the first element in the array that satisfies the provided testing function.               |
| indexOf()     | Returns the first index at which a given element can be found in the array, or -1 if it is not present.         |
| lastIndexOf() | Returns the last index at which a given element can be found in the array, or -1 if it is not present.          |
| includes()    | Determines whether an array includes a certain value among its entries, returning true or false as appropriate. |
| toString()    | Returns a string representing the specified array and its elements.                                             |
| join()        | Joins all elements of an array into a string.                                                                   |
---------------------------------------------------------------------------------------