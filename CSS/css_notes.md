# 🎨 CSS Complete Notes — Beginner to Advanced
### Hinglish mein samjho, Expert ban jao!

> **Author's Note:** Yeh notes Hinglish (Hindi + English) mein likhe gaye hain taaki aap concepts easily samajh sako. Har topic ke saath theory, syntax, examples, diagrams, aur practice questions diye gaye hain.

---

## 📋 Table of Contents

| # | Topic |
|---|-------|
| 1 | [Introduction to CSS](#1-introduction-to-css) |
| 2 | [Ways to Add CSS](#2-ways-to-add-css) |
| 3 | [CSS Syntax](#3-css-syntax) |
| 4 | [CSS Selectors](#4-css-selectors) |
| 5 | [CSS Colors](#5-css-colors) |
| 6 | [Backgrounds](#6-backgrounds) |
| 7 | [Borders](#7-borders) |
| 8 | [Margins](#8-margins) |
| 9 | [Padding](#9-padding) |
| 10 | [Height and Width](#10-height-and-width) |
| 11 | [CSS Box Model](#11-css-box-model) |
| 12 | [Text Styling](#12-text-styling) |
| 13 | [Fonts](#13-fonts) |
| 14 | [Links Styling](#14-links-styling) |
| 15 | [Lists Styling](#15-lists-styling) |
| 16 | [Tables Styling](#16-tables-styling) |
| 17 | [Display Property](#17-display-property) |
| 18 | [Position Property](#18-position-property) |
| 19 | [Float and Clear](#19-float-and-clear) |
| 20 | [Overflow](#20-overflow) |
| 21 | [Z-Index](#21-z-index) |
| 22 | [CSS Units](#22-css-units) |
| 23 | [Flexbox](#23-flexbox) |
| 24 | [CSS Grid](#24-css-grid) |
| 25 | [Responsive Web Design](#25-responsive-web-design) |
| 26 | [Pseudo Classes](#26-pseudo-classes) |
| 27 | [Pseudo Elements](#27-pseudo-elements) |
| 28 | [CSS Variables](#28-css-variables) |
| 29 | [Transforms](#29-transforms) |
| 30 | [Transitions](#30-transitions) |
| 31 | [Animations](#31-animations) |
| 32 | [Shadows](#32-shadows) |
| 33 | [Gradients](#33-gradients) |
| 34 | [Modern CSS](#34-modern-css) |
| 35 | [CSS Architecture](#35-css-architecture) |
| 36 | [Performance Optimization](#36-performance-optimization) |
| 37 | [CSS Interview Questions](#37-css-interview-questions) |
| 38 | [CSS Cheat Sheet](#38-css-cheat-sheet) |
| 39 | [CSS Mini Projects](#39-css-mini-projects) |
| 40 | [CSS Roadmap](#40-css-roadmap) |

---

# 1. Introduction to CSS

## What is CSS? 🤔

**CSS ka full form hai:** Cascading Style Sheets

**Simple bhasha mein:** Agar HTML ek ghar ki neenv (structure) hai, toh CSS uski painting, sajawat aur decoration hai!

> 💡 **Analogy:** HTML = skeleton (haddiyan), CSS = kapde aur makeup. Bina CSS ke webpage bilkul plain aur boring dikhta hai.

```
WITHOUT CSS:              WITH CSS:
┌─────────────────┐       ┌─────────────────┐
│ Heading         │       │ 🎨 HEADING      │
│ paragraph text  │       │ ━━━━━━━━━━━━━━  │
│ link            │       │ Styled text...  │
│ image           │       │ [Button] 🖼️     │
└─────────────────┘       └─────────────────┘
   Boring!                   Beautiful! ✨
```

## Why CSS is Used? 🎯

CSS use karne ke main reasons:

1. **Separation of Concerns** — HTML = content, CSS = design. Dono alag alag rehte hain.
2. **Consistency** — Ek hi CSS file se poori website ka look change ho jata hai.
3. **Reusability** — Ek style baar likho, hazaar jagah use karo.
4. **Responsiveness** — Mobile, tablet, desktop — sab ke liye alag design.
5. **Animations** — Bina JavaScript ke bhi cool effects.

## Benefits of CSS ✅

| Benefit | Explanation |
|---------|-------------|
| 🎨 Visual Appeal | Website sundar dikhti hai |
| ⚡ Performance | External CSS file browser cache kar leta hai |
| 🔧 Maintainability | Ek jagah change karo, sab jagah update |
| ♿ Accessibility | Screen readers ke liye better |
| 📱 Responsive Design | Every device pe fit ho jata hai |
| 🔄 Reusability | Same styles multiple elements pe |

## CSS Versions 📅

```
CSS1  (1996) ──► Basic styling, fonts, colors
CSS2  (1998) ──► Positioning, z-index, media types
CSS2.1(2011) ──► Bug fixes of CSS2
CSS3  (2012+)──► Animations, flexbox, grid, variables
CSS4  (ongoing)► :has(), container queries, etc.
```

> 📌 **Note:** CSS3 ek single version nahi hai — yeh modules ka collection hai jo continuously update hote rehte hain.

## How CSS Works? ⚙️

Browser CSS ko kaise process karta hai:

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  HTML File  │───►│   Browser   │───►│  DOM Tree   │
└─────────────┘    │  Parses it  │    └──────┬──────┘
                   └─────────────┘           │
┌─────────────┐    ┌─────────────┐           │
│  CSS File   │───►│  CSSOM Tree │───────────┤
└─────────────┘    └─────────────┘           │
                                    ┌────────▼───────┐
                                    │  Render Tree   │
                                    └────────┬───────┘
                                    ┌────────▼───────┐
                                    │    Layout      │
                                    └────────┬───────┘
                                    ┌────────▼───────┐
                                    │    Painting    │
                                    └────────────────┘
```

**Cascade ka matlab:** Agar ek element pe multiple styles lagte hain, toh browser decide karta hai kaunsi style apply hogi — yahi "Cascading" hai.

---

# 2. Ways to Add CSS

## Teen Tarike CSS Add Karne Ke 🛤️

### 1. Inline CSS

**Directly HTML element ke andar style attribute mein likha jata hai.**

```html
<!-- Syntax -->
<element style="property: value; property: value;">

<!-- Example -->
<h1 style="color: red; font-size: 30px;">Yeh Inline CSS hai!</h1>
<p style="background-color: yellow; padding: 10px;">Highlighted paragraph</p>
```

**✅ Use karo jab:** Sirf ek element ko quickly style karna ho  
**❌ Avoid karo jab:** Multiple elements ya large projects mein

---

### 2. Internal CSS

**HTML file ke andar `<head>` section mein `<style>` tag ke andar likha jata hai.**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Yeh Internal CSS hai */
    h1 {
      color: blue;
      font-size: 36px;
    }
    p {
      color: gray;
      line-height: 1.6;
    }
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <h1>Hello World!</h1>
  <p class="highlight">Yeh styled paragraph hai.</p>
</body>
</html>
```

**✅ Use karo jab:** Single page website ya testing ke liye  
**❌ Avoid karo jab:** Multiple pages pe same style chahiye

---

### 3. External CSS

**CSS alag .css file mein likhi jaati hai aur HTML se link ki jaati hai.**

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello World!</h1>
  <p>Yeh external CSS se styled hai!</p>
</body>
</html>
```

```css
/* styles.css */
h1 {
  color: purple;
  font-family: Arial, sans-serif;
}

p {
  color: #333;
  font-size: 16px;
  line-height: 1.8;
}
```

**✅ Use karo jab:** Real projects, multiple pages  
**✅ Best Practice:** Hamesha External CSS use karo!

---

## Priority Order (Specificity) ⚖️

Jab multiple styles ek element pe lagte hain toh priority order:

```
Highest Priority
      │
      ▼
┌─────────────────────┐
│   !important        │  ← Nuclear option (avoid karo!)
├─────────────────────┤
│   Inline CSS        │  ← style="" attribute
├─────────────────────┤
│   ID Selector       │  ← #myId {}
├─────────────────────┤
│   Class Selector    │  ← .myClass {}
├─────────────────────┤
│   Element Selector  │  ← h1, p, div {}
├─────────────────────┤
│   Browser Default   │  ← Sabse kam priority
└─────────────────────┘
      │
      ▼
Lowest Priority
```

```css
/* Example of Priority */
p { color: blue; }           /* Specificity: 0,0,1 */
.text { color: green; }      /* Specificity: 0,1,0 */
#para { color: red; }        /* Specificity: 1,0,0 */

/* <p id="para" class="text"> ki color RED hogi */
```

> ⚠️ **Warning:** `!important` use karne se baad mein debugging bahut mushkil ho jaati hai. Isliye jitna ho sake avoid karo.

---

### 🧪 Practice Exercise 1

```
Task: Teen alag tarike se ek div ko style karo:
1. Inline CSS se background-color: pink karo
2. Internal CSS se font-size: 20px karo  
3. External CSS se color: navy karo
Dekho kaunsi style jeet ti hai!
```

---

# 3. CSS Syntax

## Basic Syntax Structure 📝

```
selector {
  property: value;
  property: value;
}

   │            │       │
   │            │       └── Value (kya chahiye)
   │            └────────── Property (kya change karna hai)  
   └─────────────────────── Selector (kise style karna hai)
```

```css
/* Complete Example */
h1 {
  color: red;          /* Property: color, Value: red */
  font-size: 24px;     /* Property: font-size, Value: 24px */
  text-align: center;  /* Property: text-align, Value: center */
}
```

## Selectors (Kise Style Karna Hai)

```css
/* Element Selector */
p { color: blue; }

/* Class Selector — dot (.) se start hota hai */
.myClass { color: green; }

/* ID Selector — hash (#) se start hota hai */
#myId { color: red; }

/* Multiple Selectors */
h1, h2, h3 { font-family: Arial; }
```

## Properties aur Values

```css
selector {
  /* Text Properties */
  color: red;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  
  /* Box Properties */
  width: 300px;
  height: 200px;
  margin: 10px;
  padding: 20px;
  
  /* Background */
  background-color: #f0f0f0;
  background-image: url('bg.jpg');
  
  /* Border */
  border: 2px solid black;
  border-radius: 8px;
}
```

## Comments in CSS 💬

```css
/* Yeh ek single line comment hai */

/* 
   Yeh ek
   multi-line comment hai
   jo multiple lines mein phela hai
*/

/* 
   ⚠️ CSS mein // wala comment kaam NAHI karta!
   Sirf /* */ wala kaam karta hai.
*/

.button {
  background-color: blue; /* Button ka background */
  color: white;           /* Button ka text color */
}
```

---

# 4. CSS Selectors

## Selectors ka Overview 🎯

```
CSS Selectors
     │
     ├── Simple Selectors (*, element, .class, #id)
     ├── Combinator Selectors (space, >, ~, +)
     ├── Pseudo-class Selectors (:hover, :focus)
     ├── Pseudo-element Selectors (::before, ::after)
     └── Attribute Selectors ([attr], [attr=val])
```

---

### 1. Universal Selector `*`

**Sab elements ko select karta hai.**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Bahut common use */
}
```

> 💡 **Tip:** `* { box-sizing: border-box; }` almost har project mein use hota hai. Isse padding/border total width mein count hoti hai.

---

### 2. Element Selector

**HTML tag ke naam se select karta hai.**

```css
h1 { color: navy; }
p  { line-height: 1.6; }
a  { text-decoration: none; }
button { cursor: pointer; }
```

---

### 3. Class Selector `.`

**`.classname` se kisi bhi element ko style karo.**

```html
<p class="warning">Yeh warning message hai</p>
<div class="card">Card content</div>
<h2 class="card">Yeh bhi card style paayega</h2>
```

```css
.warning {
  color: orange;
  font-weight: bold;
}

.card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
}
```

> 💡 **Tip:** Ek element ke paas multiple classes ho sakti hain: `<div class="card warning large">`

---

### 4. ID Selector `#`

**`#idname` se SIRF EK element ko style karo (IDs unique hoti hain).**

```html
<div id="navbar">Navigation Bar</div>
<section id="hero">Hero Section</section>
```

```css
#navbar {
  background-color: #333;
  color: white;
  padding: 15px;
}

#hero {
  height: 100vh;
  background-image: url('hero.jpg');
}
```

> ⚠️ **Rule:** Ek page pe ek ID sirf ek baar use honi chahiye!

---

### 5. Group Selector `,`

**Multiple selectors ko ek saath style karo.**

```css
/* Without Grouping (repetition) */
h1 { font-family: Arial; }
h2 { font-family: Arial; }
h3 { font-family: Arial; }

/* With Grouping (clean!) */
h1, h2, h3 {
  font-family: Arial;
  color: #333;
}
```

---

### 6. Descendant Selector `(space)`

**Parent ke andar kisi bhi level pe element select karta hai.**

```html
<div class="container">
  <p>Direct child paragraph</p>
  <div>
    <p>Nested paragraph — YEH BHI SELECT HOGA</p>
  </div>
</div>
```

```css
/* .container ke andar saare p select honge */
.container p {
  color: blue;
}
```

---

### 7. Child Selector `>`

**Sirf direct children select karta hai (nested nahi).**

```html
<ul class="menu">
  <li>Item 1 ✓ (select hoga)</li>
  <li>
    Item 2 ✓ (select hoga)
    <ul>
      <li>Nested Item ✗ (select NAHI hoga)</li>
    </ul>
  </li>
</ul>
```

```css
.menu > li {
  color: red;
  list-style: none;
}
```

---

### 8. Adjacent Sibling Selector `+`

**Immediately next sibling ko select karta hai.**

```html
<h2>Heading</h2>
<p>Yeh paragraph select hoga (h2 ke baad wala)</p>
<p>Yeh NAHI hoga</p>
```

```css
h2 + p {
  font-weight: bold;
  font-size: 18px;
}
```

---

### 9. General Sibling Selector `~`

**Saare siblings (next wale) select karta hai.**

```html
<h2>Heading</h2>
<p>Paragraph 1 ✓</p>
<span>Span (skip)</span>
<p>Paragraph 2 ✓</p>
<p>Paragraph 3 ✓</p>
```

```css
h2 ~ p {
  color: green;
}
```

---

### 10. Attribute Selectors `[]`

**HTML attributes ke basis pe select karo.**

```css
/* Attribute exists */
[disabled] { opacity: 0.5; }

/* Exact value match */
[type="text"] { border: 2px solid blue; }
[type="email"] { border: 2px solid green; }

/* Value contains word */
[class~="btn"] { padding: 10px 20px; }

/* Value starts with */
[href^="https"] { color: green; }   /* Secure links */
[href^="http"] { color: orange; }   /* Non-secure links */

/* Value ends with */
[href$=".pdf"] { color: red; }      /* PDF links */
[src$=".jpg"] { border-radius: 4px; }

/* Value contains substring */
[href*="google"] { font-weight: bold; }
```

---

### Selector Specificity Table 📊

| Selector Type | Example | Specificity Score |
|--------------|---------|-------------------|
| Inline style | `style=""` | 1,0,0,0 |
| ID | `#header` | 0,1,0,0 |
| Class | `.btn` | 0,0,1,0 |
| Attribute | `[type]` | 0,0,1,0 |
| Pseudo-class | `:hover` | 0,0,1,0 |
| Element | `div` | 0,0,0,1 |
| Universal | `*` | 0,0,0,0 |

---

### 🧪 Practice Exercise 2

```html
<!-- Yeh HTML diya hua hai. CSS likhke style karo: -->
<div id="main">
  <h1 class="title">CSS Selectors Practice</h1>
  <p>First paragraph</p>
  <p class="highlight">Second paragraph</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <a href="https://google.com">Google Link</a>
  <a href="notes.pdf">Download PDF</a>
</div>

Tasks:
1. #main ka background light gray karo
2. .title ka color purple karo  
3. h1 ke baad wale p ko italic karo
4. HTTPS links ko green karo
5. PDF links ke baad "(PDF)" text add karo using ::after
```

---

# 5. CSS Colors

## Colors ke Tarike 🎨

### 1. Named Colors

```css
/* 140+ predefined color names hain */
.box {
  color: red;
  background-color: lightblue;
  border-color: darkgreen;
}

/* Common named colors */
/*
  red, green, blue, yellow, orange, purple
  white, black, gray, pink, cyan, magenta
  tomato, coral, salmon, gold, lime
  navy, teal, maroon, olive, indigo
*/
```

---

### 2. HEX Colors `#RRGGBB`

**6-digit code jisme Red, Green, Blue ki values 00-FF hoti hain.**

```css
/* #RRGGBB format */
.red   { color: #FF0000; }  /* Pure Red */
.green { color: #00FF00; }  /* Pure Green */
.blue  { color: #0000FF; }  /* Pure Blue */
.black { color: #000000; }  /* Black */
.white { color: #FFFFFF; }  /* White */

/* Shorthand (jab pairs same hon) */
.red   { color: #F00; }   /* Same as #FF0000 */
.gray  { color: #888; }   /* Same as #888888 */

/* Real-world colors */
.primary   { color: #3498db; }  /* Nice Blue */
.success   { color: #2ecc71; }  /* Nice Green */
.danger    { color: #e74c3c; }  /* Nice Red */
.warning   { color: #f39c12; }  /* Nice Orange */
```

```
HEX Color Breakdown:
#  FF    FF    FF
   │     │     │
   │     │     └── Blue  (00=koi blue nahi, FF=full blue)
   │     └──────── Green (00=koi green nahi, FF=full green)
   └────────────── Red   (00=koi red nahi, FF=full red)
```

---

### 3. RGB Colors `rgb(r, g, b)`

**Red, Green, Blue — 0 se 255 tak values.**

```css
.red   { color: rgb(255, 0, 0); }
.green { color: rgb(0, 255, 0); }
.blue  { color: rgb(0, 0, 255); }
.white { color: rgb(255, 255, 255); }
.black { color: rgb(0, 0, 0); }
.gray  { color: rgb(128, 128, 128); }

/* Koi bhi custom color */
.custom { color: rgb(52, 152, 219); }
```

---

### 4. RGBA Colors `rgba(r, g, b, alpha)`

**RGB + Alpha (transparency) — 0.0 (transparent) se 1.0 (opaque) tak.**

```css
/* Alpha value 0 = bilkul transparent, 1 = bilkul opaque */
.overlay {
  background-color: rgba(0, 0, 0, 0.5);    /* 50% transparent black */
}

.tooltip {
  background-color: rgba(255, 255, 255, 0.9); /* Almost white */
}

.glass-effect {
  background-color: rgba(52, 152, 219, 0.3);  /* Transparent blue */
}
```

---

### 5. HSL Colors `hsl(hue, saturation, lightness)`

**Hue (0-360°), Saturation (0-100%), Lightness (0-100%)**

```
Hue Wheel:
    0/360 = Red
      │
  300│  60
 Magenta Yellow
      │
  240│  120
  Blue  Green
      │
    180 = Cyan
```

```css
.red    { color: hsl(0, 100%, 50%); }
.yellow { color: hsl(60, 100%, 50%); }
.green  { color: hsl(120, 100%, 50%); }
.cyan   { color: hsl(180, 100%, 50%); }
.blue   { color: hsl(240, 100%, 50%); }

/* Saturation badhaane se color vibrant hota hai */
.muted   { color: hsl(240, 20%, 50%); }  /* Faded blue */
.vibrant { color: hsl(240, 100%, 50%); } /* Bright blue */

/* Lightness: 0% = black, 100% = white */
.dark    { color: hsl(240, 100%, 20%); }
.medium  { color: hsl(240, 100%, 50%); }
.light   { color: hsl(240, 100%, 80%); }
```

---

### 6. HSLA Colors `hsla(h, s, l, alpha)`

```css
.semi-transparent {
  background-color: hsla(240, 100%, 50%, 0.3);
}
```

---

### Color Comparison Table

| Format | Example | Alpha Support | Best For |
|--------|---------|---------------|----------|
| Named | `red` | ❌ | Quick prototyping |
| HEX | `#FF0000` | Partial (`#RRGGBBAA`) | Most common |
| RGB | `rgb(255,0,0)` | ❌ | Color calculations |
| RGBA | `rgba(255,0,0,0.5)` | ✅ | Transparency |
| HSL | `hsl(0,100%,50%)` | ❌ | Theme colors |
| HSLA | `hsla(0,100%,50%,0.5)` | ✅ | Theme + transparency |

---

# 6. Backgrounds

## Background Properties 🖼️

### `background-color`

```css
.box {
  background-color: lightblue;
  background-color: #3498db;
  background-color: rgb(52, 152, 219);
  background-color: rgba(52, 152, 219, 0.5);
  background-color: transparent; /* Default */
}
```

---

### `background-image`

```css
.hero {
  background-image: url('images/hero.jpg');
  background-image: url('https://example.com/bg.png');
}

/* Multiple backgrounds */
.layered {
  background-image: url('overlay.png'), url('background.jpg');
}
```

---

### `background-repeat`

```css
.box {
  background-repeat: repeat;     /* Default — dono taraf repeat */
  background-repeat: repeat-x;   /* Sirf horizontally */
  background-repeat: repeat-y;   /* Sirf vertically */
  background-repeat: no-repeat;  /* Repeat nahi */
  background-repeat: space;      /* Evenly spaced */
  background-repeat: round;      /* Stretch to fit */
}
```

---

### `background-position`

```css
.box {
  /* Keywords */
  background-position: center;
  background-position: top;
  background-position: bottom;
  background-position: left;
  background-position: right;
  background-position: top right;
  background-position: center center;
  
  /* Values */
  background-position: 50% 50%;    /* Center */
  background-position: 100px 200px;
}
```

---

### `background-size`

```css
.hero {
  /* Cover — image poore area ko cover kare, crop ho sakti hai */
  background-size: cover;
  
  /* Contain — image poori dikhaye, white space aa sakti hai */
  background-size: contain;
  
  /* Custom size */
  background-size: 100px 200px;
  background-size: 50%;
  background-size: auto;
}
```

```
cover vs contain:

COVER:                      CONTAIN:
┌──────────────────┐        ┌──────────────────┐
│ ████████████████ │        │   ┌──────────┐   │
│ ████████████████ │        │   │          │   │
│ ████████████████ │        │   │  IMAGE   │   │
│ ████████████████ │        │   │          │   │
│ ████████████████ │        │   └──────────┘   │
└──────────────────┘        └──────────────────┘
  (Image crops to fill)        (Full image shows)
```

---

### `background-attachment`

```css
.parallax {
  background-attachment: scroll;  /* Default — scroll ke saath */
  background-attachment: fixed;   /* Page scroll karo, BG fixed rahe */
  background-attachment: local;   /* Element scroll ke saath */
}
```

---

### Background Shorthand

```css
/* 
  background: color image repeat position/size attachment;
*/
.hero {
  background: #3498db url('hero.jpg') no-repeat center center / cover fixed;
}
```

---

### 🧪 Practice Exercise 3 — Background Challenge

```css
/* 
Task: Ek hero section banao jisme:
1. Dark overlay ho
2. Background image full screen ho
3. Image scroll ke saath fixed rahe
4. Image stretch na ho
*/

.hero {
  /* Aapko fill karna hai */
  height: 100vh;
  /* Hint: rgba overlay ke liye multiple backgrounds use karo */
}
```

---

# 7. Borders

## Border Properties 🔲

### `border` shorthand

```css
/* border: width style color; */
.box {
  border: 2px solid black;
  border: 5px dashed red;
  border: 3px dotted blue;
}
```

---

### `border-width`

```css
.box {
  border-width: 2px;                    /* Sab taraf */
  border-width: 2px 4px;               /* Top-Bottom | Left-Right */
  border-width: 1px 2px 3px 4px;       /* Top Right Bottom Left */
  
  border-top-width: 5px;
  border-right-width: 2px;
  border-bottom-width: 5px;
  border-left-width: 2px;
}
```

---

### `border-style`

```css
.box {
  border-style: solid;    /* ———————— Solid line */
  border-style: dashed;   /* - - - - - Dashes */
  border-style: dotted;   /* . . . . . Dots */
  border-style: double;   /* ════════ Double line */
  border-style: groove;   /* 3D grooved */
  border-style: ridge;    /* 3D ridged */
  border-style: inset;    /* 3D inset */
  border-style: outset;   /* 3D outset */
  border-style: none;     /* No border */
  border-style: hidden;   /* Hidden */
}
```

---

### `border-color`

```css
.box {
  border-color: red;
  border-color: red blue;                  /* Top-Bottom | Left-Right */
  border-color: red blue green yellow;     /* T R B L */
  
  border-top-color: red;
  border-right-color: green;
}
```

---

### `border-radius` — Rounded Corners 🔵

```css
.box {
  border-radius: 5px;             /* Thoda rounded */
  border-radius: 50%;             /* Perfect circle (square pe) */
  border-radius: 10px 20px;       /* Top-Left+Bottom-Right | Top-Right+Bottom-Left */
  border-radius: 5px 10px 15px 20px; /* TL TR BR BL */
}

/* Examples */
.button {
  border-radius: 25px;   /* Pill shape */
}

.avatar {
  border-radius: 50%;    /* Circle */
  width: 100px;
  height: 100px;
}

.card {
  border-radius: 12px;   /* Soft card */
}
```

```
border-radius examples:
┌──────────┐   ╭──────────╮   ╭──────────╮   (●)
│  0px     │   │  5px     │   │  15px    │   50%
└──────────┘   ╰──────────╯   ╰──────────╯
Sharp          Slightly       Very            Circle
               Rounded        Rounded
```

---

### Individual Border Sides

```css
.box {
  border-top: 3px solid red;
  border-right: 2px dashed blue;
  border-bottom: 1px dotted green;
  border-left: 4px double orange;
  
  /* Ya individual properties */
  border-top-width: 3px;
  border-top-style: solid;
  border-top-color: red;
}
```

---

# 8. Margins

## Margin — Element ke Bahar ka Space 📦

**Margin = element ke BAHAR ka space (dusre elements se door karta hai)**

```css
/* 
  MARGIN SYNTAX:
  margin: top right bottom left;  (Clock-wise from top)
*/

.box {
  /* Single value — sab taraf same */
  margin: 20px;
  
  /* Two values — top/bottom | left/right */
  margin: 10px 20px;
  
  /* Three values — top | left/right | bottom */
  margin: 10px 20px 30px;
  
  /* Four values — top right bottom left */
  margin: 10px 20px 30px 40px;
  
  /* Individual sides */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  
  /* Auto margin — centering ke liye */
  margin: 0 auto;  /* Horizontally center karo */
}
```

### Margin Auto — Centering Trick

```css
.container {
  width: 800px;
  margin: 0 auto;  /* ← Yeh container ko center kar deta hai! */
}
```

### Margin Collapse 🤔

```css
/* 
  IMPORTANT CONCEPT: Vertical margins collapse!
  
  .box1 { margin-bottom: 30px; }
  .box2 { margin-top: 20px; }
  
  In dono ke beech gap hoga: 30px (NOT 50px!)
  Bada wala margin win karta hai
*/

.box1 {
  margin-bottom: 30px;
  background: red;
  height: 50px;
}

.box2 {
  margin-top: 20px; /* 30px ke saath collapse ho jayega */
  background: blue;
  height: 50px;
}

/*
Actual gap = max(30px, 20px) = 30px
           ≠ 30px + 20px = 50px
*/
```

> 💡 **Tip:** Margin collapse sirf vertical (top/bottom) margins ke saath hota hai, horizontal nahi.

---

# 9. Padding

## Padding — Element ke Andar ka Space 📦

**Padding = element ke ANDAR ka space (content ko border se door karta hai)**

```css
.box {
  /* Same syntax as margin */
  padding: 20px;
  padding: 10px 20px;
  padding: 10px 20px 30px;
  padding: 10px 20px 30px 40px;
  
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

## Margin vs Padding — Visual Difference

```
┌─────────────────────────────────────────┐
│             MARGIN (bahar)              │
│   ┌─────────────────────────────────┐   │
│   │           BORDER                │   │
│   │   ┌─────────────────────────┐   │   │
│   │   │        PADDING          │   │   │
│   │   │   ┌─────────────────┐   │   │   │
│   │   │   │                 │   │   │   │
│   │   │   │    CONTENT      │   │   │   │
│   │   │   │                 │   │   │   │
│   │   └─────────────────────┘   │   │   │
│   │                             │   │   │
│   └─────────────────────────────┘   │   │
│                                     │   │
└─────────────────────────────────────┘   
```

```css
/* Practical Example */
.card {
  padding: 24px;        /* Andar ka space */
  margin: 16px;         /* Bahar ka space */
  border: 1px solid #ddd;
}

.button {
  padding: 12px 24px;   /* Top-Bottom: 12px, Left-Right: 24px */
  margin: 8px;          /* Button ke around space */
}
```

---

# 10. Height and Width

## Dimensions ↔️↕️

```css
.box {
  /* Fixed size */
  width: 300px;
  height: 200px;
  
  /* Percentage — parent ke relative */
  width: 50%;
  height: 100%;
  
  /* Viewport units */
  width: 100vw;   /* Full browser width */
  height: 100vh;  /* Full browser height */
  
  /* Min and Max */
  min-width: 200px;   /* Kabhi 200px se chota nahi hoga */
  max-width: 1200px;  /* Kabhi 1200px se bada nahi hoga */
  min-height: 100px;
  max-height: 500px;
  
  /* Auto */
  width: auto;   /* Content ke hisab se */
  height: auto;  /* Content ke hisab se (default) */
}
```

### Responsive Container Pattern

```css
/* Real-world use: Responsive container */
.container {
  width: 100%;           /* Full width on mobile */
  max-width: 1200px;     /* But not too wide on desktop */
  margin: 0 auto;        /* Center karo */
  padding: 0 20px;       /* Side padding */
}
```

### `box-sizing` Property

```css
/* 
  DEFAULT behavior (content-box):
  width = content width only
  Total width = width + padding + border
  
  BETTER behavior (border-box):
  width = content + padding + border
  Total width = width
*/

/* Bad: width 200px + 20px padding = 240px total */
.bad {
  box-sizing: content-box; /* default */
  width: 200px;
  padding: 20px;
  /* Total: 240px — confusing! */
}

/* Good: width stays 200px no matter what */
.good {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  /* Total: 200px — predictable! */
}

/* Best practice — sab elements pe apply karo */
* {
  box-sizing: border-box;
}
```

---

# 11. CSS Box Model

## Box Model ka Concept 📦

**Har HTML element ek box hai. Woh box 4 parts se bana hota hai:**

```
┌─────────────────────────────────────────────────┐
│                   MARGIN                        │
│    (Element ke bahar ka transparent space)      │
│   ┌─────────────────────────────────────────┐   │
│   │               BORDER                   │   │
│   │        (Element ki boundary)           │   │
│   │   ┌─────────────────────────────────┐  │   │
│   │   │            PADDING              │  │   │
│   │   │  (Content aur border ke beech)  │  │   │
│   │   │   ┌─────────────────────────┐   │  │   │
│   │   │   │                         │   │  │   │
│   │   │   │       CONTENT           │   │  │   │
│   │   │   │   (Text, image, etc.)   │   │  │   │
│   │   │   │                         │   │  │   │
│   │   │   └─────────────────────────┘   │  │   │
│   │   │                                 │  │   │
│   │   └─────────────────────────────────┘  │   │
│   │                                        │   │
│   └────────────────────────────────────────┘   │
│                                                 │
└─────────────────────────────────────────────────┘
```

```css
/* Box Model Example */
.card {
  /* Content */
  width: 300px;
  height: 200px;
  
  /* Padding — content ke around inner space */
  padding: 20px;
  
  /* Border — element ki outline */
  border: 3px solid #333;
  
  /* Margin — element ke bahar outer space */
  margin: 30px;
}

/* 
  content-box (default) total calculation:
  Total Width  = 300 + 20+20 + 3+3 + 30+30 = 406px
  Total Height = 200 + 20+20 + 3+3 + 30+30 = 306px
  
  border-box total calculation:
  Total Width  = 300 + 30+30 = 360px
  (padding aur border width ke andar hi count hote hain)
*/
```

### DevTools mein Box Model Dekhna 🔍

```
Browser mein F12 dabao > Elements > Styles ya Computed tab mein
box model diagram dikhega:
┌──────────────────────────────────────────┐
│  margin: 30                              │
│  ┌────────────────────────────────────┐  │
│  │  border: 3                         │  │
│  │  ┌──────────────────────────────┐  │  │
│  │  │  padding: 20                 │  │  │
│  │  │  ┌────────────────────────┐  │  │  │
│  │  │  │  300 × 200             │  │  │  │
│  │  │  └────────────────────────┘  │  │  │
│  │  └──────────────────────────────┘  │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
```

---

# 12. Text Styling

## Text Properties 🔤

### Color

```css
p { color: #333333; }
h1 { color: rgb(52, 73, 94); }
.primary { color: #3498db; }
```

---

### Text Alignment

```css
p {
  text-align: left;    /* Default */
  text-align: right;
  text-align: center;
  text-align: justify; /* Dono taraf se aligned */
}
```

---

### Text Decoration

```css
a {
  text-decoration: none;          /* Underline hatao */
  text-decoration: underline;     /* Underline */
  text-decoration: overline;      /* Line upar */
  text-decoration: line-through;  /* Strikethrough */
}

/* Advanced */
.fancy {
  text-decoration: underline wavy red;
  text-decoration: underline dotted blue;
}
```

---

### Text Transformation

```css
.text {
  text-transform: uppercase;    /* SAB CAPS */
  text-transform: lowercase;    /* sab small */
  text-transform: capitalize;   /* Har Word Ka Pehla Letter Capital */
  text-transform: none;         /* Default */
}
```

---

### Text Spacing

```css
p {
  letter-spacing: 2px;    /* Letters ke beech space */
  word-spacing: 5px;      /* Words ke beech space */
  line-height: 1.6;       /* Lines ke beech space (unitless best practice) */
  text-indent: 30px;      /* Pehli line ka indent */
  
  white-space: normal;    /* Default — wrap karo */
  white-space: nowrap;    /* Single line — wrap mat karo */
  white-space: pre;       /* Spaces preserve karo */
  white-space: pre-wrap;  /* Wrap bhi karo, spaces bhi raho */
}
```

---

### Text Shadow

```css
/* text-shadow: h-offset v-offset blur-radius color; */
h1 {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Multiple shadows */
.cool {
  text-shadow: 
    1px 1px 2px black, 
    0 0 25px blue, 
    0 0 5px darkblue;
}

/* No shadow */
.no-shadow {
  text-shadow: none;
}
```

---

### Complete Text Styling Example

```css
.article-heading {
  color: #2c3e50;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  line-height: 1.2;
}

.article-body {
  color: #555;
  text-align: justify;
  line-height: 1.8;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  text-indent: 1.5em;
}
```

---

# 13. Fonts

## Font Properties 🖋️

### `font-family`

```css
p {
  /* Font stack — fallback fonts */
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-family: "Courier New", Courier, monospace;
}

/* 
  Font types:
  - serif: Tails wali fonts (Times New Roman)
  - sans-serif: Bina tails ke (Arial, Helvetica)
  - monospace: Sab letters same width (Courier)
  - cursive: Handwriting style
  - fantasy: Decorative fonts
*/
```

---

### `font-size`

```css
p {
  font-size: 16px;        /* Pixels */
  font-size: 1rem;        /* Root em (recommended!) */
  font-size: 1.2em;       /* Parent relative */
  font-size: large;       /* Keyword */
  font-size: 120%;        /* Percentage */
}

/* Sizing guide */
/* 
  h1: 2rem (32px)
  h2: 1.75rem (28px)
  h3: 1.5rem (24px)
  h4: 1.25rem (20px)
  body: 1rem (16px)
  small: 0.875rem (14px)
*/
```

---

### `font-weight`

```css
p {
  font-weight: normal;    /* Same as 400 */
  font-weight: bold;      /* Same as 700 */
  font-weight: lighter;   /* Parent se lighter */
  font-weight: bolder;    /* Parent se heavier */
  
  /* Numeric values */
  font-weight: 100;  /* Thin */
  font-weight: 200;  /* Extra Light */
  font-weight: 300;  /* Light */
  font-weight: 400;  /* Normal */
  font-weight: 500;  /* Medium */
  font-weight: 600;  /* Semi Bold */
  font-weight: 700;  /* Bold */
  font-weight: 800;  /* Extra Bold */
  font-weight: 900;  /* Black/Heavy */
}
```

---

### `font-style`

```css
p {
  font-style: normal;
  font-style: italic;   /* Italic */
  font-style: oblique;  /* Slightly slanted */
}
```

---

### Google Fonts Integration 🌐

```html
<!-- Step 1: HTML <head> mein link add karo -->
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
</head>
```

```css
/* Step 2: CSS mein use karo */
body {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}
```

---

### Font Shorthand

```css
/* font: style variant weight size/line-height family */
p {
  font: italic bold 16px/1.5 "Helvetica Neue", sans-serif;
}
```

---

### Popular Font Combinations 💅

```css
/* Professional / Corporate */
body { font-family: 'Inter', sans-serif; }
h1   { font-family: 'Playfair Display', serif; }

/* Modern / Tech */
body { font-family: 'Roboto', sans-serif; }
code { font-family: 'Fira Code', monospace; }

/* Elegant / Blog */
body { font-family: 'Lato', sans-serif; }
h1   { font-family: 'Merriweather', serif; }
```

---

# 14. Links Styling

## Link States 🔗

**CSS mein links ke 5 states hote hain:**

```css
/* Unvisited link */
a:link {
  color: #3498db;
  text-decoration: none;
}

/* Visited link */
a:visited {
  color: #8e44ad;
}

/* Mouse hover */
a:hover {
  color: #2980b9;
  text-decoration: underline;
}

/* Active (click hone par) */
a:active {
  color: #e74c3c;
}

/* Focus (tab se navigate karne par) */
a:focus {
  outline: 2px solid #3498db;
  outline-offset: 2px;
}
```

> 📌 **Order Yaad Rakhne ka Trick:** **L**o**V**e **HA**te (Link, Visited, Hover, Active)

---

### Button-style Links

```css
.btn {
  display: inline-block;
  padding: 12px 28px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2980b9;
}

.btn:active {
  transform: translateY(1px);
}
```

---

# 15. Lists Styling

## List Properties 📋

```css
/* Unordered List */
ul {
  list-style-type: disc;     /* ● Default */
  list-style-type: circle;   /* ○ */
  list-style-type: square;   /* ■ */
  list-style-type: none;     /* No bullet */
}

/* Ordered List */
ol {
  list-style-type: decimal;       /* 1, 2, 3... */
  list-style-type: decimal-leading-zero; /* 01, 02... */
  list-style-type: lower-roman;   /* i, ii, iii */
  list-style-type: upper-roman;   /* I, II, III */
  list-style-type: lower-alpha;   /* a, b, c */
  list-style-type: upper-alpha;   /* A, B, C */
}

/* Custom marker image */
ul {
  list-style-image: url('bullet.png');
}

/* Marker position */
ul {
  list-style-position: inside;   /* Bullet inside content area */
  list-style-position: outside;  /* Bullet outside (default) */
}
```

---

### Navigation Menu with Lists

```css
/* Horizontal Navigation */
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s;
}

nav ul li a:hover {
  background-color: #3498db;
  color: white;
}
```

---

# 16. Tables Styling

## Table Properties 🗃️

```html
<!-- HTML Table Structure -->
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rahul</td>
      <td>25</td>
      <td>Delhi</td>
    </tr>
  </tbody>
</table>
```

```css
/* Basic Table Styling */
table {
  width: 100%;
  border-collapse: collapse;   /* Cell borders collapse into one */
  border-spacing: 0;
}

th, td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #3498db;
  color: white;
  font-weight: 600;
}

/* Zebra Striping */
tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

/* Hover effect */
tbody tr:hover {
  background-color: #e8f4f8;
}
```

---

### `border-collapse` — Important Property

```
border-collapse: separate (default):      border-collapse: collapse:
┌───┬───┬───┐                             ┌───┬───┬───┐
│   │   │   │                             │   │   │   │
├───┼───┼───┤  ← Double borders           ├───┼───┼───┤ ← Single border
│   │   │   │                             │   │   │   │
└───┴───┴───┘                             └───┴───┴───┘
```

---

# 17. Display Property

## Display — Elements ko Kaise Show Kare 📺

### Block vs Inline vs Inline-Block

```
BLOCK elements:
┌─────────────────────────────────┐
│ div, p, h1-h6, section, article │  ← Full width lete hain, new line se
└─────────────────────────────────┘

INLINE elements:
┌──────┐ ┌────┐ ┌──────────┐
│ span │ │ a  │ │  strong  │  ← Content ki width, side-by-side
└──────┘ └────┘ └──────────┘

INLINE-BLOCK:
┌────────┐ ┌────────┐ ┌────────┐
│ Box 1  │ │ Box 2  │ │ Box 3  │  ← Side-by-side + width/height set kar sakte ho
│ 100px  │ │ 100px  │ │ 100px  │
└────────┘ └────────┘ └────────┘
```

```css
/* block — poori width leta hai, neeche se start hota hai */
.block {
  display: block;
  width: 50%;  /* Set kar sakte ho */
  margin: 10px 0;
}

/* inline — content jitna space, width/height set nahi hoti */
.inline {
  display: inline;
  /* width: 100px; ← Kaam NAHI karega */
  padding: 5px 10px; /* Left-right kaam karega */
}

/* inline-block — inline ki tarah side-by-side + block ki tarah sizing */
.inline-block {
  display: inline-block;
  width: 150px;      /* Kaam KAREGA */
  height: 100px;     /* Kaam KAREGA */
  padding: 10px;
  vertical-align: top;
}

/* none — element ko completely hide karo (space nahi lega) */
.hidden {
  display: none;
}

/* flex aur grid aage padho */
.flex-container { display: flex; }
.grid-container { display: grid; }
```

### `visibility: hidden` vs `display: none`

```css
/* visibility: hidden — space rehta hai, element nahi dikhta */
.invisible {
  visibility: hidden;
  /* ┌─────────────────┐
     │ [INVISIBLE BOX] │  ← Space hai, box nahi dikhta
     └─────────────────┘ */
}

/* display: none — na space na element */
.gone {
  display: none;
  /* (Kuch nahi dikhta, space bhi nahi) */
}
```

---

# 18. Position Property

## Positioning Elements 📍

### Static (Default)

```css
.box {
  position: static;  /* Default — normal flow mein */
  /* top, left, right, bottom kaam nahi karte */
}
```

---

### Relative

```css
.box {
  position: relative;
  top: 20px;    /* Apni normal position se 20px neeche */
  left: 30px;   /* Apni normal position se 30px right */
  /* Original space bana rehta hai */
}
```

```
Normal Flow:      Relative positioned:
┌────────┐        ┌────────┐  ← Original space
│ Box 1  │        │(empty) │
├────────┤              ┌────────┐
│ Box 2  │              │ Box 2  │  ← Shifted
├────────┤        ├────────┤
│ Box 3  │        │ Box 3  │
└────────┘        └────────┘
```

---

### Absolute

```css
.parent {
  position: relative;  /* Absolute child ka reference point */
}

.child {
  position: absolute;
  top: 10px;
  right: 20px;
  /* Normal flow se hat jaata hai — space nahi lega */
  /* Nearest positioned ancestor ke relative hoga */
}
```

```
┌──────────────────────────────┐
│ parent (position: relative)  │
│                   ┌────────┐ │
│                   │ child  │ │ ← top:10, right:20
│                   │absolute│ │
│                   └────────┘ │
└──────────────────────────────┘
```

---

### Fixed

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 1000;
  /* Scroll karo — navbar wahan ka wahan rahega! */
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
```

---

### Sticky

```css
/* Scroll hone tak normal flow mein, ek point ke baad fixed ho jata hai */
.sticky-header {
  position: sticky;
  top: 0;           /* Jab 0px se upar jayega toh stick kar jaayega */
  background: white;
  z-index: 100;
  padding: 10px;
}
```

```
Sticky Element Behavior:
Before reaching top:          After reaching top:
┌─────────────────────┐       ┌─────────────────────┐
│   Page Header       │       │ ┌─────────────────┐  │
│                     │       │ │ STICKY NAV ████ │← │ Stuck to top!
│  ┌───────────────┐  │       │ └─────────────────┘  │
│  │  Sticky Nav   │  │       │                      │
│  └───────────────┘  │       │   Content...         │
│  Content below...   │       └─────────────────────┘
└─────────────────────┘
```

---

### Position Summary Table

| Value | Normal Flow? | Reference | Use Case |
|-------|-------------|-----------|----------|
| `static` | ✅ Yes | None | Default |
| `relative` | ✅ Yes (space bana rehta) | Self | Small adjustments |
| `absolute` | ❌ No | Nearest positioned parent | Tooltips, dropdowns |
| `fixed` | ❌ No | Viewport | Navbar, back-to-top |
| `sticky` | ✅ Yes | Scroll container | Sticky headers |

---

### 🧪 Practice Exercise 4 — Position Challenge

```css
/* Task: Ek card banao jisme:
   1. Ek badge "NEW" top-right corner pe ho
   2. Ek bottom overlay hover pe aaye
*/

.card {
  position: relative;
  width: 250px;
  /* ... */
}

.badge {
  position: absolute;
  /* Aapko complete karna hai */
}
```

---

# 19. Float and Clear

## Float Property 🌊

> 📌 **Note:** Float ek purani technique hai. Aaj ke projects mein **Flexbox ya Grid use karo**. Lekin legacy code samajhne ke liye jaanna zaruri hai.

```css
img {
  float: left;   /* Image left, text wrap right */
  float: right;  /* Image right, text wrap left */
  float: none;   /* Default */
}
```

```
float: left;              float: right;
┌────────┐                          ┌────────┐
│ IMAGE  │ Text wraps               │ IMAGE  │
│        │ around the    Text wraps │        │
│        │ right side    left side  │        │
└────────┘                          └────────┘
```

### `clear` Property

```css
/* Float ke baad normal flow resume karna */
.clear-div {
  clear: left;   /* Left floats ke baad */
  clear: right;  /* Right floats ke baad */
  clear: both;   /* Dono ke baad */
}

/* Clearfix Hack — Parent ke andar floated children */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

---

# 20. Overflow

## Overflow — Content Overflow Hone Par 📦➡️

```css
.box {
  width: 200px;
  height: 100px;
  
  overflow: visible;  /* Default — content bahar dikhega */
  overflow: hidden;   /* Bahar wala cut ho jayega */
  overflow: scroll;   /* Hamesha scrollbar dikhega */
  overflow: auto;     /* Zarurat padne par scrollbar */
  
  /* Individual axes */
  overflow-x: hidden; /* Horizontal overflow hide */
  overflow-y: scroll; /* Vertical scroll only */
}
```

```
overflow: visible     overflow: hidden     overflow: scroll
┌──────────────┐      ┌──────────────┐     ┌──────────────┐
│ Content      │      │ Content      │     │ Content    ↕ │
│ overflows    │      │ is clipped   │     │ scrolls    ─ │
└──────────────┘      └──────────────┘     └──────────────┘
          ↓ extra text   (extra cut)          (scrollbar)
          extra text
```

### Real-world Use Cases

```css
/* Image gallery — crop images */
.image-container {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
}

/* Scrollable chat window */
.chat-messages {
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Prevent horizontal scroll on mobile */
body {
  overflow-x: hidden;
}
```

---

# 21. Z-Index

## Z-Index — Layers ka Control 🏔️

**Elements ko front ya back mein rkahne ke liye (3D layering)**

```css
/* 
  Z-axis diagram:
  
  Screen ──► User
  
  z:1  z:2  z:3  z:4
  ┌──┐
  │  │ ┌──┐
  │  │ │  │ ┌──┐
  │  │ │  │ │  │ ← z:4 (sabse aage)
  │  │ │  │ │  │
  └──┘ └──┘ └──┘
*/

.bottom-layer {
  position: relative; /* z-index ke liye position chahiye */
  z-index: 1;
}

.middle-layer {
  position: relative;
  z-index: 2;
}

.top-layer {
  position: relative;
  z-index: 3; /* Sabse upar */
}
```

```css
/* Real-world Examples */
.modal-backdrop {
  position: fixed;
  z-index: 998;
}

.modal {
  position: fixed;
  z-index: 999;  /* Backdrop ke upar */
}

.tooltip {
  position: absolute;
  z-index: 1000;
}

.navbar {
  position: sticky;
  z-index: 100;
}
```

> ⚠️ **Warning:** Bahut high z-index values (9999, 99999) avoid karo. Ek systematic scale use karo:

```css
/* Z-Index Scale — Best Practice */
:root {
  --z-dropdown:  100;
  --z-sticky:    200;
  --z-fixed:     300;
  --z-modal-bg:  400;
  --z-modal:     500;
  --z-popover:   600;
  --z-tooltip:   700;
}
```

---

# 22. CSS Units

## Units ka Overview 📏

```
CSS Units
    │
    ├── Absolute (Fixed size)
    │   ├── px (pixels)
    │   ├── pt (points)
    │   └── cm, mm, in
    │
    └── Relative (Context-dependent)
        ├── em  (parent relative)
        ├── rem (root relative)
        ├── %   (parent ke percentage)
        ├── vw  (viewport width)
        ├── vh  (viewport height)
        ├── vmin, vmax
        └── ch, ex
```

---

### `px` — Pixels

```css
/* Fixed unit — screen ke pixels */
.box {
  width: 300px;
  font-size: 16px;
  border: 2px solid;
}
/* Problem: Mobile pe zoom nahi hota agar system font size change ho */
```

---

### `em` — Relative to Parent

```css
/* Parent element ke font-size ke relative */
.parent {
  font-size: 16px;
}

.child {
  font-size: 1.5em; /* = 16 × 1.5 = 24px */
  padding: 2em;     /* = 24 × 2 = 48px (apne font-size ke relative) */
}
```

> ⚠️ **Problem:** Nested elements mein compounding effect aata hai!

---

### `rem` — Relative to Root

```css
/* Root element (<html>) ke font-size ke relative */
html { font-size: 16px; } /* Default */

h1 { font-size: 2rem; }    /* = 32px — always! */
p  { font-size: 1rem; }    /* = 16px — always! */
.small { font-size: 0.875rem; } /* = 14px */

/* 
  rem ka fayda:
  User apne browser ka font size change kare,
  toh sab scale ho jayega proportionally!
*/
```

---

### `%` — Percentage

```css
/* Parent element ke relative */
.parent {
  width: 800px;
}

.child {
  width: 50%;      /* = 400px */
  height: 100%;    /* Parent ki poori height */
  font-size: 120%; /* Parent font-size ka 120% */
}
```

---

### `vw` and `vh` — Viewport Units

```css
/* vw = 1% of viewport width */
/* vh = 1% of viewport height */

.hero {
  width: 100vw;   /* Full browser width */
  height: 100vh;  /* Full browser height */
}

.half-screen {
  width: 50vw;
  height: 50vh;
}

/* Responsive typography */
h1 {
  font-size: 5vw;  /* Screen ke saath scale hoga */
}
```

---

### Units Comparison Table

| Unit | Full Form | Relative To | Best For |
|------|-----------|-------------|----------|
| `px` | Pixels | Screen | Borders, fine details |
| `em` | em (typography) | Parent font-size | Padding, margins |
| `rem` | Root em | Root font-size | Typography, spacing |
| `%` | Percent | Parent element | Layouts, widths |
| `vw` | Viewport Width | Browser width | Full-width sections |
| `vh` | Viewport Height | Browser height | Hero sections |
| `vmin` | Viewport Min | Smaller of vw/vh | Responsive shapes |

---

### 🧪 Practice Exercise 5 — Units

```css
/*
Task: Ek card banao with:
- Width: 90% (responsive) but max 400px
- Padding: 1.5rem
- Font-size: 1rem
- Heading: 1.5rem
- Minimum height: 50vh
*/
```

---

# 23. Flexbox

## Flexbox — 1D Layout System 💪

**Flexbox ek powerful layout system hai jo ek direction (row ya column) mein items arrange karta hai.**

```
Flexbox Concept:
┌─────────────────────────────────────────────┐
│  FLEX CONTAINER (display: flex)             │
│                                             │
│  ┌────────┐  ┌────────┐  ┌────────┐        │
│  │Item 1  │  │Item 2  │  │Item 3  │ →→→→   │
│  └────────┘  └────────┘  └────────┘        │
│                                             │
│  Main Axis (row direction) →→→→→→→→→→→     │
│  Cross Axis ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  │
└─────────────────────────────────────────────┘
```

---

## Container Properties

### `display: flex`

```css
.container {
  display: flex;  /* Flex container activate karo */
}
```

---

### `flex-direction`

```css
.container {
  flex-direction: row;            /* Default — left se right */
  flex-direction: row-reverse;    /* Right se left */
  flex-direction: column;         /* Top se bottom */
  flex-direction: column-reverse; /* Bottom se top */
}
```

```
row:               column:
┌──┐ ┌──┐ ┌──┐    ┌──┐
│1 │ │2 │ │3 │    │1 │
└──┘ └──┘ └──┘    └──┘
                   ┌──┐
                   │2 │
                   └──┘
                   ┌──┐
                   │3 │
                   └──┘
```

---

### `justify-content` — Main Axis Alignment

```css
.container {
  /* Main axis pe alignment */
  justify-content: flex-start;     /* Default — left */
  justify-content: flex-end;       /* Right */
  justify-content: center;         /* Center */
  justify-content: space-between;  /* Items ke beech space */
  justify-content: space-around;   /* Items ke around space */
  justify-content: space-evenly;   /* Perfectly even space */
}
```

```
flex-start:   [1][2][3]         _ _ _
center:       _ [1][2][3] _     _ _ _
flex-end:     _ _ _ [1][2][3]
space-between:[1] _ [2] _ [3]
space-around: _[1]_ _[2]_ _[3]_
space-evenly: _[1]_[2]_[3]_
```

---

### `align-items` — Cross Axis Alignment

```css
.container {
  height: 200px; /* Cross axis visible hone ke liye height chahiye */
  
  align-items: stretch;     /* Default — full height stretch */
  align-items: flex-start;  /* Top */
  align-items: flex-end;    /* Bottom */
  align-items: center;      /* Middle */
  align-items: baseline;    /* Text baseline pe */
}
```

---

### `flex-wrap`

```css
.container {
  flex-wrap: nowrap;   /* Default — single line, overflow hoga */
  flex-wrap: wrap;     /* Multiple lines — responsive! */
  flex-wrap: wrap-reverse;
}
```

---

### `gap`

```css
.container {
  gap: 20px;           /* Row aur column dono */
  gap: 10px 20px;      /* row-gap column-gap */
  row-gap: 10px;
  column-gap: 20px;
}
```

---

## Item Properties

### `flex-grow`, `flex-shrink`, `flex-basis`

```css
.item {
  /* flex: grow shrink basis */
  flex: 1;        /* Shorthand — equal space le */
  flex: 2;        /* Doble space le */
  flex: 0 1 auto; /* Default */
  
  flex-grow: 1;   /* Available space kitna lo (0 = mat lo) */
  flex-shrink: 1; /* Space kam hone par kitna shrink karo (0 = mat karo) */
  flex-basis: 200px; /* Default size */
}
```

```
flex-grow example (container: 600px):
┌──────────────────────────────────────────────┐
│ ┌────────────────┐ ┌────────────────────────┐│
│ │  item (flex:1) │ │    item (flex:2)        ││
│ │    200px       │ │         400px           ││
│ └────────────────┘ └────────────────────────┘│
└──────────────────────────────────────────────┘
```

---

### `align-self`

```css
/* Individual item ka alignment override */
.item-special {
  align-self: center;     /* Is item ko center karo */
  align-self: flex-end;   /* Is item ko bottom pe */
  align-self: stretch;
}
```

---

### `order`

```css
/* Visual order change karo (DOM order same rahega) */
.item-1 { order: 3; }  /* Last dikhega */
.item-2 { order: 1; }  /* First dikhega */
.item-3 { order: 2; }  /* Second dikhega */
```

---

## Real-world Flexbox Examples

### Perfect Center karna

```css
/* Most common use! */
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

### Responsive Card Layout

```css
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, minimum 300px */
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
```

### Navbar

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #333;
}

.nav-logo { color: white; font-size: 1.5rem; }
.nav-links { display: flex; gap: 24px; list-style: none; }
.nav-links a { color: white; text-decoration: none; }
```

### Holy Grail Layout

```css
/* Header, Sidebar, Content, Footer */
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header, footer { flex-shrink: 0; }

.main-content {
  display: flex;
  flex: 1;
}

aside  { flex: 0 0 250px; } /* Fixed sidebar */
main   { flex: 1; }          /* Flexible content */
```

---

### 🧪 Flexbox Practice Tasks

```
Task 1: Navigation Bar
- Logo left pe, links right pe
- Items vertically centered

Task 2: Card Grid
- 3 equal cards per row
- Gap: 20px
- Wrap on smaller screens

Task 3: Login Form Center
- Form ko page ke bilkul center pe rakho
- (justify-content: center + align-items: center)

Task 4: Footer Layout
- 3 columns side by side
- Last column right-align ho
```

---

# 24. CSS Grid

## CSS Grid — 2D Layout System 🗺️

**Grid 2D layouts banane ke liye hai — rows AND columns dono ek saath control karo.**

```
Grid Concept:
┌──────────────────────────────────────────────┐
│  GRID CONTAINER (display: grid)              │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Cell 1,1 │  │ Cell 1,2 │  │ Cell 1,3 │   │
│  ├──────────┤  ├──────────┤  ├──────────┤   │
│  │ Cell 2,1 │  │ Cell 2,2 │  │ Cell 2,3 │   │
│  ├──────────┤  ├──────────┤  ├──────────┤   │
│  │ Cell 3,1 │  │ Cell 3,2 │  │ Cell 3,3 │   │
│  └──────────┘  └──────────┘  └──────────┘   │
│                                              │
└──────────────────────────────────────────────┘
         ↑ Columns ↑              ↑ Rows ↑
```

---

## Grid Container

### `grid-template-columns`

```css
.container {
  display: grid;
  
  /* Fixed columns */
  grid-template-columns: 200px 300px 200px;
  
  /* Fraction units (fr) */
  grid-template-columns: 1fr 2fr 1fr; /* 25% 50% 25% */
  
  /* Equal columns */
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  
  /* Auto-fill responsive */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  
  /* Mixed */
  grid-template-columns: 200px 1fr 100px;
}
```

---

### `grid-template-rows`

```css
.container {
  grid-template-rows: 100px 1fr 60px;
  grid-template-rows: repeat(3, 200px);
  grid-template-rows: auto 1fr auto;
}
```

---

### `gap`

```css
.container {
  gap: 20px;          /* Row aur column dono */
  row-gap: 10px;
  column-gap: 20px;
}
```

---

### `justify-items` aur `align-items`

```css
.container {
  justify-items: start | end | center | stretch;  /* X-axis per cell */
  align-items: start | end | center | stretch;    /* Y-axis per cell */
  place-items: center; /* Shorthand — dono center */
}
```

---

## Grid Items

### `grid-column` aur `grid-row`

```css
.item {
  /* column: start / end */
  grid-column: 1 / 3;  /* Column 1 se start, column 3 pe end */
  grid-column: 1 / -1; /* Poori row span */
  grid-column: span 2; /* 2 columns span karo */
  
  /* row: start / end */
  grid-row: 1 / 3;     /* 2 rows span karo */
  grid-row: span 3;
}
```

---

### Grid Template Areas 🏗️

```css
.page {
  display: grid;
  grid-template-areas:
    "header  header  header"
    "sidebar content content"
    "sidebar content content"
    "footer  footer  footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 80px 1fr 1fr 60px;
  min-height: 100vh;
}

header  { grid-area: header; }
.sidebar{ grid-area: sidebar; }
main    { grid-area: content; }
footer  { grid-area: footer; }
```

```
Visual layout:
┌─────────────────────────────┐
│         HEADER              │
├──────────┬──────────────────┤
│          │                  │
│ SIDEBAR  │    CONTENT       │
│          │                  │
│          │                  │
├──────────┴──────────────────┤
│         FOOTER              │
└─────────────────────────────┘
```

---

## Real-world Grid Layouts

### Photo Gallery

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

/* Featured image */
.gallery .featured {
  grid-column: span 2;
  grid-row: span 2;
}
```

### Dashboard Layout

```css
.dashboard {
  display: grid;
  grid-template-areas:
    "nav    nav    nav"
    "sidebar stats stats"
    "sidebar chart chart"
    "sidebar table table";
  grid-template-columns: 240px 1fr 1fr;
  grid-template-rows: 60px auto auto 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
}
```

---

## Flexbox vs Grid

| Feature | Flexbox | Grid |
|---------|---------|------|
| Dimension | 1D (row ya column) | 2D (rows AND columns) |
| Content-driven? | ✅ Yes | ❌ No (layout-driven) |
| Best for | Navigation, cards, centering | Page layouts, galleries |
| Browser support | Excellent | Excellent |
| Learning curve | Easy | Medium |

> 💡 **Rule of Thumb:** Small components = Flexbox. Page layouts = Grid.

---

### 🧪 Grid Practice Tasks

```
Task 1: 3-column blog layout
- Left: sidebar (250px)
- Center: main content (1fr)
- Right: ads column (200px)

Task 2: Instagram-style grid
- 3 equal columns
- Square images
- 3px gap

Task 3: Magazine layout
- Featured article spans 2 columns
- 4 small articles below
```

---

# 25. Responsive Web Design

## Responsive Design — Har Device Pe Fit 📱💻🖥️

**Ek hi website jo mobile, tablet, aur desktop — sab pe achhi dikhti ho.**

```
Breakpoints concept:
Mobile  ──────────────────────────────► Desktop
320px    480px    768px    1024px    1200px+
  │        │        │        │         │
Small   Small    Tablet  Laptop    Desktop
phone   phone
```

---

## Media Queries

```css
/* Syntax */
@media (condition) {
  /* Styles for that condition */
}

/* Screen width se */
@media (max-width: 768px) {
  /* 768px se chota screen pe */
  body { font-size: 14px; }
}

@media (min-width: 768px) {
  /* 768px se bada screen pe */
  .container { max-width: 1200px; }
}

/* Range */
@media (min-width: 480px) and (max-width: 768px) {
  /* Sirf is range mein */
}

/* Orientation */
@media (orientation: landscape) { /* Landscape mode */ }
@media (orientation: portrait)  { /* Portrait mode */ }

/* Print */
@media print {
  nav, footer { display: none; }
  body { font-size: 12pt; }
}
```

---

## Mobile First Design 📱

**Mobile first = Pehle mobile ke liye likho, phir larger screens ke liye override karo.**

```css
/* 
  MOBILE FIRST APPROACH (Recommended!)
  
  Base styles = mobile styles
  Media queries = progressive enhancement
*/

/* Base (Mobile) Styles */
.container {
  width: 100%;
  padding: 0 16px;
}

.navbar {
  flex-direction: column;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
}

/* Tablet (≥768px) */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
  
  .navbar {
    flex-direction: row;
  }
  
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* Desktop (≥1024px) */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
  
  .card-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
  }
}

/* Large Desktop (≥1200px) */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
```

---

## Common Breakpoints

| Name | Min Width | Max Width | Devices |
|------|-----------|-----------|---------|
| xs | 0 | 575px | Small phones |
| sm | 576px | 767px | Phones |
| md | 768px | 991px | Tablets |
| lg | 992px | 1199px | Laptops |
| xl | 1200px | 1399px | Desktops |
| xxl | 1400px | — | Large screens |

---

### Responsive Image

```css
img {
  max-width: 100%; /* Kabhi parent se bada nahi hoga */
  height: auto;    /* Aspect ratio maintain */
}

/* Object-fit for fixed-size containers */
.thumbnail {
  width: 300px;
  height: 200px;
  object-fit: cover;    /* Crop to fit */
  object-position: center;
}
```

---

### Responsive Typography

```css
/* Method 1: Media queries */
body { font-size: 14px; }
@media (min-width: 768px) { body { font-size: 16px; } }
@media (min-width: 1200px) { body { font-size: 18px; } }

/* Method 2: clamp() — Modern CSS */
body {
  font-size: clamp(14px, 2.5vw, 18px);
  /* Min: 14px, Preferred: 2.5vw, Max: 18px */
}
```

---

### 🧪 Responsive Practice Task

```css
/*
Task: Responsive Portfolio Grid
- Mobile: 1 column
- Tablet (≥600px): 2 columns
- Desktop (≥900px): 3 columns
- Gap: 20px
- Images: 100% width, aspect-ratio maintained
*/
```

---

# 26. Pseudo Classes

## Pseudo Classes — Element ki State 🎭

**Pseudo classes `:` (single colon) se start hoti hain. Yeh element ki state ya position batati hain.**

```css
selector:pseudo-class { ... }
```

---

### User Action Pseudo Classes

```css
/* Hover — mouse element pe aaye */
a:hover { color: blue; }
button:hover { background-color: darkblue; }
.card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

/* Focus — keyboard ya click se focus ho */
input:focus { border-color: blue; outline: none; }
a:focus { outline: 2px solid blue; outline-offset: 3px; }

/* Active — press/click hote waqt */
button:active { transform: scale(0.98); }

/* Visited — already visited link */
a:visited { color: purple; }
```

---

### Structural Pseudo Classes

```css
/* First aur Last child */
li:first-child { font-weight: bold; }
li:last-child  { margin-bottom: 0; }

/* nth-child(n) */
li:nth-child(2)      { color: red; }      /* 2nd item */
li:nth-child(odd)    { background: #f5f5f5; } /* 1,3,5... */
li:nth-child(even)   { background: white; }   /* 2,4,6... */
li:nth-child(3n)     { color: blue; }     /* 3,6,9... */
li:nth-child(3n+1)   { color: green; }   /* 1,4,7... */

/* First/Last of type */
p:first-of-type { font-size: 1.2em; }
p:last-of-type  { margin-bottom: 0; }

/* Only child */
p:only-child { color: red; }

/* Not selector */
li:not(:last-child) { border-bottom: 1px solid #ddd; }
input:not([type="submit"]) { border: 1px solid #ccc; }
```

---

### Form Pseudo Classes

```css
input:required    { border-color: red; }
input:optional    { border-color: gray; }
input:valid       { border-color: green; }
input:invalid     { border-color: red; }
input:checked     { accent-color: blue; }
input:disabled    { opacity: 0.5; cursor: not-allowed; }
input:placeholder-shown { border-style: dashed; }
input:focus-within { ... }

/* :is() — Multiple selectors shorthand */
:is(h1, h2, h3, h4) { font-family: 'Poppins', sans-serif; }
```

---

### `nth-child` Visual Guide

```
List items:
┌────────────────┐
│ Item 1  ← :first-child, :nth-child(1), :nth-child(odd) │
├────────────────┤
│ Item 2  ← :nth-child(2), :nth-child(even)              │
├────────────────┤
│ Item 3  ← :nth-child(3), :nth-child(odd)               │
├────────────────┤
│ Item 4  ← :nth-child(4), :nth-child(even)              │
├────────────────┤
│ Item 5  ← :nth-child(5), :last-child, :nth-child(odd)  │
└────────────────┘
```

---

# 27. Pseudo Elements

## Pseudo Elements — Element ke Parts 🎨

**Pseudo elements `::` (double colon) se start hote hain. Yeh DOM ke andar virtual elements create karte hain.**

---

### `::before` aur `::after`

```css
/* Content se pehle ya baad mein virtual content add karo */
.quote::before {
  content: '"';          /* Required! */
  font-size: 3rem;
  color: #ccc;
  line-height: 0;
  vertical-align: -0.5em;
}

.quote::after {
  content: '"';
}

/* Required field indicator */
.required::after {
  content: ' *';
  color: red;
}

/* Icon with pseudo element */
.download::before {
  content: '⬇ ';
}

/* Decorative line */
h2::after {
  content: '';  /* Empty but required */
  display: block;
  width: 50px;
  height: 3px;
  background-color: #3498db;
  margin-top: 8px;
}
```

---

### `::first-line` aur `::first-letter`

```css
/* Pehla letter bada karo (Drop Cap) */
p::first-letter {
  font-size: 3em;
  font-weight: bold;
  float: left;
  margin-right: 5px;
  line-height: 0.8;
  color: #3498db;
}

/* Pehli line alag style karo */
p::first-line {
  font-weight: bold;
  color: #333;
  font-variant: small-caps;
}
```

---

### `::placeholder` aur `::selection`

```css
/* Input placeholder text */
input::placeholder {
  color: #aaa;
  font-style: italic;
  font-size: 0.9rem;
}

/* Text selection highlight */
::selection {
  background-color: #3498db;
  color: white;
}

p::selection {
  background-color: yellow;
  color: black;
}
```

---

### Practical `::before` / `::after` Uses

```css
/* Tooltip */
.tooltip {
  position: relative;
  cursor: help;
}

.tooltip::after {
  content: attr(data-tip); /* HTML attribute se content le */
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover::after {
  opacity: 1;
}

/* Badge counter */
.notification {
  position: relative;
}

.notification::after {
  content: '3';
  position: absolute;
  top: -8px;
  right: -8px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

# 28. CSS Variables

## CSS Variables (Custom Properties) — Reusable Values 🔄

**CSS Variables ek jagah value store karo, har jagah use karo. Change karo ek jagah, update poori website!**

---

### Variables Create Karo

```css
/* :root mein define karo — global scope */
:root {
  /* Colors */
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --danger-color: #e74c3c;
  --text-color: #333333;
  --bg-color: #ffffff;
  
  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --font-size-base: 16px;
  --line-height: 1.6;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  
  /* Shadow */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  
  /* Transitions */
  --transition: all 0.3s ease;
}
```

---

### Variables Use Karo

```css
/* var(--variable-name) */
.button {
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-family: var(--font-primary);
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.button:hover {
  background-color: #2980b9;  /* Ya ek aur variable */
  box-shadow: var(--shadow-md);
}

.card {
  background: var(--bg-color);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

/* Fallback value */
.text {
  color: var(--text-color, #333); /* Agar variable nahi mila toh #333 */
}
```

---

### Theme Switching 🌙☀️

```css
/* Light Theme (default) */
:root {
  --bg: #ffffff;
  --text: #333333;
  --primary: #3498db;
  --card-bg: #f8f9fa;
  --border: #e0e0e0;
}

/* Dark Theme */
[data-theme="dark"] {
  --bg: #1a1a2e;
  --text: #e0e0e0;
  --primary: #4da3ff;
  --card-bg: #16213e;
  --border: #333;
}

/* Use karo */
body {
  background-color: var(--bg);
  color: var(--text);
}

.card {
  background-color: var(--card-bg);
  border: 1px solid var(--border);
}
```

```javascript
// JavaScript se theme toggle karo
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.dataset.theme = 
    document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});
```

---

### Local Variables

```css
/* Component-level variables */
.alert {
  --alert-color: var(--primary-color);
  --alert-bg: rgba(52, 152, 219, 0.1);
  
  color: var(--alert-color);
  background-color: var(--alert-bg);
  border: 1px solid var(--alert-color);
  padding: 12px 16px;
  border-radius: var(--radius-md);
}

.alert.danger {
  --alert-color: var(--danger-color);
  --alert-bg: rgba(231, 76, 60, 0.1);
}

.alert.success {
  --alert-color: var(--secondary-color);
  --alert-bg: rgba(46, 204, 113, 0.1);
}
```

---

# 29. Transforms

## CSS Transforms — Elements ko Transform Karo 🔄

**Transforms se elements ko move, rotate, scale, ya skew kar sakte ho BINA layout ko affect kiye.**

```css
.element {
  transform: function(value);
  transform: function1() function2(); /* Multiple transforms */
}
```

---

### `translate()` — Move karo

```css
.box {
  transform: translate(50px, 100px);  /* X: 50px right, Y: 100px down */
  transform: translateX(50px);        /* Sirf horizontal */
  transform: translateY(-20px);       /* Sirf vertical (upar) */
  transform: translate(-50%, -50%);   /* Centering trick! */
}

/* Perfect center karne ka classic trick */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

---

### `rotate()` — Ghumao

```css
.box {
  transform: rotate(45deg);    /* 45 degree clockwise */
  transform: rotate(-90deg);   /* 90 degree counter-clockwise */
  transform: rotate(180deg);   /* Ulta */
  transform: rotate(1turn);    /* Ek poori revolution */
  
  transform: rotateX(45deg);   /* 3D X-axis */
  transform: rotateY(45deg);   /* 3D Y-axis */
  transform: rotateZ(45deg);   /* Same as rotate() */
}
```

---

### `scale()` — Size badlo

```css
.box {
  transform: scale(1.5);      /* 150% size */
  transform: scale(0.5);      /* 50% size */
  transform: scale(1.2, 0.8); /* X: 120%, Y: 80% */
  transform: scaleX(2);       /* Double width */
  transform: scaleY(0.5);     /* Half height */
}

/* Hover zoom effect */
.card:hover {
  transform: scale(1.05);
}
```

---

### `skew()` — Teda karo

```css
.box {
  transform: skew(20deg);         /* X-axis skew */
  transform: skew(20deg, 10deg);  /* X and Y */
  transform: skewX(30deg);
  transform: skewY(15deg);
}

/* Decorative use */
.banner {
  transform: skewX(-5deg);
}
```

---

### `transform-origin`

```css
/* Transform ka center point */
.box {
  transform-origin: center;          /* Default */
  transform-origin: top left;        /* Corner se rotate */
  transform-origin: 50% 50%;
  transform-origin: 100% 0%;         /* Top right */
  transform-origin: 0 0;             /* Top left */
}

/* Practical: card flip */
.card {
  transform-origin: left center; /* Yahan se flip hoga */
  transform: rotateY(180deg);
}
```

---

### Multiple Transforms

```css
/* Multiple transforms ek saath */
.box:hover {
  transform: translateY(-5px) scale(1.02) rotate(2deg);
}

/* 3D Transform */
.cube {
  transform: perspective(500px) rotateX(30deg) rotateY(30deg);
}
```

---

# 30. Transitions

## CSS Transitions — Smooth Changes ✨

**Ek state se dusre state mein smoothly jaana (like hover effects)**

```css
/* transition: property duration timing-function delay */

.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: darkblue;
  /* 0.3s mein smoothly change hoga */
}
```

---

### Transition Properties

```css
.element {
  /* Single property */
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  
  /* Shorthand */
  transition: background-color 0.3s ease 0s;
  
  /* All properties */
  transition: all 0.3s ease;
  
  /* Multiple properties */
  transition: 
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
```

---

### Timing Functions

```css
.element {
  /* Predefined */
  transition-timing-function: ease;        /* Start fast, end slow (default) */
  transition-timing-function: linear;      /* Same speed throughout */
  transition-timing-function: ease-in;     /* Start slow */
  transition-timing-function: ease-out;    /* End slow */
  transition-timing-function: ease-in-out; /* Start and end slow */
  
  /* Custom cubic-bezier */
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  
  /* Steps */
  transition-timing-function: steps(5, end);
}
```

---

### Practical Transition Examples

```css
/* Card hover lift */
.card {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

/* Button press */
.btn {
  transform: scale(1);
  transition: transform 0.1s ease, background-color 0.2s ease;
}

.btn:hover { background-color: #2980b9; }
.btn:active { transform: scale(0.97); }

/* Nav link underline */
.nav-link {
  position: relative;
  text-decoration: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #3498db;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Smooth color change */
.theme-toggle {
  background: white;
  color: black;
  transition: background-color 0.4s ease, color 0.4s ease;
}

.dark .theme-toggle {
  background: #333;
  color: white;
}
```

---

# 31. Animations

## CSS Animations — Auto-play Effects 🎬

**Transitions sirf hover pe kaam karti hain. Animations automatically play hoti hain!**

---

### `@keyframes` — Animation Define Karo

```css
/* @keyframes animation-name { ... } */

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Ya percentage use karo */
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Multiple steps */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-30px); }
  50% { transform: translateY(-15px); }
  75% { transform: translateY(-22px); }
}
```

---

### Animation Properties

```css
.element {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0.5s;
  animation-iteration-count: 1;        /* Ya infinite */
  animation-direction: normal;          /* reverse, alternate */
  animation-fill-mode: forwards;        /* Animation end pe state rakho */
  animation-play-state: running;        /* Ya paused */
  
  /* Shorthand */
  animation: fadeIn 1s ease 0.5s 1 normal forwards;
  
  /* Multiple animations */
  animation: fadeIn 0.5s ease, slideUp 0.5s ease;
}
```

---

### `animation-fill-mode`

```css
/* 
  none     — Default, original state pe return
  forwards — Animation end ki state mein ruk jao
  backwards— Delay ke dauraan starting state
  both     — forwards + backwards
*/

.appear {
  opacity: 0;  /* Initially invisible */
  animation: fadeIn 1s ease forwards; /* End pe opacity: 1 rahegi */
}
```

---

### Practical Animation Examples

```css
/* Spinner / Loading */
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Pulse */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.05); opacity: 0.8; }
}

.pulse-button {
  animation: pulse 2s ease-in-out infinite;
}

/* Skeleton loading */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  height: 20px;
}

/* Floating */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.floating-badge {
  animation: float 3s ease-in-out infinite;
}

/* Page entrance */
@keyframes slideInLeft {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.hero-content {
  animation: slideInLeft 0.8s ease forwards;
}

/* Typewriter effect */
@keyframes typing {
  from { width: 0; }
  to   { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid;
  animation: typing 3s steps(40, end),
             blink 0.7s step-end infinite;
}
```

---

### `@keyframes` Aur `will-change` Performance

```css
/* GPU acceleration ke liye */
.animated-element {
  will-change: transform, opacity;
  /* Browser ko batata hai ke yeh element animate hoga
     Browser GPU pe rakhta hai — smooth animation */
}
```

---

# 32. Shadows

## Shadow Properties 🌑

### Box Shadow

```css
/* box-shadow: h-offset v-offset blur spread color inset; */
.card {
  /* Basic shadow */
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
  
  /* Large outer shadow */
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  
  /* Inset shadow (inside element) */
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
  
  /* Multiple shadows */
  box-shadow: 
    0 1px 3px rgba(0,0,0,0.12),
    0 1px 2px rgba(0,0,0,0.24);
  
  /* Colored shadow */
  box-shadow: 0 8px 30px rgba(52, 152, 219, 0.4);
  
  /* No shadow */
  box-shadow: none;
}
```

### Shadow Levels (Material Design Style)

```css
/* Level 1 - Subtle */
.shadow-1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }

/* Level 2 */
.shadow-2 { box-shadow: 0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12); }

/* Level 3 */
.shadow-3 { box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10); }

/* Level 4 */
.shadow-4 { box-shadow: 0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05); }

/* Level 5 - Heavy */
.shadow-5 { box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
```

---

### Text Shadow

```css
/* text-shadow: h-offset v-offset blur color; */
h1 {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Neon effect */
.neon {
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #0fa,
    0 0 82px #0fa;
}

/* 3D text */
.shadow-3d {
  text-shadow:
    1px 1px 0 #ccc,
    2px 2px 0 #ccc,
    3px 3px 0 #ccc,
    4px 4px 0 #ccc;
}

/* Long shadow */
.long-shadow {
  text-shadow:
    1px 1px #aaa, 2px 2px #aaa, 3px 3px #aaa,
    4px 4px #aaa, 5px 5px #aaa, 6px 6px #aaa;
}
```

---

# 33. Gradients

## CSS Gradients — Color Transitions 🌈

### Linear Gradient

```css
.box {
  /* Top se bottom (default) */
  background: linear-gradient(#ff6b6b, #ffd93d);
  
  /* Direction */
  background: linear-gradient(to right, #ff6b6b, #ffd93d);
  background: linear-gradient(to bottom right, blue, red);
  background: linear-gradient(45deg, blue, red);
  background: linear-gradient(135deg, #667eea, #764ba2);
  
  /* Multiple colors */
  background: linear-gradient(to right, red, yellow, green, blue);
  
  /* With stops */
  background: linear-gradient(to right, red 0%, orange 30%, blue 100%);
  background: linear-gradient(to right, red 0%, red 30%, blue 30%, blue 100%);
  /* ↑ Sharp transition (no blur) */
  
  /* Transparent */
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));
}
```

---

### Radial Gradient

```css
.box {
  /* Basic */
  background: radial-gradient(#ff6b6b, #ffd93d);
  
  /* Circle ya ellipse */
  background: radial-gradient(circle, #ff6b6b, #ffd93d);
  background: radial-gradient(ellipse, #ff6b6b, #ffd93d);
  
  /* Position */
  background: radial-gradient(circle at top left, blue, red);
  background: radial-gradient(circle at 30% 70%, blue, red);
  
  /* Size */
  background: radial-gradient(circle closest-side, blue, red);
  background: radial-gradient(circle farthest-corner, blue, red);
}
```

---

### Conic Gradient

```css
.pie {
  background: conic-gradient(red 0% 25%, blue 25% 50%, green 50% 75%, yellow 75% 100%);
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
```

---

### Practical Gradient Examples

```css
/* Hero background */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Sunset */
.sunset {
  background: linear-gradient(to bottom, #f7b733, #fc4a1a);
}

/* Ocean */
.ocean {
  background: linear-gradient(to bottom, #2193b0, #6dd5ed);
}

/* Dark overlay on image */
.image-overlay {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0,0,0,0.7) 100%
  );
}

/* Glass morphism */
.glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

# 34. Modern CSS

## Aaj ke Cool CSS Features 🚀

### `clamp()` — Responsive Values

```css
/* clamp(min, preferred, max) */

/* Responsive font-size without media queries! */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* Min: 1.5rem, Preferred: 4vw, Max: 3rem */
}

body {
  font-size: clamp(14px, 2.5vw, 18px);
}

.container {
  width: clamp(300px, 90%, 1200px);
  /* ↑ 300px se choti nahi, 90% preferred, 1200px se badi nahi */
}

.hero-padding {
  padding: clamp(20px, 5vw, 80px);
}
```

---

### `min()` aur `max()`

```css
/* min() — in mein se chota value lo */
.box {
  width: min(90%, 600px);
  /* Mobile: 90% width, Desktop: 600px */
}

/* max() — in mein se bada value lo */
.box {
  width: max(300px, 50%);
  /* Kabhi 300px se chota nahi hoga */
}
```

---

### `aspect-ratio`

```css
/* Width:Height ratio maintain karo */
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.square-box {
  aspect-ratio: 1 / 1;
  width: 200px;
}

.portrait {
  aspect-ratio: 2 / 3;
}

/* Image containers */
.thumbnail {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

### `object-fit`

```css
img {
  width: 100%;
  height: 200px;
  
  object-fit: fill;       /* Stretch to fill (default, distorts) */
  object-fit: contain;    /* Show full image, letterbox */
  object-fit: cover;      /* Fill container, crop */
  object-fit: none;       /* Original size, crop */
  object-fit: scale-down; /* Contain or none, whichever smaller */
}

/* Position karo */
img {
  object-fit: cover;
  object-position: center top; /* Focus on top */
  object-position: 30% 70%;
}
```

---

### `scroll-behavior`

```css
html {
  scroll-behavior: smooth; /* Smooth scrolling sab links pe */
}

/* Specific container */
.scroll-container {
  scroll-behavior: smooth;
  overflow-y: scroll;
}

/* JS ke bina anchor links smoothly scroll karenge */
/* <a href="#section2">Jump</a> */
```

---

### `scroll-snap`

```css
/* Full-page scroll snap */
.scroll-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.scroll-section {
  scroll-snap-align: start;
  height: 100vh;
}
```

---

### CSS Custom Properties in Media Queries

```css
:root {
  --container-width: 1200px;
  --font-size: 16px;
}

@media (max-width: 768px) {
  :root {
    --container-width: 100%;
    --font-size: 14px;
  }
}
```

---

### `gap` in Flexbox

```css
/* Old way */
.flex-container .item + .item {
  margin-left: 20px;
}

/* Modern way */
.flex-container {
  display: flex;
  gap: 20px; /* Clean aur simple! */
}
```

---

### `backdrop-filter` — Glassmorphism

```css
.glass-card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Safari ke liye */
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
}
```

---

# 35. CSS Architecture

## CSS Code Organization 🏗️

### BEM Naming Convention

**BEM = Block, Element, Modifier**

```
.block {}                  ← Component
.block__element {}         ← Component ka part (double underscore)
.block--modifier {}        ← Variation (double dash)
.block__element--modifier {}
```

```css
/* 
  Card Component — BEM Example:
  
  Block: .card
  Elements: .card__image, .card__body, .card__title, .card__text, .card__btn
  Modifiers: .card--featured, .card--dark, .card--large
*/

/* Block */
.card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

/* Elements */
.card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card__body {
  padding: 20px;
}

.card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.card__text {
  color: #666;
  line-height: 1.6;
}

.card__btn {
  display: inline-block;
  margin-top: 16px;
  padding: 8px 20px;
  background: var(--primary-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

/* Modifiers */
.card--featured {
  border: 2px solid var(--primary-color);
}

.card--dark {
  background: #333;
}

.card--dark .card__title,
.card--dark .card__text {
  color: white;
}
```

```html
<!-- HTML Usage -->
<div class="card card--featured">
  <img class="card__image" src="..." alt="...">
  <div class="card__body">
    <h3 class="card__title">Card Title</h3>
    <p class="card__text">Card description...</p>
    <a href="#" class="card__btn">Read More</a>
  </div>
</div>
```

---

### CSS File Organization

```
styles/
├── base/
│   ├── reset.css         ← Browser defaults reset
│   ├── typography.css    ← Fonts, headings
│   └── variables.css     ← CSS Custom Properties
├── components/
│   ├── buttons.css
│   ├── cards.css
│   ├── forms.css
│   ├── modals.css
│   └── navbar.css
├── layout/
│   ├── grid.css
│   ├── header.css
│   └── footer.css
├── pages/
│   ├── home.css
│   ├── about.css
│   └── contact.css
├── utils/
│   ├── animations.css
│   ├── helpers.css
│   └── responsive.css
└── main.css              ← Sab import karo
```

```css
/* main.css */
@import 'base/reset.css';
@import 'base/variables.css';
@import 'base/typography.css';
@import 'components/buttons.css';
@import 'components/cards.css';
/* ... */
```

---

### Reusable Utility Classes

```css
/* Utility Classes — Tailwind jaise */

/* Display */
.d-flex { display: flex; }
.d-block { display: block; }
.d-none { display: none; }

/* Flexbox */
.flex-center { justify-content: center; align-items: center; }
.flex-between { justify-content: space-between; align-items: center; }
.flex-column { flex-direction: column; }

/* Spacing */
.mt-1 { margin-top: 4px; }
.mt-2 { margin-top: 8px; }
.mt-3 { margin-top: 16px; }
.mt-4 { margin-top: 24px; }
.mt-5 { margin-top: 32px; }

.p-1 { padding: 4px; }
.p-2 { padding: 8px; }
.p-3 { padding: 16px; }

/* Text */
.text-center { text-align: center; }
.text-bold { font-weight: bold; }
.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.25rem; }

/* Colors */
.text-primary { color: var(--primary-color); }
.bg-light { background-color: #f8f9fa; }
```

---

# 36. Performance Optimization

## CSS Performance Best Practices ⚡

### Avoid Expensive Properties

```css
/* ❌ Slow — triggers layout recalculation */
.bad:hover {
  width: 110%;
  height: 110%;
  margin-top: -5px;
}

/* ✅ Fast — GPU-accelerated, no layout change */
.good:hover {
  transform: scale(1.05);
  /* transform aur opacity GPU pe run hoti hain! */
}
```

---

### Selector Efficiency

```css
/* ❌ Bad — too specific, slow */
html body div.container ul li a.nav-link { color: blue; }

/* ✅ Good — simple, fast */
.nav-link { color: blue; }

/* ❌ Universal selector with elements (slow) */
* div { color: red; }

/* ✅ Direct class (fast) */
.my-div { color: red; }
```

---

### CSS Loading Optimization

```html
<!-- CSS blocking roke — preload karo -->
<link rel="preload" href="critical.css" as="style" onload="this.rel='stylesheet'">

<!-- Critical CSS inline karo -->
<style>
  /* Above-the-fold styles */
  body { margin: 0; font-family: sans-serif; }
  .header { height: 60px; background: #333; }
</style>

<!-- Non-critical CSS baad mein load karo -->
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
```

---

### Common Mistakes to Avoid

```css
/* ❌ Using IDs for styling (too specific) */
#main-heading { color: red; }

/* ✅ Classes use karo */
.main-heading { color: red; }

/* ❌ !important har jagah */
.text { color: red !important; }
.text { font-size: 16px !important; }

/* ✅ Proper specificity */
.card .text { color: red; }

/* ❌ Magic numbers */
.element {
  top: 23px;  /* Kyon 23px? */
  left: 47px; /* Kyon 47px? */
}

/* ✅ Variables se meaning clear */
:root { --header-height: 60px; }
.content { top: var(--header-height); }

/* ❌ Inline styles in HTML */
<div style="color:red; font-size:16px; margin:10px;">
  
/* ✅ Classes use karo */
<div class="alert alert-danger">
```

---

### Optimization Tips

```css
/* 1. will-change for animations */
.animated {
  will-change: transform;
}

/* 2. contain property — rendering scope limit karo */
.card {
  contain: layout style;
}

/* 3. content-visibility — off-screen elements skip karo */
.article {
  content-visibility: auto;
  contain-intrinsic-size: 200px;
}

/* 4. font-display karo */
@font-face {
  font-family: 'MyFont';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* FOUT prevent karo */
}
```

---

# 37. CSS Interview Questions

## 🎯 Beginner Level

**Q1: CSS ka full form kya hai?**
> **A:** Cascading Style Sheets. "Cascading" isliye kyunki jab multiple styles apply hoti hain, toh ek specific order (cascade) follow hoti hai priority decide karne ke liye.

---

**Q2: Inline, Internal aur External CSS ka difference kya hai?**
> **A:**
> - **Inline:** Style attribute element pe directly (`style=""`)
> - **Internal:** `<style>` tag HTML ke `<head>` mein
> - **External:** Alag `.css` file jo `<link>` se connect hoti hai
> 
> Priority: Inline > Internal = External (jo baad mein aaye)

---

**Q3: Class aur ID selector mein kya difference hai?**
> **A:**
> - **Class (`.`):** Multiple elements pe use ho sakti hai, ek element ke paas multiple classes ho sakti hain
> - **ID (`#`):** Ek page pe unique honi chahiye, sirf ek element pe

---

**Q4: Box model kya hai?**
> **A:** Har HTML element ek box hai jisme 4 layers hain: Content → Padding → Border → Margin. Bahar ki taraf jaate hain.

---

**Q5: margin aur padding ka difference?**
> **A:**
> - **Margin:** Element ke bahar ka space (dusre elements se door karta hai)
> - **Padding:** Element ke andar ka space (content ko border se door karta hai)
> 
> Background color padding pe show hoti hai, margin pe nahi.

---

**Q6: `display: none` aur `visibility: hidden` ka difference?**
> **A:**
> - `display: none`: Element aur uska space dono hat jaate hain
> - `visibility: hidden`: Element nahi dikhta but space bana rehta hai

---

## 🔥 Intermediate Level

**Q7: CSS Specificity kaise calculate hoti hai?**
> **A:** Specificity ek 4-number score hai: `(inline, IDs, classes/attributes/pseudo-classes, elements)`
> - Inline: 1,0,0,0
> - ID: 0,1,0,0  
> - Class/Attribute/Pseudo-class: 0,0,1,0
> - Element/Pseudo-element: 0,0,0,1
> 
> Bade number wala win karta hai.

---

**Q8: Flexbox aur Grid mein difference kya hai?**
> **A:**
> - **Flexbox:** 1-dimensional (ek direction — row ya column)
> - **Grid:** 2-dimensional (rows AND columns dono)
> - Flexbox small components ke liye, Grid page layouts ke liye

---

**Q9: Position property ke values kya hain aur unka difference?**
> **A:**
> - `static`: Default, normal flow
> - `relative`: Normal flow + offset allowed, space bana rehta hai
> - `absolute`: Normal flow se bahar, nearest positioned parent ke relative
> - `fixed`: Viewport ke relative, scroll ke saath nahi halta
> - `sticky`: Normal flow + viewport ke relative threshold pe

---

**Q10: `em` aur `rem` mein difference?**
> **A:**
> - `em`: Parent element ke font-size ke relative (compound ho sakta hai nested elements mein)
> - `rem`: Root element (`<html>`) ke font-size ke relative (consistent rehta hai)
> 
> Best practice: Typography ke liye `rem`, spacing ke liye `em`

---

**Q11: Pseudo-class aur pseudo-element ka difference?**
> **A:**
> - **Pseudo-class** (`:`): Element ki state ya position (`:hover`, `:focus`, `:nth-child`)
> - **Pseudo-element** (`::`): Element ka virtual part (`::before`, `::after`, `::first-line`)

---

**Q12: CSS Variables kya hain?**
> **A:** Custom properties (`--variable-name`) jo `:root` ya kisi bhi selector mein define ki ja sakti hain aur `var(--variable-name)` se use ki ja sakti hain. Benefits: reusability, theming, JavaScript se update.

---

## 🚀 Advanced Level

**Q13: CSS Cascade kya hai?**
> **A:** Cascade = Browser ka algorithm jo decide karta hai kaunsi CSS rule apply hogi jab multiple rules conflict karein. Order: Origin (browser/user/author) → Specificity → Order of appearance

---

**Q14: Stacking Context kya hai?**
> **A:** Jab ek element ek naya "3D layer" create karta hai jisme uske children ke z-indexes sirf us group mein kaam karte hain. Create hota hai: `position: fixed/sticky`, `z-index != auto`, `opacity < 1`, `transform`, `filter` properties se.

---

**Q15: `will-change` property kya karti hai?**
> **A:** Browser ko batati hai ke yeh element animate hone wala hai taaki woh use GPU pe move kare pehle se. Isse janky animations smooth ho jaati hain. Overuse se memory waste hota hai.

---

**Q16: Critical CSS kya hai?**
> **A:** Above-the-fold content (jo scroll kiye bina dikhta hai) ke liye zaroori CSS. Isko inline karte hain HTML mein taaki First Contentful Paint fast ho. Baaki CSS async load hoti hai.

---

**Q17: Container Queries kya hain?**
> **A:** Modern CSS feature jisme element apne parent container ki size ke basis pe style change kare, na ki viewport ke. `@container (min-width: 400px) { ... }` syntax use hoti hai.

---

**Q18: CSS `content-visibility` property?**
> **A:** Off-screen elements ka rendering skip karna taaki page load fast ho. `content-visibility: auto` browser ko allow karta hai ki viewport ke bahar ke elements ko paint na kare jab tak zarurat na ho.

---

# 38. CSS Cheat Sheet

## Quick Reference 📋

### Selectors

```css
*           { } /* Universal */
div         { } /* Element */
.class      { } /* Class */
#id         { } /* ID */
a, b        { } /* Group */
a b         { } /* Descendant */
a > b       { } /* Direct child */
a + b       { } /* Adjacent sibling */
a ~ b       { } /* General sibling */
[attr]      { } /* Has attribute */
[attr=val]  { } /* Exact value */
[attr^=val] { } /* Starts with */
[attr$=val] { } /* Ends with */
[attr*=val] { } /* Contains */
```

---

### Box Model

```css
width/height: auto | length | %
margin: top right bottom left
padding: top right bottom left
border: width style color
border-radius: tl tr br bl
box-sizing: content-box | border-box
```

---

### Display & Positioning

```css
display: block | inline | inline-block | flex | grid | none
position: static | relative | absolute | fixed | sticky
top | right | bottom | left: auto | length | %
z-index: auto | number
overflow: visible | hidden | scroll | auto
float: left | right | none
clear: left | right | both | none
```

---

### Flexbox

```css
/* Container */
display: flex;
flex-direction: row | column | row-reverse | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
align-items: stretch | flex-start | flex-end | center | baseline;
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
gap: row-gap column-gap;

/* Items */
flex: grow shrink basis;
flex-grow: number;
flex-shrink: number;
flex-basis: auto | length;
align-self: auto | flex-start | flex-end | center | stretch;
order: number;
```

---

### Grid

```css
/* Container */
display: grid;
grid-template-columns: track-list;
grid-template-rows: track-list;
grid-template-areas: "area" "area";
gap: row-gap column-gap;
justify-items: start | end | center | stretch;
align-items: start | end | center | stretch;
place-items: align-items justify-items;

/* Items */
grid-column: start / end;
grid-row: start / end;
grid-area: name | row-start / col-start / row-end / col-end;
justify-self: start | end | center | stretch;
align-self: start | end | center | stretch;
```

---

### Typography

```css
font-family: family-name | generic;
font-size: px | em | rem | % | vw;
font-weight: 100-900 | normal | bold;
font-style: normal | italic | oblique;
line-height: normal | number | length;
letter-spacing: normal | length;
word-spacing: normal | length;
text-align: left | right | center | justify;
text-decoration: none | underline | overline | line-through;
text-transform: none | uppercase | lowercase | capitalize;
text-shadow: h v blur color;
```

---

### Colors & Backgrounds

```css
color: named | hex | rgb | rgba | hsl | hsla;
background-color: color;
background-image: url() | gradient;
background-repeat: repeat | no-repeat | repeat-x | repeat-y;
background-position: x y;
background-size: auto | cover | contain | length;
background-attachment: scroll | fixed | local;
```

---

### Transforms & Transitions

```css
transform: translate(x,y) rotate(deg) scale(x,y) skew(x,y);
transform-origin: x y;
transition: property duration timing delay;
transition-timing-function: ease | linear | ease-in | ease-out | cubic-bezier();

animation: name duration timing delay iteration direction fill-mode;
animation-name: keyframes-name;
animation-duration: time;
animation-timing-function: same as transition;
animation-delay: time;
animation-iteration-count: number | infinite;
animation-direction: normal | reverse | alternate;
animation-fill-mode: none | forwards | backwards | both;
animation-play-state: running | paused;
```

---

### Common Values Reference

```css
/* Colors */
transparent | currentColor | inherit | initial | unset

/* Sizes */
px | em | rem | % | vw | vh | vmin | vmax | ch | ex

/* Global */
inherit  — Parent se inherit karo
initial  — CSS default value use karo
unset    — inherit ya initial, jo applicable ho
revert   — Browser default pe vapas
```

---

# 39. CSS Mini Projects

## Project 1: Landing Page 🏠

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <link rel="stylesheet" href="landing.css">
</head>
<body>
  <nav class="navbar">
    <div class="container navbar__inner">
      <a href="#" class="navbar__logo">Brand</a>
      <ul class="navbar__links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#" class="btn btn--primary">Get Started</a>
    </div>
  </nav>
  
  <section class="hero">
    <div class="container hero__content">
      <h1 class="hero__title">Build Amazing Websites</h1>
      <p class="hero__subtitle">CSS sikhke apne dreams banao reality!</p>
      <a href="#" class="btn btn--primary btn--large">Start Free Trial</a>
    </div>
  </section>
</body>
</html>
```

```css
/* landing.css */
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --text: #1f2937;
  --text-light: #6b7280;
  --bg: #ffffff;
  --gradient: linear-gradient(135deg, #667eea, #764ba2);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  color: var(--text);
  line-height: 1.6;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  z-index: 100;
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.navbar__logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
}

.navbar__links {
  display: flex;
  list-style: none;
  gap: 32px;
}

.navbar__links a {
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.navbar__links a:hover { color: var(--primary); }

/* Buttons */
.btn {
  display: inline-block;
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  cursor: pointer;
}

.btn--primary {
  background: var(--primary);
  color: white;
}

.btn--primary:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(99,102,241,0.4);
}

.btn--large {
  padding: 16px 40px;
  font-size: 1.1rem;
}

/* Hero */
.hero {
  background: var(--gradient);
  min-height: 90vh;
  display: flex;
  align-items: center;
  text-align: center;
}

.hero__content { color: white; }

.hero__title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero__subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 40px;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar__links { display: none; }
  .hero { min-height: 70vh; }
}
```

---

## Project 2: Responsive Navbar 🧭

```css
/* Responsive Navbar with Hamburger */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #1a1a2e;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-logo { color: white; font-size: 1.5rem; font-weight: bold; }

.nav-menu {
  display: flex;
  gap: 24px;
  list-style: none;
}

.nav-menu a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-menu a:hover { color: white; }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 5px;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 2px;
  background: white;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .hamburger { display: flex; }
  
  .nav-menu {
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    background: #1a1a2e;
    flex-direction: column;
    padding: 20px;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
    visibility: hidden;
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  /* Hamburger animation */
  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}
```

---

## Project 3: Card Design 🃏

```css
/* Modern Card Component */
.card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  max-width: 380px;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

.card__image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card__image {
  transform: scale(1.05);
}

.card__badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #6366f1;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card__body {
  padding: 24px;
}

.card__category {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6366f1;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.card__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
  line-height: 1.4;
}

.card__text {
  color: #6b7280;
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f3f4f6;
  padding-top: 16px;
  margin-top: 4px;
}

.card__author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.card__author-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}

.card__date {
  font-size: 0.8125rem;
  color: #9ca3af;
}
```

---

## Project 4: Pricing Table 💰

```css
/* Pricing Table */
.pricing-section {
  padding: 80px 20px;
  background: #f8fafc;
}

.pricing-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
}

.pricing-grid {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

.pricing-card {
  background: white;
  border-radius: 20px;
  padding: 40px 32px;
  width: 300px;
  text-align: center;
  border: 2px solid transparent;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  position: relative;
}

.pricing-card:hover {
  border-color: #6366f1;
  transform: translateY(-4px);
}

.pricing-card.popular {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: transparent;
  transform: scale(1.05);
}

.popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #f59e0b;
  color: white;
  padding: 4px 20px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.pricing-plan {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  opacity: 0.8;
}

.pricing-price {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 8px;
}

.pricing-price sup {
  font-size: 1.5rem;
  vertical-align: top;
  margin-top: 12px;
  font-weight: 600;
}

.pricing-period {
  font-size: 0.875rem;
  opacity: 0.7;
  margin-bottom: 32px;
}

.pricing-features {
  list-style: none;
  margin-bottom: 32px;
  text-align: left;
}

.pricing-features li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  font-size: 0.9375rem;
}

.popular .pricing-features li {
  border-bottom-color: rgba(255,255,255,0.15);
}

.pricing-features li::before {
  content: '✓ ';
  color: #10b981;
  font-weight: 700;
}

.popular .pricing-features li::before {
  color: #86efac;
}

.pricing-btn {
  display: block;
  padding: 14px;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
  background: #6366f1;
  color: white;
}

.popular .pricing-btn {
  background: white;
  color: #6366f1;
}

.pricing-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99,102,241,0.3);
}
```

---

## Project 5: Dashboard UI 📊

```css
/* Dashboard Layout */
.dashboard {
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 64px 1fr;
  min-height: 100vh;
  background: #f1f5f9;
}

/* Sidebar */
.sidebar {
  grid-area: sidebar;
  background: #1e293b;
  color: white;
  padding: 24px 16px;
}

.sidebar-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #6366f1;
  padding: 0 12px 24px;
  border-bottom: 1px solid #334155;
  margin-bottom: 16px;
}

.sidebar-nav { list-style: none; }

.sidebar-nav li a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9375rem;
  transition: all 0.2s;
}

.sidebar-nav li a:hover,
.sidebar-nav li a.active {
  background: #334155;
  color: white;
}

/* Header */
.dashboard-header {
  grid-area: header;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

/* Main Content */
.dashboard-main {
  grid-area: main;
  padding: 32px;
  overflow-y: auto;
}

/* Stat Cards */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}

.stat-card__label {
  font-size: 0.8125rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.stat-card__value {
  font-size: 2rem;
  font-weight: 800;
  color: #1e293b;
  margin: 8px 0;
}

.stat-card__change {
  font-size: 0.875rem;
  color: #10b981;
  font-weight: 600;
}

.stat-card__change.negative { color: #ef4444; }

/* Responsive */
@media (max-width: 768px) {
  .dashboard {
    grid-template-areas:
      "header"
      "main";
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr;
  }
  
  .sidebar { display: none; }
}
```

---

## Project 6: Portfolio Website 💼

```css
/* Portfolio Complete Styles */
:root {
  --navy: #0a192f;
  --light-navy: #112240;
  --lightest-navy: #233554;
  --slate: #8892b0;
  --light-slate: #a8b2d8;
  --lightest-slate: #ccd6f6;
  --white: #e6f1ff;
  --green: #64ffda;
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'Fira Code', monospace;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: var(--navy);
  color: var(--slate);
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: 1.6;
}

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10,25,47,0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
}

.nav-logo {
  font-family: var(--font-mono);
  color: var(--green);
  font-size: 1.5rem;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  color: var(--lightest-slate);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--green); }

/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 150px;
}

.hero__greeting {
  font-family: var(--font-mono);
  color: var(--green);
  font-size: 1rem;
  margin-bottom: 20px;
}

.hero__name {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  color: var(--lightest-slate);
  line-height: 1.1;
}

.hero__tagline {
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--slate);
  margin-bottom: 24px;
}

.hero__description {
  max-width: 550px;
  line-height: 1.7;
  margin-bottom: 48px;
}

.hero__cta {
  display: inline-block;
  padding: 20px 36px;
  border: 1px solid var(--green);
  border-radius: 4px;
  color: var(--green);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  transition: all 0.25s;
}

.hero__cta:hover {
  background: rgba(100,255,218,0.1);
  transform: translate(-4px, -4px);
  box-shadow: 4px 4px 0 var(--green);
}

/* Projects Grid */
.projects {
  padding: 100px 150px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--lightest-slate);
  margin-bottom: 50px;
}

.section-title::before {
  font-family: var(--font-mono);
  color: var(--green);
  font-size: 1.2rem;
  counter-increment: section;
}

.section-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--lightest-navy);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--light-navy);
  border-radius: 4px;
  padding: 32px;
  transition: all 0.25s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(2,12,27,0.7);
}

.project-card__folder {
  color: var(--green);
  font-size: 2.5rem;
  margin-bottom: 24px;
}

.project-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--lightest-slate);
  margin-bottom: 12px;
}

.project-card__desc {
  font-size: 0.9375rem;
  line-height: 1.7;
  flex: 1;
  margin-bottom: 20px;
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--slate);
}

/* Responsive Portfolio */
@media (max-width: 1080px) {
  .hero, .projects { padding-left: 80px; padding-right: 80px; }
}

@media (max-width: 768px) {
  .hero, .projects { padding-left: 24px; padding-right: 24px; }
  .nav { padding: 16px 24px; }
  .nav-links { display: none; }
}
```

---

# 40. CSS Roadmap

## 🗺️ Learning Path

### 🟢 Beginner Path (4-6 weeks)

```
Week 1: Foundations
├── CSS Introduction aur setup
├── Ways to add CSS (Inline, Internal, External)
├── Selectors (Element, Class, ID)
├── Colors (Named, HEX, RGB)
└── Basic Typography (font, color, text-align)

Week 2: Box Model
├── Margin aur Padding
├── Border properties
├── Width aur Height
├── Box-sizing
└── Display (block, inline, inline-block)

Week 3: Layouts Basics
├── Float (legacy — samajhne ke liye)
├── Position (static, relative, absolute, fixed)
├── Z-index
└── Overflow

Week 4: Styling
├── Background properties
├── Text properties (transform, spacing, shadow)
├── Link styling
├── List styling
└── Table styling

Mini Projects:
└── Simple business card
└── Blog post layout
└── Styled form
```

---

### 🟡 Intermediate Path (6-8 weeks)

```
Week 5-6: Modern Layouts
├── Flexbox (COMPLETE)
│   ├── Container properties
│   ├── Item properties
│   └── 5+ practical exercises
├── CSS Grid (COMPLETE)
│   ├── Grid container
│   ├── Grid items
│   └── Grid areas
└── Responsive Design
    ├── Media queries
    ├── Mobile-first approach
    └── Common breakpoints

Week 7: CSS Magic
├── Pseudo-classes (:hover, :nth-child, :focus)
├── Pseudo-elements (::before, ::after)
├── CSS Variables (custom properties)
├── Transitions
└── Transforms

Week 8: Advanced Styling
├── CSS Animations (@keyframes)
├── Box shadow aur Text shadow
├── Gradients (Linear, Radial)
└── CSS Units (em, rem, vw, vh, %)

Mini Projects:
└── Responsive navbar with hamburger
└── Card component with hover effects
└── Pricing table
└── Animated loading spinner
```

---

### 🔴 Advanced Path (8-10 weeks)

```
Week 9-10: Advanced Concepts
├── CSS Architecture (BEM)
├── CSS Organization
├── Performance Optimization
├── Modern CSS (clamp, aspect-ratio, object-fit)
└── Custom Properties (advanced theming)

Week 11-12: Specialization
├── CSS Animations (advanced)
├── 3D Transforms
├── CSS Grid (advanced layouts)
├── Container Queries
└── CSS-only interactions

Week 13-14: Real Projects
├── Glassmorphism UI
├── Dark mode implementation
├── CSS-only carousel
└── Animated dashboard

Advanced Topics to Explore:
└── CSS Houdini (Paint API)
└── CSS Scroll-driven Animations
└── @layer cascade layers
└── :has() selector
└── CSS Subgrid
```

---

### 📋 Recommended Projects by Level

| Level | Project | Skills Practiced |
|-------|---------|-----------------|
| Beginner | Business Card | Box model, typography, colors |
| Beginner | Blog Layout | Display, margins, paddings |
| Beginner | Styled Form | Input styling, focus states |
| Intermediate | Responsive Navbar | Flexbox, media queries |
| Intermediate | Card Grid | Grid, hover effects |
| Intermediate | Pricing Table | Flexbox, gradients, animations |
| Advanced | Portfolio Website | Grid, animations, variables |
| Advanced | Dashboard UI | Grid, complex layouts |
| Advanced | E-commerce Page | Complete real-world project |
| Advanced | Dark Mode Site | CSS Variables, transitions |

---

### 🔧 Recommended Tools & Resources

```
Code Editors:
├── VS Code (Best!)
│   ├── Extension: Live Server
│   ├── Extension: CSS Peek
│   └── Extension: Prettier
└── Sublime Text

Online Playground:
├── CodePen (pen.new)
├── JSFiddle
└── CSS Deck

Learning Resources:
├── MDN Web Docs (best reference!)
├── CSS-Tricks
├── web.dev by Google
└── Freecodecamp

Design Inspiration:
├── Dribbble
├── Behance
├── Awwwards
└── Codepen Trending

Color Tools:
├── Coolors.co
├── Adobe Color
└── Paletton

CSS Generators:
├── CSS Grid Generator
├── Flexbox Froggy (game!)
├── Grid Garden (game!)
└── Gradient Generator
```

---

### 🎯 Final Checklist — Advanced CSS Developer

```
Beginners ke liye (must know):
□ Selectors (element, class, ID, combinator)
□ Box model (margin, padding, border, content)
□ Display (block, inline, inline-block, none)
□ Colors aur backgrounds
□ Typography (font, text properties)
□ Basic positioning

Intermediate ke liye (should know):
□ Flexbox (container + items)
□ CSS Grid (container + items)
□ Media queries aur responsive design
□ Pseudo-classes aur pseudo-elements
□ CSS Variables (custom properties)
□ Transitions aur basic animations
□ Transforms

Advanced ke liye (nice to have):
□ Complex animations (@keyframes)
□ CSS architecture (BEM)
□ Performance optimization
□ Modern CSS functions (clamp, min, max)
□ CSS custom properties advanced theming
□ Accessible CSS (focus, ARIA)
□ CSS-only components
```

---

## 🎉 Congratulations!

**Aapne CSS ke ek bahut bade reference guide ko complete kar liya!**

```
         🏆
        /   \
       /     \
      / CSS   \
     / MASTER  \
    /____________\
    
    Ab aap CSS mein:
    ✅ Beginner se Advanced tak jaante ho
    ✅ Real-world projects bana sakte ho
    ✅ Interview confidently de sakte ho
    ✅ Responsive designs create kar sakte ho
    ✅ Animations aur effects implement kar sakte ho
```

> 💡 **Final Tip:** Theory padh ke satisfied mat ho jaana. **Har concept ke baad khud code likho, todphod karo, experiment karo. CSS sirf practice se aati hai!**

> 🔗 **Next Steps:** 
> 1. Yeh notes dobara padhte rehna
> 2. Har section ka practice exercise complete karo
> 3. 6 mini projects banao
> 4. Apna portfolio website banao
> 5. JavaScript seekho phir — DOM manipulation + CSS = 🔥

---

*Made with ❤️ for CSS learners everywhere*  
*Hinglish mein likha — taaki har koi samajh sake*  
*Happy Coding! 🚀*