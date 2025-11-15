# Zeller Customers — React + GraphQL (TypeScript)

## Setup

1. Create app: `npx create-react-app zeller-customers --template typescript`
2. Copy these files into the created project (or extract the zip).
3. `npm install`
4. Replace `<API_KEY>` in `src/aws-exports.js` with the provided API key.

## Run

`npm start`

## Test

`npm test`

## Notes

- Uses Apollo Client with API Key auth (x-api-key header).
- For production or larger apps consider GraphQL Codegen for types and hooks.
