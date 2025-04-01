# CellSolutions

CellSolutions is a landing page project built with Angular, showcasing services, products, and contact information for a mobile solutions business.

## Table of Contents
- [Getting Started](#getting-started)
- [Development Server](#development-server)
- [Code Scaffolding](#code-scaffolding)
- [Building](#building)
- [Running Unit Tests](#running-unit-tests)
- [Running End-to-End Tests](#running-end-to-end-tests)
- [Project Structure](#project-structure)
- [Features](#features)
- [Additional Resources](#additional-resources)

## Getting Started

To get started with the project, ensure you have Node.js and Angular CLI installed. Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd landing-page-cs
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Project Structure
The project is organized as follows:

```markdown
src/
├── app/
│   ├── pages/               # Feature-specific components (e.g., Contacto, Accesorios)
│   ├── shared/              # Shared components (e.g., Header, Footer, ScrollTop)
│   ├──      # Root component
│   ├──         # Application routes
│   ├──         # Application configuration
│   └── assets/              # Static assets (e.g., images, icons, fonts)
├──                # Global styles
├──                # Main HTML file
└──                   # Application bootstrap
```