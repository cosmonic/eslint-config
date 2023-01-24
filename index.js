throw new Error(
  `The index.js entry point has been removed. Please update your ESLint configuration to import one or more of the following paths:
    @cosmonic/eslint-config/profile/web-app
    @cosmonic/eslint-config/mixins/react-app
    @cosmonic/eslint-config/mixins/testing-cypress
    @cosmonic/eslint-config/mixins/testing-react-vite
`,
);
