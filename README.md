
# NestJS Prisma User Bookmark project

This is a NestJS project that uses Prisma as the ORM for database interactions. The project includes authentication, user management, and bookmark management features.

- **Authentication**: Secure user authentication using JWT (JSON Web Tokens). This includes user registration, login, and token-based authentication to protect routes and resources.
- **User Management**: CRUD (Create, Read, Update, Delete) operations for managing user profiles. Users can update their personal information and manage their accounts.
- **Bookmark Management**: Functionality for users to create, read, update, and delete bookmarks. This feature allows users to save and manage their favorite links or resources.

## Table of Contents

- [NestJS Prisma User Bookmark project](#nestjs-prisma-user-bookmark-project)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Environment Variables](#environment-variables)
  - [Database Migrations](#database-migrations)
  - [Project Structure](#project-structure)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:

    ```sh
    yarn install
    ```

3. Set up the environment variables:

    ```sh
    cp .env.example .env
    ```

4. Update the .env file with your database connection string and JWT secret.

## Running the App

1. Start the PostgreSQL database using Docker:

    ```sh
    docker-compose up -d
    ```

2. Run the application:

    ```sh
    yarn start:dev
    ```

The application will be running at `http://localhost:3000`.

## Environment Variables

The following environment variables are used in this project:

- `DATABASE_URL`: The connection string for the PostgreSQL database.
- `JWT_SECRET`: The secret key for signing JWT tokens.

## Database Migrations

To run the database migrations, use the following commands:

1. Initialize Prisma:

    ```sh
    npx prisma init
    ```

2. Run migrations:

    ```sh
    npx prisma migrate dev
    ```

3. Deploy migrations:

    ```sh
    npx prisma migrate deploy
    ```

4. Open Prisma Studio:

    ```sh
    npx prisma studio
    ```

## Project Structure

```plaintext
.env
.env.example
.eslintrc.js
.gitignore
.prettierrc
docker-compose.yml
nest-cli.json
package.json
prisma/
  migrations/
    20241003133001_init/
    20241004085606_update_models/
    migration_lock.toml
  schema.prisma
src/
  app.module.ts
  auth/
    auth.controller.ts
    auth.module.ts
    auth.service.ts
    dto/
  bookmark/
    bookmark.module.ts
  main.ts
  prisma/
    prisma.module.ts
    prisma.service.ts
  user/
test/
  app.e2e-spec.ts
  jest-e2e.json
tsconfig.build.json
tsconfig.json
yarn-error.log
```

## Testing

To run the tests, use the following command:

```sh
yarn test
```

To run end-to-end tests:

```sh
yarn test:e2e
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.