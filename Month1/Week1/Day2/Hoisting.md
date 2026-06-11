# Hoisting

## Execution Context

Execution context is everything in JavaScript. The code gets executed through the execution context. It has two parts:

1. **Memory** (Phase 1)
2. **Code** (Phase 2)

---

## Phase 1 — Memory

In the memory phase, JavaScript maps all the variables and functions before any code runs.

- **Variables** → loaded as `undefined`
- **Functions** → loaded as-is (the full function is stored)

---

## Phase 2 — Code

In the code phase, the actual execution happens. The variables get their real values assigned. When a function is called, a new execution context is created inside the call stack for that function.

---

## What is Hoisting?

Hoisting basically means that even if you call a function or a variable before it has been declared in the program, JavaScript won't crash.

- If you call a **function** before its declaration → it will execute fine, because in the memory phase the whole function was already stored.
- If you try to print a **variable** before its declaration → it will just print `undefined`, because variables are only stored as `undefined` in the memory phase.

### Example

```js
console.log(x);   // undefined (not an error)

decision();        // "Tails" (executes fine)

var x = 5;

function decision() {
    console.log("Tails");
}

console.log(x);   // 5
decision();        // "Tails"
```

---

## Functions Defined with `var`

If a function is defined using `var` — like an arrow function or a function expression assigned to a variable — it is treated as a variable, not a function declaration. So it also ends up being `undefined` in the memory phase.

```js
console.log(greet); // undefined

var greet = function() {
    console.log("Hello");
};
```

The difference is between how you define the function:

| Type | Example | Hoisted as |
|---|---|---|
| Function Declaration | `function foo() {}` | Full function |
| Function Expression (var) | `var foo = function() {}` | `undefined` |
| Arrow Function (var) | `var foo = () => {}` | `undefined` |

---

## `let` and `const` — A Different Case

If a variable is defined with `let` or `const`, they are hoisted but they sit in what is called the **Temporal Dead Zone (TDZ)**. They exist, but JavaScript blocks any access to them until the line of declaration is reached.

So if you try to use them before declaration, you don't get `undefined` — you get a **ReferenceError**:

```
ReferenceError: Cannot access 'x' before initialization
```

"Does not exist" is a different error — that only happens when a variable was never declared anywhere in the program at all.

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

console.log(b); // ReferenceError: b is not defined  ← (b was never declared)
```
