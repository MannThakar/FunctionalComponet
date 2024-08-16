### GitHub Documentation for Parent-Child Component Interaction

---

## Overview

This repository contains a simple React application demonstrating communication between parent and child components. The project includes three main files: `Parent.jsx`, `Child.jsx`, and `ParentToChild.jsx`.

---

## Components

### 1. Parent Component (`Parent.jsx`)

The `Parent.jsx` file contains the `Parent` component. It is responsible for holding the state that will be passed down to the child component. The parent component updates the state and passes it to the child as props.

Key Features:

- **State Management:** The `Parent` component manages the state that is shared with the `Child` component.
- **Event Handlers:** The component includes methods for updating the state, which are passed down to the child component to handle events.

### 2. Child Component (`Child.jsx`)

The `Child.jsx` file contains the `Child` component, which receives props from the `Parent` component. The child can also trigger events to update the parent’s state.

Key Features:

- **Props Usage:** The `Child` component uses props to display and interact with the data provided by the parent.
- **Event Handling:** The child component can trigger functions passed down from the parent to modify the parent’s state.

### 3. Parent to Child Interaction Component (`ParentToChild.jsx`)

The `ParentToChild.jsx` file brings together the `Parent` and `Child` components to demonstrate how data and events flow between them.

Key Features:

- **Component Composition:** This component composes both the `Parent` and `Child` components, facilitating their interaction.

---

## How to Run

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Application:**

   ```bash
   npm start
   ```

4. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

---
