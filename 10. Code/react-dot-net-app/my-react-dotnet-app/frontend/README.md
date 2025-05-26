# My React .NET App

This is a full-stack application that combines a React front end with a .NET back end. Below are the instructions for setting up and running the application.

## Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the necessary dependencies:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd ../backend
   ```

2. Restore the .NET dependencies:
   ```
   dotnet restore
   ```

3. Run the .NET application:
   ```
   dotnet run
   ```

   The API will be available at `http://localhost:5000`.

## Project Structure

- **frontend/**: Contains the React application.
- **backend/**: Contains the .NET application.

## Usage

- The front end communicates with the back end via HTTP requests.
- You can modify the components in the `frontend/src/components` directory to customize the UI.
- The back end can be extended by adding new controllers and models in the `backend/Controllers` and `backend/Models` directories, respectively.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements!