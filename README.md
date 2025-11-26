# My Shangri-La Referendum (MSLR)

## About
My Shangri-La Referendum is a full-stack web application designed to support a local council in gathering the publics view on some proposed changes to the expansion of its administrative boundaries to neighoburing counties.

## Usage
### Vercel Deployment
The vercel deployment of the application can be found at [this link](https://mslreferendum.vercel.app/).
The Vercel deployment uses a persistent MongoDB database for storage; as a result, all inputs used for testing will be available when visiting this deployment and app can be used as if it is a real world service.

### Local Deployment
While in root directory:
```npm run dev``` 
To run the app in development mode

```npm run preview```
To run the app in production preview mode (no dev tools)

## Stack
NuxtJS/Vue, NodeJS, TypeScript, Tailwind/shadcn, MongoDB, ESLint+Prettier, Vercel 