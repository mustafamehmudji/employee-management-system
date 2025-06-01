# Employee Management System (EMS)

## Description

The Employee Management System (EMS) is a web-based application designed to help organizations efficiently manage employee tasks and monitor their progress. The system provides two main dashboards: one for administrators to assign and track tasks, and another for employees to view, accept, and update their assigned tasks. The application features user authentication, task creation, task status tracking, and a visually appealing dashboard for both admins and employees.

## Features

- **User Authentication:** Supports login for both admin and employees.
- **Admin Dashboard:**
  - Assign new tasks to employees.
  - View all employees and their task statistics (new, active, completed, failed).
- **Employee Dashboard:**
  - View assigned tasks categorized by status (new, active, completed, failed).
  - Accept new tasks and update their status.
- **Task Management:** Tasks can be marked as completed or failed by employees.
- **Persistent Storage:** Uses browser localStorage to persist user and task data.
- **Responsive UI:** Built with Tailwind CSS for a modern and responsive design.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast development build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **LocalStorage API**: For client-side data persistence.
- **ESLint**: For code linting and quality.
- **JavaScript (ES2020+)**: Application logic and React components.

## Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  context/
    AuthProvider.jsx
  utils/
    localStorage.jsx
  components/
    auth/
      Login.jsx
    dashboard/
      AdminDashboard.jsx
      EmployeeDashboard.jsx
    other/
      Header.jsx
      CreateTask.jsx
      AllTask.jsx
      TaskListNumbers.jsx
    tasklist/
      TaskList.jsx
      AcceptTask.jsx
      NewTask.jsx
      CompleteTask.jsx
      FailedTask.jsx
public/
  vite.svg
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd ems
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. **Open the app:**
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- **Admin Login:**  
  Email: `admin@me.com`  
  Password: `123`

- **Employee Login:**  
  Use one of the employee emails and password (`123`) from the seeded data in [`src/utils/localStorage.jsx`](src/utils/localStorage.jsx).

## File Overview

- [`src/App.jsx`](src/App.jsx): Main application logic and routing.
- [`src/context/AuthProvider.jsx`](src/context/AuthProvider.jsx): Provides authentication context.
- [`src/utils/localStorage.jsx`](src/utils/localStorage.jsx): Handles localStorage data for users and tasks.
- [`src/components/`](src/components/): Contains all UI components for authentication, dashboards, and task management.

## License

This project is for educational purposes.
