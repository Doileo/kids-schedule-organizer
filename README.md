# Kids' Schedule Organizer

This project is a chance to enhance my React skills while building a practical tool for organizing kids' daily activities. The app lets parents and caregivers easily manage schedules with features like adding, deleting, and marking activities as done. Animated icons for morning, afternoon, and evening keep it engaging, and with a mobile-first, accessible design, it’s built for a smooth, inclusive experience.

## Table of Contents

- [Kids' Schedule Organizer](#kids-schedule-organizer)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshots](#screenshots)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
    - [Useful Resources](#useful-resources)
  - [Installation Instructions](#installation-instructions)
  - [Dependencies](#dependencies)
  - [Usage Instructions](#usage-instructions)
  - [Project Structure](#project-structure)
    - [Key Files](#key-files)
  - [Author](#author)

## Overview

### The Challenge

Building the Kids' Schedule Organizer meant focusing on a few key challenges to make it easy and enjoyable to use:

- **Simple Task Management**: Make adding, removing, and checking off tasks quick and easy for busy parents and caregivers.
- **Fun and Clear Design**: Use animated icons for morning, afternoon, and evening sections to keep things visually engaging and organized.
- **Mobile-Friendly and Accessible**: Design the app to work well on mobile devices first, making sure it’s easy for everyone to use.

These goals helped shape the project and were a great way to strengthen my React skills.

### Screenshots

| Device      | State            | Screenshot                                                                   |
| ----------- | ---------------- | ---------------------------------------------------------------------------- |
| **Mobile**  | Default View     | ![Mobile Default](src/assets/screenshots/mobile-default-screenshot.png)      |
|             | Calendar Opened  | ![Mobile Calendar Opened](src/assets/screenshots/mobile-calendar-opened.png) |
|             | Week View Opened | ![Mobile Week View](src/assets/screenshots/mobile-week-view.png)             |
| **Tablet**  | Default View     | ![Tablet Default](src/assets/screenshots/tablet-default-screenshot.png)      |
|             | Adding a Task    | ![Tablet Adding Task](src/assets/screenshots/tablet-add-task.png)            |
| **Desktop** | Default View     | ![Desktop Default](src/assets/screenshots/desktop-default-screenshot.png)    |
|             | Marked as Done   | ![Desktop Marked Done](src/assets/screenshots/desktop-marked-done.png)       |

### Links

- **[Live Demo](https://kids-schedule-organizer.vercel.app/)**: A live demonstration of the application.
- **[GitHub Repository](https://github.com/Doileo/kids-schedule-organizer)**: Access the source code and project files.

## My Process

### Built With

- **React**: Core framework for building interactive user interfaces.
- **HTML5 & CSS3** (with Flexbox and Grid): For structuring and styling the app.
- **JavaScript** (ES6+): For handling logic and interactions.
- **Vercel**: For seamless deployment and hosting.
- **Lighthouse**: For performance and accessibility optimization.

### What I Learned

- **Task Management in React**: Implemented adding, deleting, and marking tasks as done, gaining experience with React’s state management and component structure.
- **Accessible Design Practices**: Focused on creating accessible navigation and content, improving my skills in developing inclusive user experiences.
- **CSS Animations**: Used animated icons for morning, afternoon, and evening sections to create an engaging experience, enhancing my understanding of CSS animations and transitions.

### Continued Development

Future improvements may include:

- **Enhanced Calendar Features**: Adding interactive calendar functionality for better scheduling.
- **Customizable Themes**: Allowing users to choose themes or colors for a more personalized interface.
- **Push Notifications**: Implementing notifications to remind users of upcoming activities.
- **Progress Tracking**: Adding a feature to track weekly or monthly task completion.

### Useful Resources

- **[CSS Tricks - Animations Guide](https://css-tricks.com/almanac/properties/a/animation/)**: A guide that dives into CSS animations with examples, including easing, timing, and chaining animations.
- **[MDN Web Docs - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)**: An in-depth guide on keyframes, transitions, and best practices for animations.
- **[React Documentation - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)**: An overview of state and lifecycle in React components, essential for managing component behavior.
- **[Prefers-Reduced-Motion in CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)**: This article explains how to use `prefers-reduced-motion` to respect user preferences, allowing you to toggle animations based on motion preferences.

## Installation Instructions

To set up the Kids' Schedule Organizer on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/kids-schedule-organizer.git

   ```

2. Navigate to the project directory:
   ```bash
   cd kids-schedule-organizer
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Dependencies

The project relies on the following dependencies:

- **React**: Core library for building the user interface.
- **React Router**: Used for navigating between different sections.
- **Local Storage**: For persisting selected date and week across sessions.

These dependencies are essential for the app's functionality, enabling the addition, deletion, and management of scheduled tasks for each time of day.

## Usage Instructions

1. **Run the app**:
   start the app by running the following command in your terminal:

```bash
npm start
```

This will launch the app on http://localhost:3000.

2. **Choose a Date and Week**:

- Use the header controls to select a specific date and week. These choices are saved to local storage, so they persist between sessions.

3. **Manage Tasks**:

- **Add**: Enter a new activity in the input box and click "Add" to create a new task for the selected time section.
- **Mark as Done**: Check the box next to a task to mark it as completed.
- **Delete**: Use the "Delete" button next to each activity to remove it.

4. **Navigate the Schedule**:

- The app is divided into three main sections: Morning, Afternoon, and Evening.
- Each section has unique animated icons and time slots, making it easier to categorize and manage daily tasks.

## Project Structure

- `src/`
  - `assets/`: Contains the icons and screenshots used in the project.
  - `components/`: Contains React components for the schedule organizer.
    - `ActivityList/`: Contains components related to listing activities for different times of the day.
    - `Header/`: Contains the header for the application.
  - `App.js`: Main application component that sets up the application and includes the core logic.
  - `App.css`: The main stylesheet for styling the application.
  - `hooks/` (unused): Created for custom React hooks but not in use currently.
  - `utils/` (unused): Intended for utility functions but not implemented yet.
  - `DailyView/` (unused): Designed for a potential view but not part of the current project.
  - `WeeklyView/` (unused): Designed for a potential view but not part of the current project.
- `public/`
  - `index.html`: The main HTML file for the project.

### Key Files

- **`App.js`**: Manages the rendering of components and application logic.
- **`App.css`**: Contains the global styles for the application.
- **`ActivityList/`**: Contains the components for displaying activities in the morning, afternoon, and evening.
- **`Header/`**: Contains the header section of the application.

## Author

- LinkedIn - [@Doina](https://www.linkedin.com/in/doinaleovchindeveloper/)
- GitHub - [@Doileo](https://github.com/Doileo)
