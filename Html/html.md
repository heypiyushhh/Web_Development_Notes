# 📘 HTML — Most Used Tags: Complete Reference
> Kal ki class yahi se shuru karenge 🚀

---

## 🔰 HTML Ka Basic Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Yahan sab content aata hai -->
  </body>
</html>
```

---

## 1. 📄 Document / Structural Tags

| Tag | Kaam |
|-----|------|
| `<!DOCTYPE html>` | Browser ko batata hai yeh HTML5 hai |
| `<html>` | Poore document ka container |
| `<head>` | Meta info, title, CSS links |
| `<body>` | Jo dikhta hai user ko |
| `<meta>` | Character set, viewport info |
| `<title>` | Browser tab ka naam |
| `<link>` | CSS file link karna |
| `<script>` | JavaScript load karna |

---

## 2. 🏗️ Layout / Semantic Tags

```html
<header>   <!-- Top wala section (logo, nav) -->
<nav>      <!-- Navigation links -->
<main>     <!-- Main content -->
<section>  <!-- Ek topic ka block -->
<article>  <!-- Self-contained content (blog post, news) -->
<aside>    <!-- Side content (ads, related links) -->
<footer>   <!-- Bottom wala section -->
<div>      <!-- Generic block container (no meaning) -->
<span>     <!-- Generic inline container (no meaning) -->
```

### Example:
```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <section>
    <h2>About Me</h2>
    <p>Main ek web developer hoon.</p>
  </section>
</main>

<footer>
  <p>© 2026 My Site</p>
</footer>
```

---

## 3. ✏️ Text / Heading Tags

```html
<h1>Heading 1 — Sabse bada</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 — Sabse chhota</h6>

<p>Paragraph text yahan</p>

<strong>Bold (important)</strong>
<em>Italic (emphasis)</em>
<u>Underline</u>
<mark>Highlighted text</mark>
<small>Chhota text</small>
<del>Strikethrough text</del>
<sup>Superscript</sup>  <!-- jaise x² -->
<sub>Subscript</sub>    <!-- jaise H₂O -->

<br />   <!-- Line break -->
<hr />   <!-- Horizontal line -->
```

---

## 4. 🔗 Links & Images

### Link (Anchor Tag)
```html
<!-- Basic link -->
<a href="https://google.com">Google par jao</a>

<!-- Naye tab mein open -->
<a href="https://google.com" target="_blank">Google (new tab)</a>

<!-- Same page anchor -->
<a href="#contact">Contact section par jao</a>

<!-- Email link -->
<a href="mailto:abc@email.com">Email Karo</a>

<!-- Phone link -->
<a href="tel:+919999999999">Call Karo</a>
```

### Image
```html
<!-- Basic image -->
<img src="photo.jpg" alt="Meri photo" />

<!-- Width/Height set karna -->
<img src="logo.png" alt="Logo" width="200" height="100" />

<!-- Link ke andar image -->
<a href="https://google.com">
  <img src="google-logo.png" alt="Google" />
</a>
```

---

## 5. 📋 Lists

### Unordered List (bullets)
```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### Ordered List (numbers)
```html
<ol>
  <li>Pehle HTML seekho</li>
  <li>Phir CSS</li>
  <li>Phir JavaScript</li>
</ol>
```

### Nested List
```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>
```

---

## 6. 📊 Tables

```html
<table border="1">
  <thead>
    <tr>
      <th>Naam</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rahul</td>
      <td>21</td>
      <td>Delhi</td>
    </tr>
    <tr>
      <td>Priya</td>
      <td>22</td>
      <td>Mumbai</td>
    </tr>
  </tbody>
</table>
```

| Tag | Matlab |
|-----|--------|
| `<table>` | Table container |
| `<thead>` | Header rows ka group |
| `<tbody>` | Data rows ka group |
| `<tr>` | Table Row |
| `<th>` | Table Header cell (bold, centered) |
| `<td>` | Table Data cell |

---

## 7. 📝 Forms — Most Important!

```html
<form action="/submit" method="POST">

  <!-- Text input -->
  <label for="name">Naam:</label>
  <input type="text" id="name" name="name" placeholder="Apna naam likhein" />

  <!-- Email input -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <!-- Password -->
  <label for="pass">Password:</label>
  <input type="password" id="pass" name="pass" />

  <!-- Number -->
  <input type="number" min="1" max="100" />

  <!-- Date -->
  <input type="date" />

  <!-- Radio buttons -->
  <input type="radio" name="gender" value="male" /> Male
  <input type="radio" name="gender" value="female" /> Female

  <!-- Checkbox -->
  <input type="checkbox" name="terms" /> Terms accept karta hoon

  <!-- Dropdown -->
  <select name="city">
    <option value="delhi">Delhi</option>
    <option value="mumbai">Mumbai</option>
    <option value="pune">Pune</option>
  </select>

  <!-- Textarea -->
  <textarea name="message" rows="4" cols="40" placeholder="Message likhein"></textarea>

  <!-- File upload -->
  <input type="file" name="photo" />

  <!-- Submit button -->
  <button type="submit">Submit Karo</button>

  <!-- Reset button -->
  <button type="reset">Reset</button>

</form>
```

