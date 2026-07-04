# Day 3: JavaScript Core Concepts

## 1. How Functions Work in JS (Execution Context & Call Stack)

As we already know about the Execution Context in JS, we will understand functions with it.

* JS functions get loaded as a whole during the memory phase in the execution context.
* To execute a function, we need a brand new execution context.
* All of this happens in the Call Stack.
* We get the GEC (Global Execution Context) at the base. When we execute a function, a new execution context gets **pushed** onto the stack. Once it is done executing, it gets **popped** off.

**Example:**
```javascript
b();
a();

var x = 10;
console.log(x); // Logs 10

function a() {
  var x = 100;
  console.log(x); // Logs 100
}

function b() {
  var x = 1000;
  console.log(x); // Logs 1000
}
```
**Output:**
```
1000
100
10
```
*Because every function has its own execution context, values are preserved and not mixed.*

## 2. The `this` Keyword

* Even if we don't write anything and execute an empty JS file, the GEC is created and pushed onto the stack. This means the engine still executes something.
* Every JS engine executes the GEC even if empty, and what they get is `window` (the global object in browsers).
* It contains all the variables and functions of the global scope.
* For the global scope: `this === window`
* `this` is basically tied to the context. If you call it globally, it points to the global object. 

## 3. `undefined` vs `not defined`

* **`undefined`**: Gets assigned to variables (created with `var`) during the memory creation phase. JS acknowledges that the variable is declared in memory. During the code execution phase, it might be assigned a real value. If not, it remains `undefined`.
* **`not defined`**: Means the variable was never declared in memory. Trying to access it will throw a `ReferenceError` because the JS engine has no knowledge of it at all.

---

## 🔍 Instructor Corrections & Clarifications

You asked me to correct anything that was wrong. Your notes are fantastic, but here are a few small technical tweaks to make your mental model 100% accurate:

1. **"popped in" vs "pushed onto"**: 
   In your notes, you wrote that an execution context gets "popped in" the stack. The correct data structure terminology is **pushed onto** the stack when a function is called, and **popped off** the stack when the function finishes execution. 

2. **Is `undefined` a keyword?**
   You wrote that `undefined` is a "special keyword". In JavaScript, it is technically a **primitive value** (a global property), not a reserved keyword like `if`, `var`, or `function`. However, functionally you treat it like a special empty value, so your intuition is completely right.

3. **The `this` keyword in functions**:
   You noted: *"if called in function it will have their values"*.
   It's important to know that how `this` behaves inside a normal function depends entirely on **how the function is called**, not where it is written! 
   * In a normal script, calling a standalone function (`a()`) means `this` will *still* point to the global `window` object. 
   * In Strict Mode (`"use strict"`), `this` inside a standalone function is `undefined`.
   * Only when a function is called as an object's method (e.g., `user.login()`) does `this` point to something else (the `user` object).

4. **Function Hoisting**:
   The code example you wrote beautifully demonstrates **hoisting**. You were able to call `b()` and `a()` on the first two lines, *before* they were defined further down! This works exactly because, as you noted in section 1, function declarations get loaded entirely into memory during the creation phase before a single line of code is executed.
