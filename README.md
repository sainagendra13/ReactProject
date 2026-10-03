# React Portfolio Website

A responsive single-page portfolio website built with **React** and **Chakra UI**. The project demonstrates reusable React components, React Context, custom hooks, form validation, responsive layouts, smooth section navigation, and interactive UI feedback.

## Features

* Responsive single-page portfolio layout
* Fixed navigation header with smooth scrolling
* Social media and professional profile links
* Hero/Landing section with profile information
* Featured Projects section with reusable project cards
* Contact Me form with client-side validation
* Global success/error alert system using React Context
* Loading state while submitting the contact form
* Responsive layout using Chakra UI
* Reusable custom components and hooks
* Scroll-aware navigation header that hides while scrolling down and reappears while scrolling up

## Tech Stack

* **React**
* **JavaScript (ES6+)**
* **Chakra UI**
* **Formik** – form state management
* **Yup** – form validation
* **Font Awesome** – icons
* **React Hooks**

  * `useState`
  * `useEffect`
  * `useRef`
  * `useContext`
* **React Context API**
* **HTML5**
* **CSS3**
* **npm**

## Project Structure

```text
ReactPortfolio/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Alert.js
│   │   ├── Card.js
│   │   ├── ContactMeSection.js
│   │   ├── Footer.js
│   │   ├── FullScreenSection.js
│   │   ├── Header.js
│   │   ├── LandingSection.js
│   │   └── ProjectsSection.js
│   │
│   ├── context/
│   │   └── alertContext.js
│   │
│   ├── hooks/
│   │   └── useSubmit.js
│   │
│   ├── images/
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   └── photo4.jpg
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Main Components

### Header

The `Header` component provides:

* Social media links
* Projects navigation
* Contact navigation
* Smooth scrolling to page sections
* Responsive layout
* Scroll detection using `useEffect` and `useRef`

The header automatically moves out of view when the user scrolls down and returns when the user scrolls up.

### Landing Section

The landing section introduces the portfolio owner with:

* Profile avatar
* Greeting
* Professional title
* React specialization

The layout is implemented using reusable Chakra UI components.

### Projects Section

The projects section displays featured projects using a reusable `Card` component.

Projects are stored as JavaScript objects:

```javascript
const projects = [
  {
    title: "React Space",
    description: "...",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
];
```

The data is rendered dynamically using JavaScript's `map()` method.

### Card Component

The `Card` component is reusable and receives:

* `title`
* `description`
* `imageSrc`

as props.

This demonstrates component reusability and the use of React props.

### Contact Me Section

The contact form uses:

* **Formik** for form state and submission handling
* **Yup** for validation
* Chakra UI form components
* Custom `useSubmit` hook
* Global alert context

The form validates:

* Name is required
* Email is required and must have a valid email format
* Enquiry type is required
* Message is required and must contain at least **25 characters**

Example validation:

```javascript
comment: Yup.string()
  .min(25, "Comment must be at least 25 characters")
  .required("required")
```

Validation errors are displayed directly below the corresponding form fields.

### Global Alert System

The application uses the **React Context API** to provide a global alert system.

The `AlertProvider` stores:

```text
isOpen
type
message
```

Components can access the alert functionality using:

```javascript
useAlertContext()
```

The alert displays different messages for successful and failed submissions.

### Custom `useSubmit` Hook

The project includes a custom React hook:

```text
useSubmit.js
```

It manages:

* Loading state
* Submission response
* Success handling
* Error handling

The current implementation simulates an API request by waiting for two seconds and randomly generating a success or failure response.

**Note:** The current contact form does not send data to a real backend service. The submission behavior is intended to demonstrate asynchronous operations, loading states, and error/success handling.

## React Concepts Demonstrated

This project demonstrates several important React concepts:

### Components

The UI is divided into reusable components such as:

```text
Header
LandingSection
ProjectsSection
Card
ContactMeSection
Footer
Alert
```

### Props

The reusable `Card` component receives project information through props:

```javascript
<Card
  title={project.title}
  description={project.description}
  imageSrc={project.getImageSrc()}
/>
```

### State

`useState` is used for managing application state such as:

* Alert visibility
* Alert type
* Alert message
* Form submission/loading state

### Context API

`AlertContext` provides alert functionality throughout the application without passing alert props through multiple components.

### Effects

`useEffect` is used for:

* Detecting scroll events
* Updating the navigation header
* Reacting to form submission responses

### Refs

`useRef` is used for:

* Accessing the header element
* Tracking the previous scroll position
* Managing the alert dialog reference

### Custom Hooks

The project demonstrates creating a custom hook:

```javascript
useSubmit()
```

This separates submission-related logic from the UI components.

## Styling

The application primarily uses **Chakra UI** for component styling and responsive layouts.

Chakra UI components used include:

* `Box`
* `Flex`
* `VStack`
* `HStack`
* `Heading`
* `Text`
* `Image`
* `Avatar`
* `Button`
* `Input`
* `Select`
* `Textarea`
* `FormControl`
* `FormErrorMessage`
* `AlertDialog`

Global CSS is used for basic document styling and font configuration.

## Responsive Design

The project uses Chakra UI's responsive properties to adapt the layout to different screen sizes.

For example, the project grid changes from one column on smaller screens to two columns on medium-sized screens:

```javascript
gridTemplateColumns={{
  base: "1fr",
  md: "repeat(2, minmax(0, 1fr))",
}}
```

## Form Validation Flow

The contact form follows this flow:

```text
User enters information
        ↓
Formik manages form state
        ↓
Yup validates input
        ↓
Validation errors displayed
        ↓
User submits form
        ↓
useSubmit() handles submission
        ↓
Loading state displayed
        ↓
Success / Error response
        ↓
Global Alert displayed
        ↓
Form reset on successful submission
```

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd <project-folder>
```

### 3. Install dependencies

Since `node_modules` is not included in the repository:

```bash
npm install
```

Alternatively, when `package-lock.json` is available:

```bash
npm ci
```

### 4. Start the development server

```bash
npm start
```

The application will be available at the local development URL displayed by the React development server.

## Dependencies

The main libraries used in this project include:

* React
* Chakra UI
* Formik
* Yup
* Font Awesome
* React Font Awesome

The exact versions are maintained in:

```text
package.json
package-lock.json
```

## Git and Project Management

The project is maintained using Git and GitHub.

The repository excludes generated and machine-specific files such as:

```text
node_modules/
.vscode/
.env
```

Dependencies can be recreated from the committed dependency files using:

```bash
npm ci
```

## Future Improvements

Possible future improvements include:

* Connect the contact form to a real backend/API
* Add project detail pages
* Add React Router for multi-page navigation
* Add animations and transitions
* Add dark/light theme switching
* Deploy the application using a cloud hosting platform
* Add automated testing
* Add a production build and deployment workflow

## License

This project is intended for educational and portfolio purposes.