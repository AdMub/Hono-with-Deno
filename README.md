# Fuel Up Your API Development with Hono and Deno

![image](https://github.com/user-attachments/assets/c014e89c-bf17-45b7-bda2-ca623b994c6f)
</br>

Welcome to the "Fuel Up Your API Development" campaign! This project introduces you to building APIs using the Hono middleware framework and the powerful Deno runtime. Dive into backend development by creating APIs that follow Web standards, simulate real-world scenarios with mock data, and incorporate advanced features like authentication, authorization, and secure data handling.


## Table of Contents
1. [Description](#description)
2. [Prerequisites](#prerequisites)
3. [Learning Outcomes](#Learning-Outcomes)
4. [Quest Details](#Quest-Details)
5. [Project Setup](#Project-Setup)
6. [Steps](#Steps)
7. [Deliverables](#Deliverables)
8. [License](#license)
9. [Conclusion](#Conclusion)


##  [Description](#description)

In this campaign, you will dive in and learn another middleware framework for backend development, Hono 🔥.
Combined with the power of Deno 🦕, you will explore how to create backend APIs using Web standards.

You will learn to:

Create API routes.

Generate mock data using faker and zod factory.

Perform CRUD operations with SQLite.

Implement protected routes using authentication and authorization logic.

Fuel up and begin your API development with Hono 🔥 and Deno 🦕.

##  [Prerequisites](#prerequisites)

To complete this quest, ensure you have:

Familiarity with JavaScript and TypeScript.

A working development environment of VSCode.

##  [Learning Outcomes](#Learning-Outcomes)

After completing this campaign, you will be able to:

Build APIs using Hono and Deno.

Create protected routes with Hono.

Include tests for your backend.

##  [Quest Details](#Quest-Details)

### Introduction

This quest continues your journey in API development with Hono and Deno, focusing on:

Creating, replacing, updating, and deleting data.

Securing API endpoints using authentication and authorization.

##  [Project Setup](#Project-Setup)

### Requirements

Install Deno on your machine. Follow the official Deno installation guide.

#### Steps

1. Clone the repository:

bash:

git clone <repository_url>

cd <repository_name>

2. Install dependencies:

bash:

deno task install

3. Start the server:

bash:

deno task serve


##  [Steps](#Steps)

### Step 1: Cryptographic Logic

Install additional dependencies

bash:

deno add 'jsr:@std/crypto' 'jsr:@std/encoding' 'jsr:@zaubrik/djwt' 'npm:zod@3.23.8'

Create a generateToken.ts file to generate API keys.

### Step 2: Auto Populate Multiple Databases for Mock Tests

Populate databases with mock data using faker and zod factory.

### Step 3: Adding Tests

Write test cases for schemas using @std/assert.

### Step 4: Protecting API Endpoints

Add checkAuth middleware to secure PUT and DELETE endpoints.

### Step 5: Adding Login and Register Middleware

Implement registration and login endpoints for admin users.

### Step 6: Using the New API

Use Postman to interact with the API.

##  [Deliverables](#Deliverables)

![image3](https://github.com/user-attachments/assets/19a782a0-1868-4a48-81b4-5a3ae3578628)
</br>
![image4](https://github.com/user-attachments/assets/a97da1ee-34f9-410d-8242-607e568e5d7e)
</br>
![image3_1](https://github.com/user-attachments/assets/0919c053-0c59-4a21-a729-0169f34977a3)
</br>
![image4_1](https://github.com/user-attachments/assets/19ba58bb-27d4-4e84-8186-265eae7dcf01)
</br>

### Step 7: Final Submission

![C46_Q3_engr_pet_details](https://github.com/user-attachments/assets/47901a57-324c-4433-882c-b1d9f4364e4c)
</br>
![C46_Q3_engr_people](https://github.com/user-attachments/assets/09e22eb0-01a5-4eae-a247-0f5a103f97be)
</br>

##  [License](#license)

This project is licensed under the MIT License.


##  [Conclusion](#Conclusion)

This project showcases the power of modern web development tools by combining Hono, a high-performance middleware framework, with Deno, a secure and developer-friendly runtime. By following the outlined steps, you have:

Learned to build robust APIs adhering to web standards.

Explored advanced features such as JWT-based authentication, password hashing with Argon2, and cryptographic logic.

Implemented and tested protected routes for enhanced security.

Gained experience with mock data generation for testing and database management using SQLite.

The project equips developers with essential skills for backend development, focusing on creating secure, scalable, and efficient APIs. By applying these principles, you can confidently tackle real-world applications and further extend this project to meet diverse domain requirements.

Fuel up your API development journey with Hono 🔥 and Deno 🦕, and leverage these modern tools to create next-level backend solutions!

@StackUp



