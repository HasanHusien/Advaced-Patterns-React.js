Advanced React Patterns (Concept Guide)

This document explains some of the most important **advanced patterns in React**. These patterns help developers structure applications in a more scalable, reusable, and maintainable way.

---

## Render Props Pattern

###  What is it?

The **Render Props Pattern** is a technique where a component receives a function as a prop, and that function is used to determine what should be rendered.

Instead of hardcoding UI inside a component, you delegate the rendering logic to the parent by passing a function.

### Why use it?

* To share logic between multiple components
* To make components more flexible and reusable
* To allow dynamic rendering based on different needs

---

## Compound Components Pattern

### What is it?

The **Compound Components Pattern** is a design pattern where multiple components work together as a group and share a common internal state.

These components are usually used together inside a parent component, and they communicate implicitly (often using Context).

### Why use it?

* To create clean and expressive component APIs
* To manage shared state between related components
* To avoid passing too many props (prop drilling)

---

## Higher-Order Components (HOC)

### What is it?

A **Higher-Order Component (HOC)** is a function that takes a component and returns a new component with additional functionality.

It acts as a wrapper that enhances or modifies the behavior of the original component.

### Why use it?

* To reuse component logic across multiple components
* To handle cross-cutting concerns (like authentication, logging, etc.)
* To keep components focused on their main responsibility


