# **Library Management System API**

## **Problem Statement**

You are tasked with developing a Library Management System API that allows users to manage a library's book collection stored in JSON format. The API should support all four CRUD operations (Create, Read, Update, Delete) for the book data. Each book in the library has the following attributes:

- `book_id`: A unique identifier for the book (integer or string).
- `title`: The title of the book (string).
- `author`: The author of the book (string).
- `genre`: The genre of the book (e.g., Fiction, Non-fiction, Fantasy, etc.).
- `year`: The publication year of the book (integer).
- `copies`: The number of copies of the book available in the library (integer).

Make sure that the input was clearly validated and is and valid input for the question.
And repond to those kind of inputs properly.

Your goal is to create an API with the following functionalities:

## **Functional Requirements**

### **Create a New Book (C)**

- **Endpoint**: `POST /books`
- **Description**: Add a new book to the library.
- **Input**: A JSON object with all the book attributes (`book_id`, `title`, `author`, `genre`, `year`, `copies`).
- **Output**: Return the added book's details as a response.

Make sure to handle the responce if the requested books was not there in every operations.

#### Example Request Body:

````json
{
    "book_id": "101",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Fiction",
    "year": 1925,
    "copies": 5
}

### **Read Book Information (R)**

#### **Retrieve All Books:**

- **Endpoint**: `GET /books`
- **Description**: Fetch the list of all books in the library.
- **Output**: Return a JSON array of all book objects.

#### **Retrieve a Specific Book by ID:**

- **Endpoint**: `GET /books/:id`
- **Description**: Fetch the details of a single book using its `book_id`.
- **Input**: Book ID as a path parameter.
- **Output**: Return the corresponding book object if found or an error message if the book doesn't exist.

### **Update Book Information (U)**

- **Endpoint**: `PUT /books/:id`
- **Description**: Update the details of an existing book using its `book_id`.
- **Input**: The `book_id` in the path parameter and a JSON object with updated attributes (any or all).
- **Output**: Return the updated book's details or an error message if the book doesn't exist.

#### **Example Request Body**:
```json
{
    "title": "The Great Gatsby (Updated Edition)",
    "copies": 7
}


### **Delete a Book (D)**

- **Endpoint**: `DELETE /books/:id`
- **Description**: Remove a book from the library using its `book_id`.
- **Input**: Book ID as a path parameter.
- **Output**: Return a success message or an error if the book doesn't exist.


# **How to Fork and Set Up Your Repository**

---

## **1. Fork the Repository on StackBlitz**
- You will be provided with a **StackBlitz** link for the assignment.
- Open the link in your browser and click on the **Fork** button in StackBlitz.
  This will create a copy of the repository in your StackBlitz account.

---

## **2. Clone the Repository to Your Personal GitHub**
- After forking, you can download the project or push it directly to your personal GitHub repository:
  - **Option 1: Download and Push**
    1. Download the repository files from StackBlitz.
    2. Open your terminal/command prompt, navigate to the project folder, and run:
       ```bash
       git init
       git remote add origin <your_github_repo_url>
       ```
       Replace `<your_github_repo_url>` with your personal GitHub repository URL.
    3. Commit and push the files to your GitHub repository:
       ```bash
       git add .
       git commit -m "Completed the assignment"
       git push -u origin main
       ```
  - **Option 2: Push Directly**
    1. Use the **Push to GitHub** option in StackBlitz to directly connect and push the repository to your GitHub account.

---

## **3. Submission Instructions**
- Once your code is successfully pushed to GitHub:
  1. Copy the link to your GitHub repository.
  2. Submit the link on the assignment submission portal.
     The link should follow this format:
     **`https://github.com/<your_username>/<repository_name>`**

---

### **Example Submission**
If your GitHub username is `johnDoe` and the repository name is `assignment-repo`, the submission link would look like this:
**`https://github.com/johnDoe/assignment-repo`**
````
