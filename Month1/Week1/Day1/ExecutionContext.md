# Day 1 — Execution Context

---

## JavaScript is a Synchronous, Single Threaded Language

What does that mean?

Simply means — **JavaScript can only run one command at a time, in a specific order** decided by the JavaScript engine. One by one. That's it.

---

## Everything in JavaScript Happens Inside the Execution Context

Whenever we write any JavaScript program and we run it — it runs **inside** the execution context. Always.

So what is this execution context?

Think of it like a **big box**, and that box is divided into **two columns**:

```
┌─────────────────────────────────────────────────────────┐
│                   EXECUTION CONTEXT                     │
├──────────────────────────┬──────────────────────────────┤
│         MEMORY           │            CODE              │
│   (Environment Variable) │      (Thread of Execution)   │
│                          │                              │
│  All variables and       │  Code gets executed          │
│  functions get loaded    │  line by line                │
│  here first              │                              │
└──────────────────────────┴──────────────────────────────┘
```

---

## The Two Phases — How JavaScript Actually Runs

### Phase 1 — Memory

- JavaScript first goes through the **entire code** and loads everything into memory.
- **Variables** → stored as `undefined`
- **Function declarations** → stored as the **whole function** (the entire code of the function gets copied)
- Exception: Arrow functions and functions defined using `var`, `let`, `const` → they are treated like variables, so they get stored as `undefined` too.

```
MEMORY PHASE — What gets stored:

  var name = "Dhruv"         →   name: undefined
  var age = 21               →   age: undefined
  function greet() { ... }   →   greet: function greet() { ... }  ← whole function
```

### Phase 2 — Code

- Now JavaScript goes through the code **again**, line by line.
- This time it actually **executes** the code.
- Variables get their real values now.
- Functions get called and run.

---

## Special Property — Hoisting

This is where things get interesting.

In JavaScript, if you **call a variable or function before declaring it** — JavaScript does NOT give an error.

Why?

Because **Phase 1 (Memory) already ran.** By the time Phase 2 (Code) starts executing line by line, everything is already sitting in memory.

So:

```javascript
console.log(name);   // called BEFORE declaring
var name = "Dhruv";  // declared LATER
```

What happens?

```
Phase 1 (Memory):  name → undefined   (stored)
Phase 2 (Code):    console.log(name)  → prints: undefined  (no error!)
                   name = "Dhruv"     → now name has its real value
```

And for functions:

```javascript
greet();              // called BEFORE declaring

function greet() {
  console.log("Hello");
}
```

```
Phase 1 (Memory):  greet → whole function stored
Phase 2 (Code):    greet() → runs perfectly  (no error!)
```

**This behavior is called Hoisting.**
Variables get hoisted as `undefined`, function declarations get hoisted as the full function.

---

> **Bottom line:** JavaScript runs in two phases. First it loads, then it executes. That's why calling things before declaring them doesn't break everything.
