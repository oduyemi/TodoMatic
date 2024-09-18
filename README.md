## TodoMatic

### Overview

TodoMatic is a task management application built to help users organize their tasks efficiently. With a user-friendly interface, TodoMatic allows users to add, manage, and track tasks based on their completion status and scheduled time. The app features filtering options to display active, completed, or all tasks, providing users with a streamlined experience.

### Hosted URL

The application is live at: [https://todomatic-henna.vercel.app/](https://todomatic-henna.vercel.app/)

### Tech Stack

- **React**: A JavaScript library for building user interfaces.
 
- **Chakra UI**: A modular, accessible React component library for styling.
  
### Features

1. **Add New Tasks**: Users can input a task description and set a time for task execution.
2. **Task Status Management**: 
   - **Active Tasks**: Tasks within 20 minutes of the current time are marked as "active."
   - **Completed Tasks**: Users can mark tasks as complete, which moves them to the "Completed" tab.
3. **Delete Tasks**: Users can remove tasks they no longer need.
4. **Task Filtering**: Users can filter tasks based on their status—All, Active, or Completed.
5. **Responsive Design**: Optimized for all device sizes, from mobile to desktop.

### Technologies Used

- **React**: For building the app’s interface and managing states.

- **Chakra UI**: For styling and UI components, such as buttons, modals, and forms.

- **Day.js**: For managing date and time-related functionalities.

- **Vercel**: Used for deployment, providing a fast and reliable hosting platform.

### How to Use TodoMatic

1. **Adding a Task**:

   - Enter a task description in the input field.

   - Click the "Add" button, which opens a modal.

   - In the modal, set the task’s date and time using the datetime picker and click "Add Task."

3. **Marking a Task as Complete**:

   - In the task list, active tasks have a "Mark Complete" button.

   - Click this button to mark the task as completed, which moves it to the "Completed" tab.

5. **Deleting a Task**:

   - To delete a task, click the "Delete" button next to it. This will remove it from the task list.

7. **Filtering Tasks**:

   - The filtering options at the top (All, Active, Completed) allow users to switch between task views.

### Components

#### Main Component

The main functionality of the application is handled within this component:

- **Task Management**: Users can add, edit, delete, and mark tasks as complete.

- **Modals**: The app uses Chakra UI’s modal component to handle task input, including specifying the task time.

- **Task Filtering**: Tasks are filtered based on their status (all, active, completed), allowing users to manage their to-dos effectively.

#### Task Object Structure

Each task consists of the following properties:

- `id`: Unique identifier for each task.

- `label`: The task description.

- `time`: Date and time when the task is expected to be done.

- `status`: Task state, either `active` or `completed`.

### Future Features

- **Task Editing**: Ability to edit existing tasks.

- **Reminders**: Notifications or reminders for tasks nearing their scheduled time.

- **Data Persistence**: Adding local storage or database support to maintain tasks across sessions.

### Conclusion

TodoMatic simplifies task management with features like task filtering, active task detection, and task status updates. Try it out today at [https://todomatic-henna.vercel.app/](https://todomatic-henna.vercel.app/) to start organizing your tasks efficiently!
