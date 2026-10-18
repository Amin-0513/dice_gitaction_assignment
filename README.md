# GitHub Actions Assignment


This project is a simple React web application served by a Node.js server, built to show how a CI/CD pipeline works with GitHub Actions. The frontend, built with React and Vite, is a single page titled "React GitHub Actions Pipeline". It shows an "Application is running" status and an interactive counter button that proves the app is live and responding. The backend is an Express server that serves the built React files, sends every page route back to index.html, and has a /health endpoint that returns { "status": "healthy" } so the hosting platform can check the app is up. Code quality is checked with ESLint, and three unit tests written with Vitest and React Testing Library confirm that the heading, the status message and the counter work correctly. On every push, the GitHub Actions workflow installs dependencies, lints, tests and builds the app. If all of these steps pass, it automatically deploys the app to Render through a deploy hook stored as a GitHub secret.
## Project Structure
```text
react-cicd-assignment/
├── src/
│   ├── App.jsx
│   ├── App.test.jsx
│   ├── main.jsx
│   └── setupTests.js
├── server.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── .gitignore
```

### Verification

<table>
  <tr>
    <td align="center">
      <img src="images/test.PNG" alt="Local Test" width="350"/>
      <br/>
      <b>Figure 1: Test Locally</b>
    </td>
    <td align="center" rowspan="2">
      <img src="images/health.PNG" alt="API Health Check" width="350"/>
      <br/>
      <b>Figure 3: Checking API Health</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="images/local.PNG" alt="Frontend" width="350"/>
      <br/>
      <b>Figure 2: Frontend</b>
    </td>
  </tr>
</table>

