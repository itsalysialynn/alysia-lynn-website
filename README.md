# alysia-lynn

A React website hosted on AWS and deployed using Github Actions, developed with Gatsby.

## Getting Started

1. Clone repository:

```bash
  https://github.com/itsalysialynn/alysia-lynn.git
```

2. Install dependencies:

```bash
  yarn
```

3. Start development server:

```bash
  yarn develop
```

4. Visit local app at http://localhost:8000/ or view GraphiQL at http://localhost:8000/\_\_\_graphql

## Code Style

ESLint and Prettier is used to ensure consistent code formatting and code quality throughout the codebase. A pre-commit hook automatically corrects formatting issues and adds the corrections to your commit. You can also run the checks manually:

### Running ESLint

`yarn lint`

### Running Prettier

`yarn prettier`

## Unit Testing

Jest and React Testing Library is used for unit and integration testing for React components.

### Running Jest

`yarn jest`
