# green-Earth
1 ..What is the difference between var, let, and const?
ANS:  var, let, const

var --- function-scoped, re-declare করা যায়।

let - block-scoped, re-declare করা যায় না, কিন্তু re-assign করা যায়।

const - block-scoped, re-declare বা re-assign কোনোটাই করা যায় না।

2..What is the difference between map(), forEach(), and filter()?

Ans: map(), forEach(), filter()

map() -- নতুন array রিটার্ন করে (value transform করতে)।

forEach() - কিছু রিটার্ন করে না, শুধু loop করে।

filter() - শর্ত মিলে এমন elements নিয়ে নতুন array রিটার্ন করে।

3..What are arrow functions in ES6?
Ans : Arrow Functions (ES6)
Short syntax for functions → () => {}
this binding করে না (lexical this ব্যবহার করে)।

4..How does destructuring assignment work in ES6?
Ans: Array/ Object থেকে মান সরাসরি variable এ নেওয়া।
const [a, b] = [1, 2];  
const {name, age} = person;

5..Explain template literals in ES6. How are they different from string concatenation?
Ans: Template Literals Backticks (`) ব্যবহার করে।

${variable} দিয়ে expression/interpolation

Multiline string ➡️ Concatenation (+) এর চাইতে readable ও flexible।
