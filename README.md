js-winter-assignment-1
======================

Monday Assignment for Week 1: Strings, Variables, Operators, Etc. 

#Week 1: Monday 

### Part 1
- Clone the assignment repo for Monday of Week 1 to your computer
    + `git clone https://github.com/portlandcodeschool/js-winter-assignment-1.git`
- Navigate to that directory (folder) in OSX terminal or your chosen terminal emulator for your OS
    + `cd projectDirectory` 
- Create a branch that is titled with your name (your actual name, **not** literally *your name*)
    + `git checkout -b yourNameHere`
- Create a directory inside of that branch titled with your name (your actual name, **not** literally *your name* 
    + `mkdir yourNameHere` 
- Create a javascript file called 'monAssign1' and then open it in your preferred text editor
    + `touch monAssign1.js`
    
### Part 2
1. Create a variable called `myName` and put your first and last name inside, with a space between. Don't forget what a "string" is and what it needs around it: `"hint hint"`.
2. Create a variable called `currentYear` and store the number 2014 in it. 
3. Create a variable called `birthYear` and store your birth year in it. 
4. Create a variable called `myAge` and make it equal to the age that you will turn this year. Do **not** store a number in this variable. You may only use your other variables and some arithmetic operators to create this value.  
5. Create a variable called `decades`. Set it equal to this: `Math.floor(myAge / 10)`
6. Create a variable called `yearRemainder`. Set it equal to the number of years remaining after you divide `myAge` by 10. This will only require you to use one operator (not counting the assignment operator "`=`"). Again, don't plug in the answer into the variable, use variables, an operator, and the number 10 to make this work. If you are really stuck, click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#.25_.28Modulus.29)
7. Create a variable called birthPlace and set it equal to your birthplace (e.g. "Portland, OR")
8. Create a var called mom with your mom's name in it.
9. Create a var called dad with your dad's name in it. 
10. Use a `console.log` statment to display your name. Make it a sentence, introducing yourself. Where your name should be, use the `myName` variable. 
11. In another `console.log` statement, tell us how old you will turn this year. Make it a sentence but use the variable `myAge` to display your age.
12. In yet another `console.log` statement, tell us how many decades and years old you are. For instance, if you are 21, you would be '2 decades and 1 year old'. Again, for these numerical values, use the variables we already created: `decades` and `year remainder`. 
13. Add a single `console.log` statement In which you tell us some more of your vital stats. Say something like: Here are my vital stats. On three seperate, *indented* lines, list out your birthplace, mother's name, and father's name.

14: Put the following at the end of your file and ponder what is happening. 

    if (myAge > 30) {console.log('Oh my, how the years have passed.')};

### Part 3
- Navigate to the directory where your file is (hint: to check which directory you are currently in, type `pwd`. This stands for 'print working directory')
- Type `node filename.js` (where filename is the name of your file)

Your result (the console output) should look something like:

    Hello, my name is John Doe.
    When celebrate my birthday this year, I will turn 31 years old.
    Another way of saying this is that I will have been alive for 3 decades and 1 year(s)
    The following are some of my other vital stats:
        birthplace: Seattle, WA
        mother's name: Sally
        father's name: Joe   
    Oh my, how the years have passed.      

### For Review and Enlightenment
- [Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FOperators%2FArithmetic_Operators)
- [Assignment Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FOperators%2FAssignment_Operators)
- [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FOperators%2FComparison_Operators)
- [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FOperators%2FLogical_Operators)
- [String Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/String_Operators?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FOperators%2FString_Operators)
