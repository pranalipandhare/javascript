// javascript is high level, object oriented, multi-paradigm programming lanuguage
// javascript is a high level prototype-based object oriented multi-paradigm interpreted or just-in-time compiled dynamic single-threaded garbage collected programming language with first class functions and a non-blocking event loop concurrency model

// High Level: Developer does not have to worry, everthing happens automatically

//(In the level: developer has to manage resources manually)

// Garbage collection: javascript automatically remove all unused objects

// Interpreted or just-in-time compiled: In the code abstraction over 0s and 1s & converting to machine code = compiling, in the js this happens inside the js engine

// Paradigm: An approach and mindset of structuring code, which will direct your coding style and technique
// Three paradigm : Precedural programming, Object-oriented programming, Functional programming

// Prototype-based object-oriented: Our array inherits methods from prototype

// First class function: In a language first class functions, functions are simply treated as variables. We can pass them into other function and return them from function
// passing a function into another function as an argument: first-class functions!

// Dynamic()dynamically-typed language): No data type definations. Types becomes known at runtime
// Data type of variable is automatically changed

/* Single-threaded & Single threaded
- Concurrency model: How the js engine handles engine multiple tasks happening at the same time
- Why do we need that?-> js runs in one single thread, so it can only do one thing at a time
- So what about a long-running task?-> Sounds like it would block the single thread however, we want non-blocking behavior!
- How do we achieve that?-> By using an event loop: takes long running tasks, executes them in the background and puts them back in the main thread once they are finished
*/

//// The javascript engine and runtime  ////

// JS engine: Program that executes js code (most known google's engine is V8 engine)

// JS engine: any js engine contains two components 'call stack'  and 'heap'
// call stack: Where our code is executed & execution context
// Heap: Where objects are stored & object in memory

// Compilation: Entire code is converted into machine code at once, adn written to a binary file that can be executed by a computer
// source code -(compilation)-> Portable file(machine code) -(execution)-> Program running

// Interpretation: Interpreter runs through the source code and executes it line by line
// source code --(execution line by line)--> Program running
// (when execution line by line: code still needs to be converted to machine code)
// Interpreter language is much slower than compiler language
// JavaScript is the Interpreter language

// Modern javascript engine uses mix of interpretation and compilation that is just-in-time(JIT) compilation

// Just in time compilation: Entire code is converted into machine code at once then executed immediately
// Source code -(compilation)-> Machine code -(execution)-> Program running

// When code enters the js engine then first step is parsing(read the code) and the code is pasred into the AST data structure
// AST(abstract syntax tree) split the code into the pieces and saving the all pieces into the tree struture way(or also check syntaxt error)
// After the parsing code will be compilation using just-in-time compilation and then execution (excution happens in call stack)
// Optimization done during the compilation and execution and these can be done multiple times.

// Runtime in the browser: container including all the things that we need to use javaScript(in this case in the browser)
// part of any js runtime have a js engine(call stack and heap)
// Web APIs are functionalities provided to the js engine accessible to window object
// Callback Queue: this is data structure that contains all call back functions that are ready to be executed
// example of callback function: onClick, timer, data

//// Execution contexts and the Call stack ////
// Execution context: Environment in which of javascript is executed. Stores all the necessary information for some code to be executed.
// Exactly one global execution context(EC): Default context created for code that is not inside any function (top level)
// One execution context per function: For each function call, a new execution context is created
/* Execution context:
1. Creation of global execution context(for top level code)
2. Execution of top-level code(inside global EC)
3. Execution of functions and waiting for callbacks
*/

/* What's inside execution context?: 
1] variable environment:  let, const, var declaration; functions; arguments object
2] Scope chain
3] this keyword 
*/

///// Scope and The Scope Chain /////
// Scoping: How our program's variable are organized and accessed. " Where do variables live?"
// Lexical scoping: Scoping is controlled by placement of functions and blocks in the code
// Scope: Space or environment in which a certain variable is declared(variable environment in case of functions). There is global scope, function scope and block scope
// Scope of variable: Region of our code where a certain variable can be accessed

/* Three different types of scope:
1. Global scope: Outside of any function or block; Variable declared in global scope are accessible everywhere
2. Function Scope: Variables are accessible only inside function NOT outside; Also called local scope
3. Block Scope: Variables are accessible only inside block(block scoped); However, this only applies to 'let
 and 'const' variables; Functions are also block scoped (only in strict mode)
*/
// Every scope always has access to all the variables from all its outer scopes. This is the scope chain
// When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's ;ooking for. This is called variable lookup
// The scope chain is a one-way street: a scope will never, ever have access to the variable of an inner scope
// The scope chain in a certain is equal to adding together all the variable environments of the all parent scopes

/// Scope Chain vs Call Stack ///
// Scope Chain: Order in which functinos are written in the code
// Call Stack: Order in which function were called

///// Scoping and Practice /////

//// Hoisting in JS /////
// Hoisting: Makes some types of variable accessible/usable in the code they are actually declared. "Variable lifted to the top of their scope"
// Before execution: code is scanned for variable declarations and each variable a new proporty is created in the variable environment object
