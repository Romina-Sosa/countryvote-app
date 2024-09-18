# CountryVote

## Overview
CountryVote is an app where users can vote for their favorite countries. 

![Screenshot from 2024-09-17 05-35-44](https://github.com/user-attachments/assets/3c216ab8-a1a8-4842-862d-77ad30c1cb1b)

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Technology](#technology)
4. [Design Choices](#design-choices)
   1. [Frontend design](#frontend-design)
   2. [Backend design](#backend-design)
5. [Trade-offs](#trade-offs)
   1. [Frontend Trade-offs](#frontend-trade-offs)
   2. [Backend Trade-offs](#backend-trade-offs)
6. [Estimated time](#estimated-time)

## Installation

After cloning the project, run

  ```bash
  cd frontend
  npm install

  ```

  ```bash
  cd backend
  npm install

  ```
to install all the dependencies in each project

## Usage

### Frontend Service

Open a new terminal and run:

  ```bash
  cd frontend
  npm start

  ```
### Backend Service

In another terminal and run:
   ```bash
  cd backend
   npm start
```
In the terminal you will see the message: `Server is running on port 5000`

## Technology

### Frontend
- React (v18.3.1)
- TypeScript (v4.9.5)
- Axios (v2.0.6)
- styled-components: (v6.1.13)

### Backend
- Node.js (v22.8.0)
- Express (v4.210)
- TypeScript (v5.6.2)
- Axios (v1.7.7)
- Nodemon (v3.1.4)


## Design Choices

### Frontend Design

#### Functional requirements: 

##### Voting Form: 
To meet the functional requirements, I implemented a form with three fields: a text input for the user's name, a text input for the email address, and a select dropdown for choosing a country to vote for. To ensure that these fields are not empty, I use a state that tracks the values of all three inputs (name, email, and country) and performs validation to check that the name and email fields are filled in.
For email validation, I leverage the validator.js library. Specifically, I use its isEmail function to verify that the provided email address is formatted correctly and adheres to standard email address conventions.

##### Country Display Table
To display the top 10 countries sorted by votes with search functionality, I used the basic table component from the Material UI library. This component aligns with Google’s Material Design principles, providing a modern and consistent UI. Additionally, it is easy to use and integrates seamlessly with search features.

Additionally, the search functionality relies on a backend API that searches for countries based on a query. On the frontend, I simply pass the user’s input to this API. The API then returns countries that have a match in at least one of their fields, ensuring that the results are relevant to the search terms provided

#### Non-Functional requirements: 

##### Technologies

For this project, I chose to use React with TypeScript based on the recommended technologies. React provides a robust and efficient framework for building interactive user interfaces, while TypeScript enhances the development process with static typing, and helps to catch errors early in the development process

##### Application style 
To style the application, I chose the `styled-components library`. It enables writing CSS directly within JavaScript, integrating seamlessly with React components. This approach not only streamlines styling for JavaScript developers but also offers the flexibility to dynamically adjust component styles using props.

I also used Prettier, a tool that automatically formats code based on configurable rules and guidelines. Prettier significantly improved development speed and reduced the time spent on style reviews during code reviews, thereby enhancing code readability and overall understanding of the program.

### Backend Design

#### Functional requirements: 

##### User votes 
To achieve this process, I created an API that is triggered when the user submits their vote. The API receives the new vote data, updates the existing JSON data by appending the new information, and then writes the updated data back to storage. Additionally, if it's the first time a country has received a vote, the API uses the REST Countries API to retrieve other relevant fields about the country and saves this information together with the vote data.

On the other hand, to verify if a person has already voted with a particular email, I created another API that checks for the email's existence. This API queries a JSON file that contains a list of all emails that have already voted. It is triggered when the user enters their email in the frontend input field. This preemptive check helps prevent duplicate submissions, as it ensures that if the email is already in the list, a vote cannot be submitted. This approach avoids the need to delete recent votes after they have been submitted.

##### Retrieve a list of the most 10 favorite countries
To accomplish this, I created a separate API that retrieves the top 10 most-voted countries from the app. This API reads the JSON file containing all vote data and extracts the first 10 entries, as the data is already sorted by vote count.

#### Non-Functional requirements: 

##### Technologies

For the backend, I opted for Node.js with Express, similar to the frontend choice. This technology stack is recommended for its flexibility and widespread use within the Node.js ecosystem. Express is known for its minimalistic and adaptable approach, which aligns well with the needs of a small project like this one. Its popularity and ease of use make it a practical choice, allowing for efficient development while providing the freedom to tailor the application as needed.

## Trade-offs

### Frontend Trade-offs
One of the main trade-offs in the frontend development was the deviation from the exact Figma design. While I am accustomed to using Figma's developer tools for precise styling, I did not have access to them for this project.
As a result, there were instances where I had to hardcode certain styles to position components correctly, leading to some discrepancies from the original design. Despite my efforts to align the app closely with the Figma mockups, some details differ from the design. This compromise was necessary to ensure timely delivery while striving to maintain visual consistency as much as possible.

### Backend Trade-offs
One of the main trade-offs in my backend development process was my lack of familiarity with Node.js. To address this, I spent some time researching and watching tutorials to get up to speed. Although choosing a framework I was more comfortable with might have reduced the project timeline, I opted for Node.js because it's well-suited for this type of project. Despite my initial unfamiliarity, I believed it was the best choice for the task. As a result, some parts of the implementation might not be as clean or optimal as they could be if I had more experience with Node.js.

Another decision involved data storage. Initially, I considered using a database. My first choice was MongoDB, given its compatibility with Node.js and its reputation as an excellent NoSQL database. However, since I was unfamiliar with MongoDB and had to learn it from scratch, I decided against it due to the additional learning curve and time required.

Next, I thought about using PostgreSQL, a relational database with which I have more experience. However, I realized that for this relatively simple project, a full-fledged database might be overkill. Consequently, I chose to store data in JSON files.

While this approach has the disadvantage of requiring me to overwrite the JSON file each time I add new data, it is straightforward and does not involve complex configurations.

## Estimated time

The first step in this project was to read up on Node.js and how to use it with React and TypeScript. I estimate this took about 2 hours.

After setting up both projects, I started working on the frontend design. This part was relatively straightforward and took me around 6 hours.

Next, I focused on the backend development. Despite having already read some articles about Node.js and Express, I spent an additional hour researching the best structure for the repository and determining the functions needed for each file. I then began developing the initial APIs and connecting them to the frontend. This process took about 9 hours, during which I also conducted some online research to help solve issues and gain additional insights.

Once I had established the connection between the frontend and backend, I turned my attention to data storage. I explored various databases and spent approximately 3 hours learning how to connect different databases to Node.js and experimenting with them. Ultimately, I decided to use JSON files for storage. I then completed the remaining functionalities to ensure all APIs worked correctly, which took me another 4 hours.

Finally, I spent around 2 hours cleaning up and commenting the code to improve its readability for others.

##### A concise resume of the time spent on each part of the project:
- Initial Research: 2 hours 
- Frontend Design: 6 hours
- Backend Development: 10 hours
- Data Storage Setup: 2 hours
- Completing APIs: 4 hours
- Code Cleanup: 2 hours

In total, I estimate that I spent about 26 hours on this project.

