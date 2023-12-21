
# GitHub User Finder

GitHub User Finder is a simple React application that allows users to search for GitHub profiles and view basic information about the users. [Link](https://github-account-finder-react.vercel.app/)

## Features

- **User Search:** Enter a GitHub username to retrieve and display information about the user.
- **User Details:** View details such as avatar, name, bio, followers, following, and location of the GitHub user.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/github-user-finder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd github-user-finder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Run the application:

   ```bash
   npm start
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to use the GitHub User Finder.

## Components

### `FindUser`

- Main component for searching GitHub users.
- Contains a form to input the GitHub username.
- Renders the `GitHubUser` component to display user information.

### `GitHubUser`

- Component to display GitHub user information.
- Utilizes the `useGithub` custom hook to fetch user data.

### `useGithub` (Custom Hook)

- Custom hook for fetching GitHub user data.
- Returns user information, loading state, and error state.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- This project uses the [GitHub API](https://developer.github.com/v3/) to retrieve user data.
