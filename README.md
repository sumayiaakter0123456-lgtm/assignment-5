# JavaScript Questions


### 1. What is the difference between var, let, and const?
1. **var**
- It is function-scoped.
- var is hoisted,meaning the declaration moves to the top of the function but initialization doesn't.
- var can be reassigned and redeclared.
2. **let**
- It is block-scoped(inside {} only).
- let is hoisted but not accessible before declaration(temporal dead zone).
- let can be reassigned but cannot be redeclared in the same block.
3. **const**
- It is block-scoped.
- const is hoisted but not accessible before declaration(temporal dead zone). 
- const cannot be reassigned or redeclared.

### 2. What is the spread operator (...)?
The spread operator(...) is a feature introduced in ES6(JavaScript) that is used to expand elements of an array or object into individual elements.

### 3. What is the difference between map(), filter(), and forEach()?
1. **map()**
- Used to transform each element of an array.
- Always returns a new array with modified values.
- The original array stays unchanged.
2. **filter()**
- Used to select elements based an a condition.
- Returns a new array containing only the elements that pass the condition.
3. **forEach()**
- Used to loop through an array.
- Does not return a new array.
- Mostly used for side effeccts(logging,updating values etc).

### 4. What is an arrow function?
An arrow function is a shorter syntax for writing functions in JavaScript, introduced in ES6, using the => arrow notation.

### 5. What are template literals?
Template literals are a feature introduced in ES6 that allow strings to be written using backticks(`) and enable embedding variables or expressions inside the string using ${}.
