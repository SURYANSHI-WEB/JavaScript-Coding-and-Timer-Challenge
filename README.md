# JavaScript Coding and Timer Challenge

A collection of JavaScript tasks covering core JS concepts and a fully functional countdown timer UI.

---

## Task Summaries

### Task 1 — Find Second Largest Number (`second-largest.js`)
Loops through an array twice — first to find the largest number, then to find the highest number still below it. No sorting used.

**Concepts used:** loops, conditionals, `-Infinity` as a baseline value

### Task 2 — Return Unique Elements (`unique-elements.js`)
Merges two arrays and returns only elements that appear in one array but not both.

**Concepts used:** `.concat()`, `.includes()`, `.push()`, loop iteration

### Task 3 — Student Score Analysis (`student-average.js`)
Loops through each student, calculates their average score, and identifies the top performer.

**Concepts used:** objects, nested loops, average calculation

### Task 4 — Countdown Timer (`index.html`, `style.css`, `script.js`)
A one-hour countdown timer with start, pause, and reset controls. Displays time in MM:SS format with a glow animation and "Time's Up!" message at zero.

**Concepts used:** `setInterval`, `clearInterval`, DOM manipulation, CSS animations, event listeners

---

## Setup Instructions

Make sure Node.js is installed.

---

## How to Run

**Tasks 1–3:** Open a terminal in the project folder and run:
```
cd "Task 1-3"
node second-largest.js
node unique-elements.js
node student-average.js
```

**Task 4:**
```
cd "Task-4 Timer"
```
Then open `index.html` in any browser and click **Start** to begin the countdown.