# Poc

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/nuxt?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/eOKVRiltKv)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve poc
```

To create a production bundle:

```sh
npx nx build poc
```

To see all available targets to run for a project, run:

```sh
npx nx show project poc
```

## Docker

docker build -t mypoc .

docker run -p 4200:4200 mypoc
