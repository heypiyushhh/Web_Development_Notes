# 🚀 JavaScript Frontend Interview Handbook
### Complete Core JavaScript Guide for Frontend Interviews (Hinglish)

> Yeh handbook **sirf Core JavaScript (Frontend)** cover karta hai — koi React, Node.js, Express, Database ya DevOps nahi. Beginner se Advanced level tak, interview-ready notes ke saath.

---

## 📑 Table of Contents

1. [JavaScript Fundamentals](#section-1-javascript-fundamentals)
2. [Variables (var, let, const)](#section-2-variables)
3. [Data Types](#section-3-data-types)
4. [Operators](#section-4-operators)
5. [Type Conversion](#section-5-type-conversion)
6. [Functions](#section-6-functions)
7. [Scope & Closures](#section-7-scope--closures)
8. [Hoisting](#section-8-hoisting)
9. [`this` Keyword](#section-9-this-keyword)
10. [Arrays](#section-10-arrays)
11. [Objects](#section-11-objects)
12. [DOM Mastery](#section-12-dom-mastery)
13. [Events](#section-13-events)
14. [Advanced JavaScript (Execution Context, Event Loop)](#section-14-advanced-javascript)
15. [Async JavaScript](#section-15-async-javascript)
16. [ES6+](#section-16-es6)
17. [OOP in JavaScript](#section-17-oop-in-javascript)
18. [Prototypes](#section-18-prototypes)
19. [Browser Storage](#section-19-browser-storage)
20. [Performance Optimization](#section-20-performance-optimization)
21. [Frontend Interview Preparation (Question Banks)](#section-21-interview-preparation)
22. [JavaScript Coding Interview Problems](#section-22-coding-interview)
23. [Final Revision — Roadmap, Cheat Sheets, Plans](#section-23-final-revision)

---

## 🗺️ JavaScript Roadmap (Quick View)

```mermaid
graph LR
A[JS Basics] --> B[Variables & Data Types]
B --> C[Functions & Scope]
C --> D[Closures & this]
D --> E[Arrays & Objects]
E --> F[DOM & Events]
F --> G[Execution Context & Event Loop]
G --> H[Async JS - Promises/Async-Await]
H --> I[ES6+ Features]
I --> J[OOP & Prototypes]
J --> K[Performance Optimization]
K --> L[Interview Ready 🎯]
```

**Kaise use karein yeh handbook:**
- Agar fresher ho → Section 1 se shuru karo, order follow karo.
- Agar experienced ho aur revision chahiye → Section 23 (Final Revision) aur Section 21 (Question Banks) directly dekho.
- Har section ke end me **Quick Revision Table** hai — interview se 1 din pehle wahi padhna kaafi hai.

---
---

# SECTION 1: JavaScript Fundamentals

## 1. Introduction

**JavaScript kya hai?**

JavaScript ek **high-level, interpreted (JIT-compiled), single-threaded, dynamically-typed** programming language hai jo originally web pages ko **interactive** banane ke liye banayi gayi thi. Pehle sirf browser me chalti thi, lekin aaj JS har jagah hai — browser, server (Node.js), mobile apps, desktop apps, IoT devices.

**Why is it needed? (Real World Use Case)**

Socho tumhara ek HTML form hai — naam, email, phone number. Agar user "email" field me bina `@` ke kuch type kare aur submit kare:
- **HTML/CSS** sirf structure aur styling dikha sakte hain — validation nahi kar sakte.
- **JavaScript** us form ko "samajhne" ki shakti deta hai — validation, real-time feedback, dynamic content update, animations, API calls — sab JS karta hai.

Real examples:
- Instagram ka infinite scroll → JavaScript
- Amazon ka "Add to Cart" bina page reload ke → JavaScript
- Google ka search suggestion dropdown → JavaScript
- Netflix ka video player controls → JavaScript

**History of JavaScript (Interview Important)**

| Year | Event |
|------|-------|
| 1995 | Brendan Eich ne Netscape me 10 din me JavaScript banayi (originally naam "Mocha", phir "LiveScript") |
| 1995 | Marketing reason se naam "JavaScript" rakha gaya (Java ke saath koi technical relation nahi hai) |
| 1997 | ECMA International ne standardize kiya → **ECMAScript (ES)** naam diya gaya |
| 2009 | **ES5** release — `"use strict"`, JSON support, Array methods (`map`, `filter`, `reduce`) |
| 2015 | **ES6 (ES2015)** — Game changer: `let`, `const`, Arrow functions, Classes, Promises, Template literals, Destructuring |
| 2016+ | Har saal ek naya ES version (ES2016, ES2017...ES2024) — chhote-chhote features add hote rehte hain |

> **Interview Tip:** "JavaScript aur Java me kya relation hai?" — Answer: **Koi relation nahi hai**, sirf naam similar hai marketing ke liye (1995 me Java popular tha).

**JavaScript ki Properties**

```mermaid
graph TD
A[JavaScript Language] --> B[High-Level]
A --> C[Interpreted / JIT Compiled]
A --> D[Dynamically Typed]
A --> E[Single Threaded]
A --> F[Prototype-Based OOP]
A --> G[Multi-Paradigm]
```

- **High-Level**: Memory management khud handle karta hai (Garbage Collection), developer ko manually memory allocate/deallocate nahi karni padti.
- **Dynamically Typed**: Variable ka type runtime pe decide hota hai. `let x = 5; x = "hello";` — valid hai, koi error nahi.
- **Single Threaded**: Ek time pe ek hi task execute hota hai (call stack ek hi hai), lekin Event Loop ki help se asynchronous behavior simulate karta hai.
- **Interpreted + JIT Compiled**: Modern JS engines (V8) code ko line-by-line interpret nahi karte — pehle parse karte hain, fir JIT (Just-In-Time) compile karte hain machine code me, performance ke liye.

---

## 2. Internal Working — How JavaScript Works

**JS Engine kya hota hai?**

JS Engine ek program hai jo JavaScript code ko samajhta hai aur execute karta hai. Har browser ka apna JS Engine hota hai:

| Browser | JS Engine |
|---------|-----------|
| Chrome, Edge, Node.js | **V8** (Google) |
| Firefox | SpiderMonkey (Mozilla) |
| Safari | JavaScriptCore (Apple) |

**V8 Engine — Internal Working (Most Asked in Interviews)**

```mermaid
graph LR
A[JavaScript Source Code] --> B[Parser]
B --> C[AST - Abstract Syntax Tree]
C --> D[Interpreter - Ignition]
D --> E[Bytecode]
E --> F[Profiler]
F -->|Hot Code Detected| G[Compiler - TurboFan]
G --> H[Optimized Machine Code]
F -->|Cold Code| E
```

**Step by Step Process:**

1. **Parsing** — JS engine code ko padh kar tokens me todta hai, fir **AST (Abstract Syntax Tree)** banata hai — ek tree structure jo code ke structure ko represent karta hai.

2. **Compilation** — V8 do components use karta hai:
   - **Ignition (Interpreter)**: AST ko jaldi se **bytecode** me convert karta hai, code immediately run hone lagta hai (no waiting for full compilation).
   - **TurboFan (Optimizing Compiler)**: Jo code "hot" hota hai (baar-baar chalta hai, jaise loops), usko TurboFan optimize karke fast machine code me convert kar deta hai.

3. **Execution** — Bytecode/machine code, Call Stack aur Memory Heap ke through execute hota hai.

> Yeh approach **JIT (Just-In-Time) Compilation** kehlata hai — interpretation ki speed + compilation ki performance, dono ka combo.

**Parsing Deep Dive**

```javascript
let x = 10 + 5;
```

Parser isko tokens me todta hai: `let`, `x`, `=`, `10`, `+`, `5`, `;` — fir ek **AST** banata hai jisme har token ka meaning aur relationship defined hota hai (variable declaration, binary expression, etc).

---

## 3. Syntax

### Basic Syntax

```javascript
// Single line comment

/* Multi line
   comment */

let message = "Hello World";
console.log(message);
```

### Advanced Syntax — Strict Mode

```javascript
"use strict";

x = 10; // ❌ Error: x is not defined (strict mode me undeclared variable allowed nahi)
```

`"use strict"` JS ko ek strict version me run karta hai — silent errors ko throw errors bana deta hai, kuch unsafe actions block karta hai (jaise undeclared variables, duplicate parameters).

### Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Semicolon missing reliance on ASI | ASI (Automatic Semicolon Insertion) kabhi-kabhi galat jagah semicolon laga deta hai | Hamesha explicitly `;` lagao |
| `==` use karna comparison ke liye | Type coercion ho jata hai, bugs aate hain | `===` use karo (strict equality) |
| Global variables accidentally banana | `x = 10` (bina let/const/var) global scope pollute karta hai | Hamesha `let`/`const` use karo |

---

## 4. Examples

**Beginner Example**

```javascript
console.log("Hello, Frontend World!");
```

**Intermediate Example**

```javascript
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}
console.log(greetUser("Rahul"));
```

**Advanced Example — Engine Behavior Demo**

```javascript
// Yeh dikhata hai ki JS function ko pehle hoist karta hai (Memory Creation Phase)
console.log(square(5)); // 25 — kaam karega even though function neeche define hai

function square(num) {
  return num * num;
}
```

---

## 5. Interview Questions

**Easy**
1. JavaScript interpreted ya compiled language hai?
   - **Answer**: Dono — Modern JS Engines (V8) JIT compilation use karte hain, jo interpretation aur compilation dono ka mix hai.
2. ECMAScript kya hai?
   - **Answer**: ECMAScript JavaScript ka standard/specification hai jise ECMA International maintain karta hai. JavaScript is ECMAScript ka ek implementation hai.

**Medium**
3. V8 Engine me Ignition aur TurboFan ka kya role hai?
   - **Answer**: Ignition bytecode generate karta hai aur jaldi execution start karta hai. TurboFan hot/frequently-used code ko optimize karke fast machine code banata hai.

**Hard**
4. JavaScript single-threaded hai, phir async operations (setTimeout, fetch) kaise kaam karte hain?
   - **Answer**: JS engine khud single-threaded hai, lekin browser/runtime environment (Web APIs) alag threads provide karta hai background tasks ke liye. Event Loop unhe wapas main thread pe laata hai jab woh complete ho jaate hain. (Detail Section 14 me)

**Scenario Based**
5. Tumhe ek legacy codebase milta hai jisme `var` aur `==` har jagah use hua hai. Iske kya risks hain aur tum kya refactor karoge?
   - **Answer**: `var` function-scoped hai aur hoisting/redeclaration issues create karta hai; `==` type coercion se unexpected bugs deta hai. Refactor: `let`/`const` use karo block scoping ke liye, `===` use karo strict comparison ke liye, gradually migrate karo with testing.

---

## 6. Logical Questions

**Problem**: Bina kisi built-in function ke check karo ki JS engine "hot" code ko kaise treat karta hai — ek loop likho jo demonstrate kare ki repeated function calls performance pe asar daal sakte hain (conceptual, V8 ki internal optimization ki wajah se).

**Approach**: Same function ko bahut baar call karo loop me, V8's TurboFan usko optimize karega after detecting it's "hot".

```javascript
function add(a, b) {
  return a + b;
}

let result;
for (let i = 0; i < 1000000; i++) {
  result = add(i, i + 1); // V8 isko "hot" function maan kar optimize kar dega
}
console.log(result);
```

**Explanation**: Pehli kuch calls Ignition (interpreter) se chalti hain. Jab V8 detect karta hai ki `add` function baar-baar same pattern se call ho raha hai, TurboFan isko optimize karke machine code me convert kar deta hai — performance better ho jaati hai.

**Time Complexity**: O(n) — loop n baar chalta hai.
**Space Complexity**: O(1) — constant extra space.

---

## 7. Output-Based Questions

```javascript
console.log(typeof typeof 1);
```

**Output**: `"string"`

**Explanation**:
- `typeof 1` → `"number"` (a string value)
- `typeof "number"` → `"string"`

So step by step: inner `typeof 1` evaluates first to `"number"`, then outer `typeof "number"` evaluates to `"string"`.

---

## 8. Visual Diagram — JS Code Lifecycle

```mermaid
graph TD
A[JavaScript Source Code .js file] --> B[Lexical Analysis - Tokenizing]
B --> C[Parsing - AST Generation]
C --> D[Ignition Interpreter - Bytecode]
D --> E[Execution Starts]
E --> F{Code is Hot?}
F -->|Yes| G[TurboFan Optimizing Compiler]
F -->|No| E
G --> H[Optimized Machine Code]
H --> E
```

---

## 9. Revision Section

**Key Points**
- JavaScript = high-level, dynamically-typed, single-threaded, prototype-based language.
- ECMAScript = specification; JavaScript = implementation.
- V8 = Chrome/Node ka JS engine; uses Ignition (interpreter) + TurboFan (optimizing compiler) = JIT compilation.
- JS code lifecycle: Parsing → AST → Bytecode → Execution → (optional) Optimization.

**Common Mistakes**
- Java aur JavaScript ko related samajhna (galat hai, naam sirf marketing ke liye similar hai).
- Sochna ki JS purely interpreted hai (modern engines JIT use karte hain).

**Interview Notes**
- "JavaScript ka full internal flow batao" — yeh ek bahut common senior-level question hai. Parsing → AST → Ignition → Bytecode → TurboFan (if hot) flow yaad rakho.

**Quick Revision Table**

| Term | One-Line Meaning |
|------|-------------------|
| ECMAScript | JS ka official specification/standard |
| V8 | Google ka JS Engine (Chrome, Node.js) |
| Ignition | V8 ka interpreter (bytecode generate karta hai) |
| TurboFan | V8 ka optimizing compiler (hot code ko optimize karta hai) |
| JIT Compilation | Just-In-Time — interpretation + compilation ka combo |
| AST | Abstract Syntax Tree — code ka tree-structure representation |

---
---
# SECTION 2: Variables (var, let, const)

## 1. Introduction

**Variables kya hote hain?**

Variable ek **named container** hai jo data store karta hai memory me. JavaScript me variable declare karne ke 3 tareeke hain: `var`, `let`, `const`.

**Why is it needed?**

Bina variables ke, hum data ko reuse, update, ya track nahi kar sakte. Real example: e-commerce site pe "cart total" ek variable hai jo har item add/remove hone pe update hota hai.

**Real-world use case**
```javascript
let cartTotal = 0;
cartTotal += 499; // item 1 add
cartTotal += 999; // item 2 add
console.log(cartTotal); // 1498
```

---

## 2. Internal Working

Jab JS code run hota hai, **Execution Context** banta hai jisme do phases hote hain:

```mermaid
graph TD
A[Execution Context Created] --> B[Memory Creation Phase / Hoisting]
B --> C["var x → undefined (memory allocated)"]
B --> D["let/const y → uninitialized (TDZ)"]
A --> E[Code Execution Phase]
E --> F[Variables get actual values assigned]
```

**Memory Creation Phase (Hoisting Phase)**:
- `var` declarations ko memory milti hai aur value `undefined` set hoti hai.
- `let` aur `const` declarations ko memory toh milti hai, lekin woh **Temporal Dead Zone (TDZ)** me rehte hain — access karne par `ReferenceError` aata hai.

**Code Execution Phase**:
- Line-by-line actual values assign hoti hain.

---

## 3. Syntax

### Basic Syntax

```javascript
var a = 10;     // function-scoped, re-declarable, re-assignable
let b = 20;     // block-scoped, re-assignable, NOT re-declarable in same scope
const c = 30;   // block-scoped, NOT re-assignable, NOT re-declarable
```

### Advanced Syntax

```javascript
// const object ki properties change ho sakti hain (reference fixed hai, content nahi)
const user = { name: "Aman" };
user.name = "Rohit"; // ✅ Valid
user = {};            // ❌ Error — reassignment of const
```

### Common Mistakes

| Mistake | Issue |
|---------|-------|
| Loop me `var` use karna closures ke saath | Sabhi closures same final value reference karte hain |
| `const` ko "immutable" samajhna | `const` sirf reference ko lock karta hai, object/array content mutate ho sakta hai |
| TDZ ko "let hoist nahi hota" samajhna | `let` bhi hoist hota hai, bas usable nahi hota TDZ ki wajah se |

---

## 4. Examples

**Beginner**
```javascript
var name = "Riya";
let age = 22;
const country = "India";
console.log(name, age, country);
```

**Intermediate — Scope Difference**
```javascript
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 — var function scoped hai, block ka effect nahi
}

function testLet() {
  if (true) {
    let y = 10;
  }
  console.log(y); // ReferenceError — let block scoped hai
}
```

**Advanced — Closures + Loop Problem**
```javascript
// Classic Interview Problem
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (kyunki var function/global scoped hai, sabhi callbacks same 'i' use karte hain)

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Output: 0, 1, 2 (kyunki let block scoped hai, har iteration ki apni 'j' hoti hai)
```

---

## 5. Interview Questions

**Easy**
1. `var`, `let`, aur `const` me kya difference hai?
   - **Answer**: `var` function-scoped + hoisted with `undefined` + re-declarable. `let`/`const` block-scoped + TDZ me rehte hain hoisting ke time. `const` reassign nahi ho sakta.

**Medium**
2. Kya `let` hoist hota hai?
   - **Answer**: Haan, `let` bhi hoist hota hai (memory allocate hoti hai), lekin woh **Temporal Dead Zone** me rehta hai jab tak actual declaration line execute na ho. Isliye access karne par `ReferenceError` aata hai, `undefined` nahi.

**Hard**
3. Kya `const` se declare kiya gaya array push operation se modify ho sakta hai?
   - **Answer**: Haan. `const` sirf **variable ke reference (binding)** ko immutable banata hai, value/content ko nahi. `const arr = [1,2]; arr.push(3);` valid hai, but `arr = [4,5]` invalid hai.

**Scenario Based**
4. Tumhe ek bug report milta hai: "loop ke andar event listeners sab same value dikha rahe hain." Tum kya debug karoge?
   - **Answer**: Most likely `var` use ho raha hai loop counter ke liye function-scope ki wajah se sab listeners same final value share kar rahe hain. Fix: `var` ko `let` se replace karo taaki har iteration ki apni scoped copy bane.

---

## 6. Logical Questions

**Problem**: Bina `let` use kiye, `var` ke saath ek loop likho jisme har iteration apna alag value capture kare (closure problem solve karna IIFE se).

**Approach**: IIFE (Immediately Invoked Function Expression) use karke har iteration ke `i` ko apne function scope me capture karo.

```javascript
for (var i = 0; i < 3; i++) {
  (function (capturedI) {
    setTimeout(() => console.log(capturedI), 100);
  })(i);
}
// Output: 0, 1, 2
```

**Explanation**: Har IIFE call apna naya function scope create karta hai jisme `capturedI` current `i` ki value le leta hai — isse closure problem solve ho jaata hai bina `let` use kiye.

**Time Complexity**: O(n)
**Space Complexity**: O(n) (n function scopes create hote hain)

---

## 7. Output-Based Questions

```javascript
console.log(a);
var a = 5;

console.log(b);
let b = 10;
```

**Output**:
```
undefined
ReferenceError: Cannot access 'b' before initialization
```

**Explanation**: `var a` hoisting phase me `undefined` set ho jaata hai, isliye first `console.log` `undefined` print karta hai bina error ke. `let b` bhi hoist hota hai but TDZ me hota hai — access karne par engine `ReferenceError` throw karta hai.

```javascript
{
  let x = 1;
  {
    let x = 2;
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

**Explanation**: Block scoping ki wajah se inner `x` outer `x` ko shadow karta hai apne block ke andar. Block khatam hote hi outer `x` apni original value pe wapas aa jaata hai.

---

## 8. Visual Diagram — TDZ Visualization

```mermaid
graph TD
A[Block/Scope Starts] --> B["let x declared - Memory Allocated"]
B --> C[TDZ Starts - x exists but inaccessible]
C --> D["Code reaches: let x = 5"]
D --> E[TDZ Ends - x is now usable]
E --> F[x accessible normally]
```

---

## 9. Revision Section

**Key Points**
- `var`: function-scoped, hoisted as `undefined`, re-declarable, re-assignable.
- `let`: block-scoped, hoisted but in TDZ, re-assignable, not re-declarable in same scope.
- `const`: block-scoped, hoisted but in TDZ, not re-assignable, reference is fixed (content mutable for objects/arrays).

**Common Mistakes**
- `var` ko loops me closures ke saath use karna.
- `const` arrays/objects ko "fully immutable" samajhna.

**Interview Notes**
- TDZ explain karte waqt yeh zaroor bolna: "let/const hoist hote hain, but unka access TDZ ki wajah se block hota hai jab tak declaration line execute na ho."

**Quick Revision Table**

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (`undefined`) | Yes (TDZ) | Yes (TDZ) |
| Re-declaration | Allowed | Not Allowed | Not Allowed |
| Re-assignment | Allowed | Allowed | Not Allowed |
| Global Object Property | Yes (in browser, `window.x`) | No | No |

---
---
# SECTION 3: Data Types

## 1. Introduction

**Data Types kya hote hain?**

Data type batata hai ki variable me kis kism ka data store hai — number, text, true/false, ya complex structure. JavaScript me data types do categories me bante hain: **Primitive** aur **Non-Primitive (Reference)**.

**Why is it needed?**
Compiler/Engine ko pata hona chahiye ki memory me kitni jagah allocate karni hai aur data ke saath kya operations valid hain (jaise number ko add kar sakte hain, string ko concatenate).

**Real-world use case**: Form validation — agar "age" field me string aa jaye number ki jagah, type checking se hum usse detect aur handle kar sakte hain.

---

## 2. Internal Working — Reference vs Value

```mermaid
graph TD
A[JavaScript Data Types] --> B[Primitive - Stored in Stack]
A --> C[Non-Primitive - Reference stored in Stack, Data in Heap]
B --> D[String, Number, Boolean, Undefined, Null, Symbol, BigInt]
C --> E[Object, Array, Function]
```

**Primitive Types** — Stack me directly value store hoti hai. Copy hone par **naya independent copy** banta hai.

**Non-Primitive Types** — Stack me sirf ek **reference (memory address)** store hota hai jo Heap me actual data ko point karta hai. Copy hone par reference copy hota hai, **same object share hota hai**.

```javascript
// Primitive - Value Copy
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unaffected)

// Non-Primitive - Reference Copy
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20 (affected! same memory reference)
```

**Memory Diagram**

```mermaid
graph LR
subgraph Stack
a["a = 10"]
b["b = 20"]
obj1Ref["obj1 → 0x001"]
obj2Ref["obj2 → 0x001"]
end
subgraph Heap
heapObj["0x001: { value: 20 }"]
end
obj1Ref --> heapObj
obj2Ref --> heapObj
```

---

## 3. Syntax

### Primitive Types (7 total)

```javascript
let str = "Hello";          // String
let num = 42;                // Number
let isActive = true;         // Boolean
let notDefined;               // Undefined
let empty = null;             // Null
let sym = Symbol("id");       // Symbol
let big = 123456789012345678901234567890n; // BigInt
```

### Non-Primitive Types

```javascript
let arr = [1, 2, 3];                 // Array (type of object)
let obj = { name: "Aman" };          // Object
function greet() { return "Hi"; }    // Function (type of object)
```

### Common Mistakes

| Mistake | Explanation |
|---------|-------------|
| `typeof null` ko `"null"` samajhna | Actual output hai `"object"` — yeh JavaScript ka famous historic bug hai |
| `NaN === NaN` ko true samajhna | `NaN` apne aap ke equal bhi nahi hota — `Number.isNaN()` use karo check ke liye |
| Array ko primitive samajhna | Array actually `object` type ka hi hai (`typeof [] === "object"`) |

---

## 4. Examples

**Beginner**
```javascript
console.log(typeof "Hello");   // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (famous bug!)
console.log(typeof Symbol());  // "symbol"
console.log(typeof 10n);       // "bigint"
```

**Intermediate — Reference Behavior**
```javascript
function updateArray(arr) {
  arr.push(4);
}
let myArr = [1, 2, 3];
updateArray(myArr);
console.log(myArr); // [1, 2, 3, 4] — array reference se modified hua
```

**Advanced — Deep Equality Check Challenge**
```javascript
let userA = { name: "Aman", address: { city: "Delhi" } };
let userB = { name: "Aman", address: { city: "Delhi" } };

console.log(userA === userB); // false (different references in heap)
console.log(JSON.stringify(userA) === JSON.stringify(userB)); // true (content same)
```

---

## 5. Interview Questions

**Easy**
1. JavaScript me kitne primitive data types hain?
   - **Answer**: 7 — String, Number, Boolean, Undefined, Null, Symbol, BigInt.

**Medium**
2. `null` aur `undefined` me kya difference hai?
   - **Answer**: `undefined` matlab variable declare hua hai but value assign nahi hui (JS engine khud assign karta hai). `null` ek intentional "no value" hai jo developer explicitly assign karta hai.

**Hard**
3. `typeof null === "object"` kyun hai jabki `null` ek primitive type hai?
   - **Answer**: Yeh JavaScript ke earliest implementation (1995) ka historic bug hai. Internally values type tags ke saath store hote the, aur `null` ka representation accidentally object types ke saath match kar gaya (`0x00`). Backward compatibility ki wajah se yeh aaj tak fix nahi hua.

**Scenario Based**
4. Tumhe ek function pass karna hai jo object ko modify na kare (original safe rahe). Kya approach use karoge?
   - **Answer**: Object ka **shallow ya deep copy** banao (`{...obj}` ya `structuredClone(obj)`) function ko pass karne se pehle, taaki original reference affect na ho.

---

## 6. Logical Questions

**Problem**: Ek function likho jo check kare ki di gayi value primitive hai ya reference type.

**Approach**: `typeof` aur `null` check combine karke logic banao.

```javascript
function isPrimitive(value) {
  return value === null || (typeof value !== "object" && typeof value !== "function");
}

console.log(isPrimitive(42));        // true
console.log(isPrimitive("hello"));   // true
console.log(isPrimitive(null));      // true
console.log(isPrimitive({}));        // false
console.log(isPrimitive([1, 2]));    // false
```

**Explanation**: `typeof` reference types (object, array, function) ke liye `"object"` ya `"function"` return karta hai. `null` special case hai isliye explicitly check kiya.

**Time Complexity**: O(1)
**Space Complexity**: O(1)

---

## 7. Output-Based Questions

```javascript
console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log(1 + "1");
console.log(1 + +"1");
```

**Output**:
```
""
"[object Object]"
"[object Object]"  (browser console) OR 0 (in some JS shells when {} treated as block)
"11"
2
```

**Step-by-step Explanation**:

1. `[] + []` → Dono array `toString()` se convert hote hain `""` (empty string) me, fir `"" + "" = ""`.
2. `[] + {}` → `[]` → `""`, `{}` → `"[object Object]"`, result: `"" + "[object Object]" = "[object Object]"`.
3. `{} + []` → Browser console me yeh `"[object Object]"` deta hai (addition expression ke roop me treat hota hai). Note: kuch JS environments (jaise Node REPL ya script ke start me) `{}` ko block statement samajh sakte hain aur sirf `+[]` evaluate karte hain jo `0` deta hai — yeh context-dependent hai.
4. `1 + "1"` → Number `1` ko string me convert kiya jaata hai (string concatenation priority), result: `"11"`.
5. `1 + +"1"` → `+"1"` unary plus operator string `"1"` ko number `1` me convert karta hai, fir `1 + 1 = 2`.

---

## 8. Visual Diagram — Data Types Hierarchy

```mermaid
graph TD
A[JavaScript Data Types] --> B[Primitive]
A --> C[Non-Primitive / Reference]
B --> D[String]
B --> E[Number]
B --> F[Boolean]
B --> G[Undefined]
B --> H[Null]
B --> I[Symbol]
B --> J[BigInt]
C --> K[Object]
C --> L[Array]
C --> M[Function]
```

---

## 9. Revision Section

**Key Points**
- 7 Primitive types: String, Number, Boolean, Undefined, Null, Symbol, BigInt — Stack me store hote hain, copy by value.
- Non-Primitive (Object, Array, Function) — Heap me store hote hain, Stack sirf reference rakhta hai, copy by reference.
- `typeof null` → `"object"` (historic bug, yaad rakhna interview ke liye zaroori hai).

**Common Mistakes**
- `NaN === NaN` ko true samajhna (actually `false` hai).
- Array ko separate primitive type samajhna (yeh `object` hi hai).

**Interview Notes**
- "Reference vs Value" diagram banake explain karna interviewer ko impress karta hai — Stack/Heap dikhana zaroor.

**Quick Revision Table**

| Type | Category | typeof Result | Stored In |
|------|----------|----------------|-----------|
| String | Primitive | "string" | Stack |
| Number | Primitive | "number" | Stack |
| Boolean | Primitive | "boolean" | Stack |
| Undefined | Primitive | "undefined" | Stack |
| Null | Primitive | "object" (bug) | Stack |
| Symbol | Primitive | "symbol" | Stack |
| BigInt | Primitive | "bigint" | Stack |
| Object | Non-Primitive | "object" | Heap (ref in Stack) |
| Array | Non-Primitive | "object" | Heap (ref in Stack) |
| Function | Non-Primitive | "function" | Heap (ref in Stack) |

---
---
# SECTION 4: Operators

## 1. Introduction

**Operators kya hote hain?**

Operators woh symbols hain jo values/variables par operations perform karte hain — jaise math karna, comparison karna, ya logic apply karna.

**Why is it needed?**
Bina operators ke hum calculations, comparisons, conditional logic kuch nahi kar sakte. Real example: discount calculate karna (`price - discount`), ya login check karna (`username === storedUsername`).

---

## 2. Internal Working

JS operators **expressions** banate hain jo engine evaluate karta hai aur ek single value return karta hai. Operator precedence aur associativity decide karte hain ki complex expression me kaunsa operation pehle hoga.

```mermaid
graph TD
A["Expression: 2 + 3 * 4"] --> B[Engine checks precedence]
B --> C["* has higher precedence than +"]
C --> D["3 * 4 evaluated first = 12"]
D --> E["2 + 12 = 14"]
```

---

## 3. Syntax — All Operator Types

### Arithmetic Operators
```javascript
let a = 10, b = 3;
console.log(a + b);  // 13 - Addition
console.log(a - b);  // 7  - Subtraction
console.log(a * b);  // 30 - Multiplication
console.log(a / b);  // 3.333... - Division
console.log(a % b);  // 1  - Modulus (remainder)
console.log(a ** b); // 1000 - Exponentiation
```

### Assignment Operators
```javascript
let x = 10;
x += 5;  // x = x + 5  → 15
x -= 3;  // x = x - 3  → 12
x *= 2;  // x = x * 2  → 24
x /= 4;  // x = x / 4  → 6
x %= 4;  // x = x % 4  → 2
```

### Comparison Operators
```javascript
console.log(5 == "5");   // true  - loose equality (type coercion)
console.log(5 === "5");  // false - strict equality (no coercion)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(5 > 3);      // true
console.log(5 <= 5);     // true
```

### Logical Operators
```javascript
console.log(true && false); // false - AND
console.log(true || false); // true  - OR
console.log(!true);          // false - NOT
```

### Ternary Operator
```javascript
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"
```

### Nullish Coalescing (`??`)
```javascript
let userInput = null;
let defaultVal = userInput ?? "Default Value";
console.log(defaultVal); // "Default Value"

// Difference from || :
let count = 0;
console.log(count || 10); // 10 (0 is falsy, || triggers fallback)
console.log(count ?? 10); // 0  (?? only triggers on null/undefined, not other falsy values)
```

### Optional Chaining (`?.`)
```javascript
let user = { profile: { name: "Aman" } };
console.log(user?.profile?.name);    // "Aman"
console.log(user?.address?.city);    // undefined (no error, safely returns undefined)
```

### Common Mistakes

| Mistake | Issue |
|---------|-------|
| `==` use karna `===` ki jagah | Unexpected type coercion bugs |
| `||` aur `??` ko same samajhna | `||` falsy values (0, "", false) ko bhi replace karta hai; `??` sirf null/undefined ko |
| Operator precedence ignore karna | `2 + 3 * 4` ko `(2+3)*4` samajh lena galat hai |

---

## 4. Examples

**Beginner**
```javascript
let total = 100 + 50;
console.log(total); // 150
```

**Intermediate**
```javascript
let cart = { items: 3, discount: null };
let finalDiscount = cart.discount ?? 0;
console.log(finalDiscount); // 0
```

**Advanced — Chained Optional Chaining with Function Call**
```javascript
let api = {
  getUser: () => ({ name: "Riya" })
};
console.log(api.getUser?.()?.name);  // "Riya"
console.log(api.deleteUser?.()?.name); // undefined (function doesn't exist, no error thrown)
```

---

## 5. Interview Questions

**Easy**
1. `==` aur `===` me kya difference hai?
   - **Answer**: `==` (loose equality) comparison se pehle type conversion karta hai. `===` (strict equality) type aur value dono check karta hai bina conversion ke.

**Medium**
2. `??` aur `||` operator me kya difference hai?
   - **Answer**: `||` left operand ke **falsy** hone par right operand return karta hai (falsy = `0, "", false, null, undefined, NaN`). `??` sirf left operand `null` ya `undefined` hone par right operand return karta hai — baaki falsy values (`0`, `""`) ko valid maanta hai.

**Hard**
3. `1 + "1" + 1` aur `1 + 1 + "1"` ka output kya hoga aur kyun?
   - **Answer**: `1 + "1" + 1` → left-to-right evaluation: `1 + "1" = "11"`, fir `"11" + 1 = "111"`. `1 + 1 + "1"` → `1 + 1 = 2`, fir `2 + "1" = "21"`. Operator evaluation order (left to right) result decide karta hai.

**Scenario Based**
4. Tumhe API se response milta hai jisme nested objects ho sakte hain ya kuch fields missing ho sakte hain. Errors avoid karne ke liye kaunsa operator approach use karoge?
   - **Answer**: Optional chaining (`?.`) use karunga safe property access ke liye, aur nullish coalescing (`??`) use karunga default values provide karne ke liye missing data ke case me.

---

## 6. Logical Questions

**Problem**: Ek function likho jo do numbers ka safe division kare — agar divisor `0` ho toh `Infinity`/`NaN` ki jagah custom error message return kare, aur agar koi input `null`/`undefined` ho toh default value `0` use kare.

**Approach**: Nullish coalescing se defaults set karo, fir divisor zero check karo.

```javascript
function safeDivide(a, b) {
  a = a ?? 0;
  b = b ?? 0;
  if (b === 0) return "Error: Division by zero";
  return a / b;
}

console.log(safeDivide(10, 2));      // 5
console.log(safeDivide(10, 0));      // "Error: Division by zero"
console.log(safeDivide(null, 5));    // 0
```

**Explanation**: `??` operator ensure karta hai ki sirf `null`/`undefined` defaults trigger karein, `0` jaisi valid falsy value ko preserve karte hue.

**Time Complexity**: O(1)
**Space Complexity**: O(1)

---

## 7. Output-Based Questions

```javascript
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(NaN == NaN);         // false
console.log(0 == "0");            // true
console.log(0 == "");             // true
console.log("" == "0");           // false
console.log(false == "false");   // false
console.log(false == 0);          // true
```

**Explanation**:
- `null == undefined` → `true` because loose equality specifically treats these two as equal to each other (special rule), but not equal to anything else.
- `NaN == NaN` → `false` — `NaN` kabhi apne aap ke bhi equal nahi hota, yeh IEEE 754 floating point standard ka rule hai.
- `0 == "0"` → `true` — string `"0"` number `0` me convert hoti hai comparison se pehle.
- `0 == ""` → `true` — empty string number me convert hoti hai `0` ban jaati hai.
- `"" == "0"` → `false` — dono strings hain, no coercion hota, content different hai.
- `false == "false"` → `false` — string `"false"` boolean me convert nahi hoti seedhe; coercion rules ke hisaab se yeh number comparison ban jaata hai aur `"false"` → `NaN`, jo `false` (0) ke equal nahi.
- `false == 0` → `true` — boolean `false` number `0` me convert hota hai.

---

## 8. Visual Diagram — Operator Precedence Flow

```mermaid
graph TD
A[Expression Evaluation] --> B[Parentheses - Highest Priority]
B --> C[Exponentiation **]
C --> D[Multiplication / Division / Modulus]
D --> E[Addition / Subtraction]
E --> F[Relational Comparisons]
F --> G[Equality == / ===]
G --> H[Logical AND &&]
H --> I[Logical OR ||]
I --> J[Ternary ?:]
J --> K[Assignment =]
```

---

## 9. Revision Section

**Key Points**
- `===` use karo always — type coercion bugs se bachne ke liye.
- `??` sirf `null`/`undefined` check karta hai; `||` sab falsy values check karta hai.
- Optional chaining `?.` errors prevent karta hai jab nested property exist nahi karti.

**Common Mistakes**
- `==` ka use production code me karna.
- `||` use karna jab `0` ek valid value ho sakti hai (use `??` instead).

**Interview Notes**
- `null == undefined` is `true` but `null === undefined` is `false` — yeh ek favorite trick question hai.

**Quick Revision Table**

| Operator | Purpose | Example |
|----------|---------|---------|
| `===` | Strict equality | `5 === "5"` → false |
| `==` | Loose equality (coercion) | `5 == "5"` → true |
| `??` | Nullish default | `null ?? 5` → 5 |
| `||` | Falsy default | `0 || 5` → 5 |
| `?.` | Safe property access | `obj?.prop` → undefined if missing |

---
---
# SECTION 5: Type Conversion

## 1. Introduction

**Type Conversion kya hai?**

Type Conversion woh process hai jisme JavaScript ek data type ki value ko doosre data type me convert karta hai — jaise string ko number me, ya number ko boolean me.

**Why is it needed?**
JS dynamically typed hai, isliye operations ke time engine ko decide karna padta hai ki types ko match karna hai ya nahi. Real-world: HTML form se aane wala input hamesha **string** hota hai, chahe user ne number type kiya ho — usse actual number me convert karna padta hai calculation ke liye.

```javascript
let inputValue = "25"; // form se aaya string
let age = Number(inputValue) + 5;
console.log(age); // 30
```

---

## 2. Internal Working

```mermaid
graph TD
A[Type Conversion] --> B[Implicit - Type Coercion]
A --> C[Explicit - Type Casting]
B --> D[Engine automatically converts during operations]
C --> E[Developer manually converts using functions]
```

**Implicit Conversion (Type Coercion)** — JS engine automatically type convert karta hai operators ke context ke hisaab se (jaise `+` operator string concatenation ki taraf lean karta hai).

**Explicit Conversion (Type Casting)** — Developer manually `Number()`, `String()`, `Boolean()` functions use karta hai.

---

## 3. Syntax

### Explicit Conversion
```javascript
// To Number
console.log(Number("123"));   // 123
console.log(Number("abc"));   // NaN
console.log(Number(true));    // 1
console.log(Number(null));    // 0
console.log(Number(undefined)); // NaN

// To String
console.log(String(123));     // "123"
console.log(String(true));    // "true"
console.log(String(null));    // "null"

// To Boolean
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("hello")); // true
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));     // false
console.log(Boolean([]));      // true (empty array is truthy!)
console.log(Boolean({}));      // true (empty object is truthy!)
```

### Implicit Conversion
```javascript
console.log("5" + 3);   // "53" (number converted to string)
console.log("5" - 3);   // 2   (string converted to number)
console.log("5" * "2"); // 10  (both converted to numbers)
console.log(true + 1);  // 2   (boolean converted to number)
```

### Truthy & Falsy Values

**Falsy values (only 6 in JS):** `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`

**Everything else is Truthy** — including `"0"`, `"false"`, `[]`, `{}`, `-1`.

### Common Mistakes

| Mistake | Explanation |
|---------|-------------|
| `[]` ko falsy samajhna | Empty array/object **truthy** hote hain JS me |
| `"0"` string ko falsy samajhna | Non-empty string hamesha truthy hoti hai, even `"0"` |
| `parseInt` aur `Number` ko same samajhna | `parseInt("123abc")` → `123`, but `Number("123abc")` → `NaN` |

---

## 4. Examples

**Beginner**
```javascript
let result = "10" + 5; 
console.log(result); // "105"
```

**Intermediate**
```javascript
let formInput = "  42  ";
console.log(Number(formInput.trim())); // 42
```

**Advanced**
```javascript
function toSafeNumber(value) {
  const num = Number(value);
  return Number.isNaN(num) ? 0 : num;
}
console.log(toSafeNumber("99"));    // 99
console.log(toSafeNumber("abc"));   // 0
console.log(toSafeNumber(null));    // 0
```

---

## 5. Interview Questions

**Easy**
1. Implicit aur Explicit conversion me kya difference hai?
   - **Answer**: Implicit (coercion) automatically engine karta hai operation ke context se. Explicit (casting) developer manually `Number()`, `String()`, `Boolean()` se karta hai.

**Medium**
2. `parseInt` aur `Number` me kya difference hai?
   - **Answer**: `Number()` entire string ko valid number hone ki zaroorat hai, warna `NaN` deta hai. `parseInt()` string ko shuru se parse karta hai jab tak number characters milte hain, baaki ignore kar deta hai (`parseInt("42px")` → `42`).

**Hard**
3. `[] == false` ka output kya hoga aur kyun?
   - **Answer**: `true`. `[]` ko `==` comparison me primitive me convert kiya jaata hai → `[].toString()` → `""` → fir number me → `0`. `false` bhi `0` me convert hota hai. `0 == 0` → `true`.

**Scenario Based**
4. User input field se value aati hai jo empty string, `"0"`, ya actual number ho sakti hai. Tum kaise validate karoge ki value "present" hai (zero bhi valid input maana jaaye)?
   - **Answer**: `Boolean()` ya simple truthy check use nahi karunga (kyunki `0` falsy treat hoga). Instead `value !== "" && value !== null && value !== undefined` jaisa explicit check use karunga, ya `value.length > 0` (string ke liye).

---

## 6. Logical Questions

**Problem**: Ek function likho jo kisi bhi value ko safely Boolean me convert kare, lekin special handling kare empty array/object ke liye (treat them as "empty" → false), jo default JS behavior se different hai.

**Approach**: Custom truthy logic likho jo array/object ki length/keys check kare.

```javascript
function customBoolean(value) {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object" && value !== null) return Object.keys(value).length > 0;
  return Boolean(value);
}

console.log(customBoolean([]));     // false (custom logic, JS default would be true)
console.log(customBoolean([1,2]));  // true
console.log(customBoolean({}));     // false
console.log(customBoolean(0));      // false
```

**Explanation**: Default JS `Boolean([])` `true` deta hai kyunki object reference truthy hai. Lekin business logic me kabhi-kabhi "empty array = no data = false" chahiye hota hai — yeh function woh custom behavior implement karta hai.

**Time Complexity**: O(n) for array/object (key/length check), O(1) for primitives.
**Space Complexity**: O(1)

---

## 7. Output-Based Questions (50 Tricky Questions)

```javascript
// 1
console.log(1 + "2");           // "12"
// 2
console.log("2" + 1);            // "21"
// 3
console.log(1 - "2");            // -1
// 4
console.log("5" - "2");          // 3
// 5
console.log("5" + + "2");        // "52" (unary + converts "2" to 2, but still concatenated as string... wait, let's verify)
```

> **Note on #5**: `"5" + +"2"` → `+"2"` evaluates first to number `2`. Then `"5" + 2` → string concatenation happens because left operand is string → `"52"`.

```javascript
// 6
console.log(true + true);        // 2
// 7
console.log(true + false);       // 1
// 8
console.log("true" == true);     // false
// 9
console.log([1,2] + [3,4]);      // "1,23,4"
// 10
console.log([] + 1);             // "1"
// 11
console.log(1 + null);           // 1
// 12
console.log(1 + undefined);      // NaN
// 13
console.log("5" * "2");          // 10
// 14
console.log("abc" * 2);          // NaN
// 15
console.log(null + null);        // 0
// 16
console.log(undefined + undefined); // NaN
// 17
console.log(null == 0);           // false
// 18
console.log(null >= 0);           // true (relational comparison converts null to 0)
// 19
console.log(NaN == NaN);          // false
// 20
console.log(NaN === NaN);         // false
// 21
console.log([1] == 1);            // true ([1] → "1" → 1)
// 22
console.log([1] == "1");          // true
// 23
console.log([] == []);            // false (different references)
// 24
console.log({} == {});            // false (different references)
// 25
console.log("" == 0);             // true
// 26
console.log(" " == 0);            // true (whitespace string converts to 0)
// 27
console.log(!!"");                // false
// 28
console.log(!!"0");               // true
// 29
console.log(!!0);                 // false
// 30
console.log(!![]);                // true
// 31
console.log(!!{});                 // true
// 32
console.log(10 == "10");           // true
// 33
console.log(10 === "10");          // false
// 34
console.log(0 == false);           // true
// 35
console.log(0 === false);          // false
// 36
console.log("0" == false);         // true
// 37
console.log(Number(""));           // 0
// 38
console.log(Number(" "));          // 0
// 39
console.log(Number("123abc"));     // NaN
// 40
console.log(parseInt("123abc"));   // 123
// 41
console.log(parseFloat("3.14abc"));// 3.14
// 42
console.log(String(null));         // "null"
// 43
console.log(String(undefined));    // "undefined"
// 44
console.log(String([1,2,3]));      // "1,2,3"
// 45
console.log(String({}));            // "[object Object]"
// 46
console.log(Boolean(" "));          // true (non-empty string with space is truthy)
// 47
console.log(Boolean(NaN));          // false
// 48
console.log(Boolean(-0));           // false
// 49
console.log(1 < 2 < 3);             // true ((1<2)=true → true is 1 → 1<3 → true)
// 50
console.log(3 > 2 > 1);             // false ((3>2)=true → 1 → 1>1 → false)
```

**Key explanation for tricky ones (#49, #50)**: Chained comparisons left-to-right evaluate hote hain. `1 < 2 < 3` → first `1 < 2` evaluates to `true` (boolean), then `true < 3` → `true` is coerced to `1`, so `1 < 3` → `true`. Similarly `3 > 2 > 1` → `3 > 2` is `true` → `1`, then `1 > 1` → `false`.

---

## 8. Visual Diagram — Coercion Decision Flow

```mermaid
graph TD
A["Operator encountered (e.g. +, -, ==)"] --> B{Operand types same?}
B -->|Yes| C[Direct operation - no coercion]
B -->|No| D{Is it + operator?}
D -->|Yes, one is string| E[Convert other to string - Concatenation]
D -->|No| F[Convert both to Number - Arithmetic/Comparison]
```

---

## 9. Revision Section

**Key Points**
- Only 6 falsy values: `false, 0, "", null, undefined, NaN`. Everything else truthy.
- `==` triggers type coercion; `===` doesn't.
- `+` operator string concatenation ki taraf priority deta hai agar koi bhi operand string ho.
- `-`, `*`, `/` always numeric conversion attempt karte hain.

**Common Mistakes**
- `[]` aur `{}` ko falsy samajhna.
- `parseInt`/`Number` ko interchangeable samajhna.

**Interview Notes**
- `console.log([] + [])`, `console.log([] + {})` jaise questions **bohot common** hain — step-by-step toString() conversion explain karna zaroori hai.

**Quick Revision Table**

| Value | Boolean Conversion |
|-------|---------------------|
| `0` | false |
| `""` | false |
| `null` | false |
| `undefined` | false |
| `NaN` | false |
| `false` | false |
| `"0"` | true |
| `[]` | true |
| `{}` | true |
| `-1` | true |

---
---
# SECTION 6: Functions

## 1. Introduction

**Function kya hai?**

Function ek reusable block of code hai jo specific task perform karta hai. Yeh input (parameters) leta hai aur output (return value) deta hai.

**Why is it needed?**
Code reusability, organization, aur DRY principle (Don't Repeat Yourself) ke liye. Real example: `calculateDiscount(price, percentage)` function har product pe reuse ho sakta hai bina logic dobara likhe.

---

## 2. Internal Working

Jab function call hota hai, ek naya **Execution Context** Call Stack pe push hota hai:

```mermaid
graph TD
A[Function Called] --> B[New Execution Context Created]
B --> C[Memory Creation Phase - params/local vars get memory]
C --> D[Code Execution Phase - statements run]
D --> E[Return value computed]
E --> F[Execution Context Popped from Call Stack]
```

---

## 3. Syntax

### Function Declaration
```javascript
function greet(name) {
  return `Hello, ${name}`;
}
```
> Hoisted completely — call kar sakte ho declaration se pehle bhi.

### Function Expression
```javascript
const greet = function(name) {
  return `Hello, ${name}`;
};
```
> Hoisted as variable (TDZ ya `undefined` depending on var/let), function body call nahi ho sakti declaration se pehle.

### Anonymous Function
```javascript
setTimeout(function() {
  console.log("Executed after delay");
}, 1000);
```

### Arrow Functions
```javascript
const add = (a, b) => a + b;
const square = num => num * num;
const sayHi = () => console.log("Hi");
```
> Arrow functions ka apna `this` nahi hota — woh lexical scope se `this` inherit karte hain.

### IIFE (Immediately Invoked Function Expression)
```javascript
(function() {
  console.log("Runs immediately!");
})();

(() => {
  console.log("Arrow IIFE!");
})();
```

### Callback Functions
```javascript
function processData(data, callback) {
  const result = data * 2;
  callback(result);
}
processData(5, (result) => console.log(result)); // 10
```

### Higher Order Functions (HOF)
```javascript
// Function that takes another function as argument or returns a function
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
```

### Pure Functions
```javascript
// Pure - no side effects, same input always gives same output
function add(a, b) {
  return a + b;
}

// Impure - depends on/modifies external state
let total = 0;
function addToTotal(num) {
  total += num; // side effect
}
```

### Common Mistakes

| Mistake | Issue |
|---------|-------|
| Arrow function ko method ke roop me use karna object me | `this` object ko refer nahi karega, lexical scope (often `window`/`undefined`) ko karega |
| Function declaration aur expression ka hoisting confuse karna | Declaration fully hoisted; expression sirf variable part hoisted |
| Pure function me accidental side effect | Global variable modify karna function ke andar se |

---

## 4. Examples

**Beginner**
```javascript
function add(a, b) {
  return a + b;
}
console.log(add(3, 4)); // 7
```

**Intermediate — Closures with HOF**
```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Advanced — Currying (HOF Pattern)**
```javascript
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};

function multiply(a, b, c) {
  return a * b * c;
}
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
```

---

## 5. Interview Questions

**Easy**
1. Function Declaration aur Function Expression me kya difference hai?
   - **Answer**: Declaration completely hoisted hota hai (call before define possible). Expression sirf variable declaration hoisted hota hai, function part nahi — call before define error deta hai.

**Medium**
2. Arrow function aur regular function me `this` ka behavior kaise different hai?
   - **Answer**: Regular function ka apna `this` hota hai jo call-time pe decide hota hai (kaun call kar raha hai). Arrow function ka apna `this` nahi hota — woh apne **lexical (surrounding) scope** se `this` inherit karta hai.

**Hard**
3. Higher Order Function kya hai, example do.
   - **Answer**: HOF woh function hai jo doosre function ko argument leta hai, ya function return karta hai. Examples: `map`, `filter`, `reduce` built-in HOFs hain.

**Scenario Based**
4. Tumhe ek event handler banana hai jo `this` se current button element access kare. Arrow function ya regular function — kya use karoge?
   - **Answer**: Regular function use karunga, kyunki event handlers me `this` ko triggering element (button) refer karna chahiye, jo regular function dynamically provide karta hai. Arrow function `this` lexical scope se lega jo galat element ho sakta hai.

---

## 6. Logical Questions

**Problem**: Ek `once(fn)` Higher Order Function likho jo ensure kare ki di gayi function sirf **ek baar** hi execute ho, baad ke calls me first result hi return ho.

**Approach**: Closure use karke flag aur cached result store karo.

```javascript
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}

function initializeApp() {
  console.log("App Initialized!");
  return "Done";
}

const init = once(initializeApp);
init(); // "App Initialized!" logs, returns "Done"
init(); // nothing logs, returns "Done" (cached)
```

**Explanation**: Closure `called` aur `result` ko persist karta hai calls ke beech. Pehli call pe function actually run hota hai, baad ki calls cached result return karti hain.

**Time Complexity**: O(1) per call (after first)
**Space Complexity**: O(1)

---

## 7. Output-Based Questions

```javascript
function outer() {
  console.log(this);
}
outer(); // In non-strict mode browser: Window object. In strict mode: undefined.

const obj = {
  name: "Test",
  regularFn: function() { console.log(this.name); },
  arrowFn: () => { console.log(this.name); }
};
obj.regularFn(); // "Test" (this = obj)
obj.arrowFn();    // undefined (this = lexical scope, likely window/module scope, no 'name' property)
```

```javascript
console.log(typeof function(){}); // "function"
console.log(typeof (() => {}));    // "function"
console.log((function(){return 1;})()); // 1 - IIFE executes immediately
```

---

## 8. Visual Diagram — Function Call Flow

```mermaid
sequenceDiagram
participant Global as Global Execution Context
participant Func as Function Execution Context
Global->>Func: function called - new context pushed
Func->>Func: Memory Phase - params/vars allocated
Func->>Func: Execution Phase - code runs line by line
Func->>Global: return value passed back
Global->>Global: Function context popped from Call Stack
```

---

## 9. Revision Section

**Key Points**
- Function Declaration: fully hoisted, callable before definition.
- Function Expression: only variable hoisted, not callable before definition line.
- Arrow Functions: no own `this`, `arguments`, or `prototype`.
- HOFs: functions that take/return functions — backbone of functional programming (`map`, `filter`, `reduce`).
- Pure Functions: same input → same output, no side effects — essential for predictable code.

**Common Mistakes**
- Arrow functions ko object methods me use karna jab `this` object ko refer karna ho.
- IIFE ke around parentheses bhool jaana.

**Interview Notes**
- Currying aur `once()`/`memoize()` jaise HOF patterns bahut common coding round questions hote hain.

**Quick Revision Table**

| Type | Hoisting | Own `this` | Use Case |
|------|----------|------------|----------|
| Function Declaration | Fully hoisted | Yes | General reusable logic |
| Function Expression | Partially hoisted | Yes | Assigned to variables, conditional definitions |
| Arrow Function | Partially hoisted | No (lexical) | Callbacks, short functions, preserving outer `this` |
| IIFE | N/A | Yes (regular) / No (arrow) | One-time execution, module pattern |

---
---