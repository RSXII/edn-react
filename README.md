### Current Build: https://edn-react.vercel.app/

# EDN Yards

EDN Yards is an innovative platform designed to assist homeowners in planning and designing their home landscaping with professional guidance. With a user-friendly interface built with React for the front end, and a robust API crafted in Golang using the Gin framework for the backend, EDN Yards makes landscaping projects more accessible and efficient.

## Front End

The front end of EDN Yards is built with React and Vite, which facilitates a rapid development cycle and optimized builds. It's deployed through Vercel for a scalable and efficient hosting solution.

### Installation

To set up the front end on your local machine:

1. Clone the repository:

> git clone [https://github.com/RSXII/edn-react]

2. Navigate to the front-end directory:

> cd edn-yards/edn-react

3. Install dependencies:

> npm install

4. Start the development server with Vite:

> npm start

## Back End API

The back end API for EDN Yards is built with Golang using the Gin framework, ensuring a fast and efficient service. Deployment is managed through Google Cloud Run with Docker, providing scalability and easy management.

### Installation

To set up the back end API locally:

1. Clone the repository (if you haven't already):

> git clone [https://github.com/RSXII/edn-react]

2. Navigate to the back-end directory:

> cd edn-yards/edn-api

3. Run the server using Go:

> go run ./

### Docker Setup

Alternatively, if you want to run the back end inside a Docker container:

1. Build the Docker image:

> docker build -t edn-yards-api .

2. Run the Docker container:

> docker run --name edn-yards-api -p 8080:8080 edn-yards-api

### Usage

Once the back end is up, you can access the API by making requests to localhost:8080 (or the port configured in your environment).
