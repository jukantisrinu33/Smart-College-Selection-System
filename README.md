![time line chart](https://github.com/user-attachments/assets/3045be99-8390-4360-be8c-359ce1c47418)

# SMART COLLEGE SELECTION SYSTEM

**Smart College Selection System** is a web application that allows users to create accounts, submit details like Aadhaar, JEE/Advanced rank, caste, and income certificates, and apply for colleges from home. This platform simplifies the college selection and application process, providing students with an easy-to-use online interface to submit their documents and track applications. The system streamlines the application process for students, ensuring secure data submission and improved access to college application services.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Features
- **User Registration and Authentication**: Secure user accounts for students to manage applications.
- **Document Submission**: Allows students to submit Aadhaar, JEE/Advanced rank, caste, and income certificates.
- **College Application**: Students can apply to multiple colleges directly through the platform.
- **Responsive Design**: Mobile-friendly UI using Bootstrap and CSS.
- **Real-Time Notifications**: Students receive updates on application status.
- **Data Security**: Secure storage and management of personal data.

## Tech Stack
- **Frontend**: EJS, JavaScript, Bootstrap – For building the user interface and ensuring responsive design.
- **Backend**: Node.js, Express.js – For handling server-side logic and routing.
- **Database**: MongoDB – A NoSQL database for storing user information and application data.
- **Version Control**: Git, GitHub
- **Authentication**: Custom authentication using secure methods.

## Project Structure
```
smart-college-selection-system/
├── controllers/
│   ├── applications.js
│   ├── auth.js
│   ├── users.js
├── models/
│   ├── application.js
│   ├── user.js
│── public/
│   ├── css/
│   │   ├── style.css
│   ├── js/
│   │   ├── script.js
├── routes/
│   ├── applications.js
│   ├── auth.js
│   ├── users.js
├── views/
│   ├── includes/
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   ├── layouts/
│   │   ├── main.ejs
│   ├── applications/
│   │   ├── apply.ejs
│   │   ├── status.ejs
│   ├── users/
│   │   ├── login.ejs
│   │   ├── register.ejs
│   ├── home.ejs
│   ├── error.ejs
├── app.js
├── config.js
├── middleware.js
├── package-lock.json
├── package.json
├── README.md
```

## Installation

### Prerequisites
- **Node.js** (v12 or higher)
- **MongoDB** (local instance or MongoDB Atlas)

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/smart-college-selection-system.git
   cd smart-college-selection-system
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**: Create a `.env` file in the root directory and add your MongoDB URI and Cloudinary URI:
   ```env
   MONGO_URI=your_mongo_uri
   API_NAME,
   API_KEY
   
   ```

4. **Run the server**:
   ```bash
   nodemon index.js
   ```

5. **Access the application**:
   Open your browser and navigate to [http://localhost:4000/SCSS](http://localhost:4000/SCSS).

## Usage

- **Student Dashboard**: Students can register, log in, submit documents, and apply to colleges. They can track the status of their applications.

## Screenshots
*(![Screenshot (213)](https://github.com/user-attachments/assets/ebba2755-c2e8-4dd7-9e64-4abda07f73cd)
![Screenshot (212)](https://github.com/user-attachments/assets/db2d3cfd-7e7a-4384-a5bc-f014c8308638)![Screenshot (214)](https://github.com/user-attachments/assets/d7e2ab68-772f-4b8e-b90e-03193b2bb59f)
![Screenshot (215)](https://github.com/user-attachments/assets/c2822a80-9f27-4785-b682-76e8ef51d2dd)
![Screenshot (216)](https://github.com/user-attachments/assets/6627ced9-dbc5-448a-986a-f0f393c8031d)
![Screenshot (217)](https://github.com/user-attachments/assets/d801cac0-3cad-4965-a4f1-d30e0ee53f7f)
![Screenshot (218)](https://github.com/user-attachments/assets/99665743-9625-4124-928d-77a7451573ab)
![Screenshot (219)](https://github.com/user-attachments/assets/6054d76d-f883-435b-a757-fab917b66f5b)


)*


## Testing
*(Unit Testing)*


Let me know if there’s anything more you’d like to add or customize!
