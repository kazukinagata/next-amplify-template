This is a [Next.js](https://nextjs.org/) x [Amplify](https://docs.amplify.aws/) boilerplate that includes following;

- [material-ui](https://github.com/mui-org/material-ui) with ssr support
- [styled-components](https://github.com/styled-components/styled-components) with ssr support
- [react-toastify](https://github.com/fkhadra/react-toastify)
- [nprogress](https://github.com/rstacruz/nprogress)
- Configured Amplify auth context, use `useAuthCtx` to retrieve current user
- Convenience utilities such as `callGraphQL` and `checkAuth` to use with typescript
- Simple withSSRAuth hoc for SSG


## Getting Started

First, install amplify CLI if have not installed yet:

```bash
npm install -g @aws-amplify/cli
```

Then initialize amplify project

```bash
amplify init
```

Next, install packages and run the development server:

```bash
npm install
# or
yarn
```

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

