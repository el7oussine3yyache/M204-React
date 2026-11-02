#set text(size: 11pt)
#set par(justify: false)
#set heading(numbering: "1.")
= React
== Lesson 1
React provides powerful primitives (built-in functions/modules) that allow us to build user interfaces of varying complexities. Throughout this course, we’ll learn all about the functionality React provides and learn to build cool applications.

_further explanation_

In React, "primitives" are the core, fundamental building blocks provided directly by React itself that you use to compose larger, more complex user interfaces.

Think of primitives as the atomic elements of React. You don't build them yourself; React gives them to you so you can assemble everything else.

== The Three Main Types of React Primitives
=== JSX HTML-Like Primitives
Standard DOM elements rendered through JSX. These are React's wrappers around standard browser elements.
- Examples:
  - \<div\>
  - \<button\>
  - \<span\>
  - \<input\>
  - \<p\>
=== Built-in Hooks
React functions that give your components "powers" like storing state, handling side effects, or managing references.
- useState: Primitive for managing local component memory/data.
- useEffect: Primitive for handling side effects (fetching data, syncing with browser APIs).
- useContext: Primitive for passing data down the component tree without prop drilling.
- useRef: Primitive for holding mutable values or direct DOM references.
=== Core Top-Level APIs & Special components
Special components or utilities built into React to manage layout and behavior.
- \<Fragment\> (or <>): Primitive for grouping elements without adding extra DOM nodes.

- \<Suspense\>: Primitive for handling loading states and asynchronous work.

- createContext: Primitive for creating context objects.
== Analogy: Lego Bricks
- Primitives: Individual Lego bricks (1x2 blue block, 2x4 red block). React supplies these out of the box.
- Custom Components: A Lego castle you built by snapping those individual bricks together (e.g., your custom \<Navbar\/\> or \<UserProfile\/\> component).
Example in Code
```jsx
import { useState } from 'react'; // 1. Hook Primitive

function Counter() { // Custom Component (built FROM primitives)
  const [count, setCount] = useState(0);

  return (
    // 2. JSX Element Primitives (div, p, button)
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
