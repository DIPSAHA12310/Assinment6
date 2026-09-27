# Dev Stack Builder

## Project Description

Dev Stack Builder is a web application that helps developers explore different technologies and build their own development stack. Users can explore technologies from different categories, view their difficulty and ratings, and add technologies to their personal stack.

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* React Toastify
* GitHub Pages

## 3 Main Features

1. **Explore Technologies**
   Users can explore frontend, backend, database, language, styling, DevOps, and development tools.

2. **Build Your Stack**
   Users can add technologies to their stack and remove individual technologies or remove all selected technologies.

3. **Technology Information**
   Each technology card shows its icon, category, difficulty level, rating, badge, and description.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe what the user interface should look like.

## 2. What is the difference between Props and State?

Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component that can change over time.

## 3. What is the useState hook, and how is it used?

The `useState` hook is used to create and manage state in a functional React component. In this project, `useState` is used to store the selected technologies in the user's stack.

## 4. What is the useEffect hook, and why might it be used for data fetching?

The `useEffect` hook is used to perform side effects in a React component. It can be used to fetch JSON data when a component loads and update the state with the fetched data.

## 5. What is the purpose of the key prop when rendering a list?

The `key` prop gives each list item a unique identity. React uses it to identify which items have changed, been added, or been removed when updating the UI.

## 6. What is conditional rendering in React?

Conditional rendering means displaying different UI elements depending on a condition. For example, this project displays `No technologies selected yet` when the stack is empty and displays the selected technologies when the stack contains items.

## 7. How do you pass data from a parent component to a child component? How can a child component communicate with its parent?

A parent component can pass data to a child component using props. A child component can communicate with its parent by receiving a callback function through props and calling that function when an event occurs.

---

## Project Features

* Responsive design for desktop, tablet, and mobile
* Technology search and exploration
* Add technologies to personal stack
* Duplicate technology protection
* Remove individual technologies
* Remove all selected technologies
* Toast notifications
* Loading state while data is being loaded
* Responsive navigation bar
* GitHub Pages deployment

## Live Website

https://dipsaha12310.github.io/Assinment6/
