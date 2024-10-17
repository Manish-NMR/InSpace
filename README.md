# InSpace (Charging and Parking Assistance Website)

This project is a prototype for a charging and parking station search and booking platform. It allows users to search for nearby charging and parking stations and book slots for their vehicles. The project features user authentication and booking functionality, with a seamless UI/UX design.

![image](https://github.com/user-attachments/assets/14e6b84d-2bec-42bc-b691-388fc90d58c2)
![image](https://github.com/user-attachments/assets/9c51e987-a819-4656-b476-d7aaf04c925b)
![image](https://github.com/user-attachments/assets/53b8c7c3-5319-4a6f-b3b2-0d40e254edef)
![image](https://github.com/user-attachments/assets/92d9fb55-df60-4428-a609-d70ca00c5eb8)

## Features
- **Search for Charging and Parking Stations**: Users can search for stations based on location.
- **Booking Functionality**: Registered users can book slots at available stations.
- **User Authentication**: Secure user registration and login system using JWT.
- **Responsive Design**: The interface is fully responsive and optimized for different devices.
  
## Tech Stack
- **Frontend**: Vite, React, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **UI/UX Design**: Figma

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ManishNMR/InSpace.git
   cd InSpace
   ```

2. **Install dependencies for both frontend and backend:**

3. **Set up environment variables:**
   Create a `.env` file in the api directory and add the following environment variables:
   ```bash
   MONGO_URL=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```
   Create a `.env` file in the client directory and add the following environment variables:
   ```bash
   VITE_API_BASE_URL=your-base-url
   ```

4. **Start the development server:**
   - Backend:
     ```bash
     cd api
     node ./index.js
     ```
   - Frontend:
     ```bash
     cd frontend
     npm run dev
     ```

5. **Access the app:**
   The app will be running at `http://localhost:5413` for the frontend and the backend API will be available at `http://localhost:4000/api/test`.

## Usage

- **Search for Stations**: Use the search bar to find charging and parking stations by location.
- **Book Slots**: Once logged in, users can book available slots at their chosen station.
- **Profile Management**: Users can view and manage their bookings and profile information.

## Some API Endpoints

- **POST /api/register**: Register a new user
- **POST /api/login**: Authenticate a user and return a JWT token
- **GET /api/profile**: Get the authenticated user’s profile
- **POST /api/bookslot**: Book a slot at a charging or parking station
- **GET /api/mybookings**: Retrieve a user’s current bookings

## License
This project is licensed under the [MIT License](https://github.com/ManishNMR/InSpace/blob/main/LICENSE).