### Input Types — Cheat Sheet
| Type | Kaam |
|------|------|
| `text` | Normal text |
| `email` | Email validate karta hai |
| `password` | Chhupa ke dikhata hai |
| `number` | Sirf number |
| `date` | Date picker |
| `checkbox` | Multiple select |
| `radio` | Ek select |
| `file` | File upload |
| `hidden` | User ko nahi dikhta |
| `submit` | Form bhejta hai |
| `reset` | Form saaf karta hai |

---

## 8. 🎥 Media Tags

```html
<!-- Video -->
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4" />
  Browser video support nahi karta
</video>

<!-- Audio -->
<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
</audio>

<!-- YouTube embed -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  allowfullscreen>
</iframe>
```

---

## 9. 🔤 Important Attributes

| Attribute | Kahan | Matlab |
|-----------|-------|--------|
| `id` | Kisi bhi tag pe | Unique identifier |
| `class` | Kisi bhi tag pe | CSS styling ke liye |
| `style` | Kisi bhi tag pe | Inline CSS |
| `href` | `<a>` | Link URL |
| `src` | `<img>`, `<script>` | File ka path |
| `alt` | `<img>` | Image nahi load hui toh text |
| `placeholder` | `<input>` | Hint text |
| `required` | `<input>` | Form submit nahi hoga bina fill kiye |
| `disabled` | `<input>`, `<button>` | Kaam nahi karega |
| `target="_blank"` | `<a>` | Naye tab mein open |
| `type` | `<input>`, `<button>` | Kaunsa type |

---

## 10. 🎨 CSS Examples — Class ke liye Ready!

### Basic CSS Setup
```css
/* style.css */

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}
```

### Colors & Backgrounds
```css
.box {
  background-color: #3498db;       /* Solid color */
  background-color: rgba(0,0,0,0.5); /* Transparent */
  background: linear-gradient(to right, #ff6b6b, #feca57); /* Gradient */
  color: white;
  color: #333;
}
```

### Box Model — Sabse Important!
```css
.card {
  width: 300px;
  height: 200px;
  padding: 20px;          /* Andar ki jagah */
  margin: 10px auto;      /* Bahar ki jagah, auto = center */
  border: 2px solid #ccc; /* Border */
  border-radius: 10px;    /* Rounded corners */
}
```

### Text Styling
```css
h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #2c3e50;
}

p {
  font-size: 1rem;
  line-height: 1.6;       /* Line ki doori */
  text-align: justify;
}
```

### Flexbox — Layout ke liye
```css
.container {
  display: flex;
  justify-content: center;   /* Horizontal center */
  align-items: center;       /* Vertical center */
  gap: 20px;                 /* Elements ke beech distance */
  flex-wrap: wrap;           /* Wrap karo chhoti screen pe */
}

/* Navigation bar */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #2c3e50;
}
```

### Buttons
```css
button {
  padding: 10px 24px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease; /* Smooth hover */
}

button:hover {
  background-color: #2980b9;
}
```

### Card Component
```css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  margin: 20px auto;
}

.card:hover {
  transform: translateY(-5px);      /* Upar uthna */
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}
```

### Navbar
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a1a2e;
  padding: 15px 40px;
  position: sticky;
  top: 0;
}

.navbar a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-size: 0.95rem;
}

.navbar a:hover {
  color: #e94560;
}
```

### Form Styling
```css
input, textarea, select {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 12px;
  outline: none;
}

input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52,152,219,0.2);
}
```

---

## ✅ Quick Recap — Kya Yaad Rakhna Hai

```
Structure  →  html, head, body, meta, title
Layout     →  header, nav, main, section, footer, div, span
Text       →  h1-h6, p, strong, em, br, hr
Links      →  <a href="">
Images     →  <img src="" alt="">
Lists      →  ul > li,  ol > li
Tables     →  table > tr > td/th
Forms      →  form > input, label, button, select, textarea
Media      →  video, audio, iframe
CSS        →  box model, flexbox, colors, fonts, hover effects
```

---

> 💡 **Kal class mein:** Yahi sab live code karenge, browser mein dekhenge.  
> Folder banao: `my-website/index.html` + `style.css` — ready raho! 🔥