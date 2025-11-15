#  Project Overview

This is a **React + TypeScript** application built to display and filter **Zeller customers** by their roles (Admin / Manager).  
The application uses:

- **Apollo Client** for GraphQL data fetching  
- **Styled-components** for component-level styling  
- **React Testing Library + Jest** for unit & integration testing  

#  Technical Stack

**Framework:** React 18.2 + TypeScript 4.9  
**Styling:** Styled-components 5.3.11  
**State & Data:** Apollo Client 3.9  
**Testing:** Jest + React Testing Library  

#  Architecture & Approach

```text
src/
├── components/
│   ├── CustomersList/
│   │   ├── List.tsx             # Customer list component
│   │   ├── List.test.tsx        # Test: loading, success, error, filters
│   │   └── styles.ts            # Styled components for list
│   ├── RoleFilter/
│   │   ├── Filter.tsx           # Role selection UI
│   │   └── styles.ts            # Filter styles
│   └── constants.ts             # Application-wide constants (roles, labels)
│
├── hooks/
│   └── useGetCustomers.ts       # Custom hook: GraphQL fetch + filtering logic
│
├── graphql/
│   ├── queries.ts               # GraphQL queries (gql tagged)
│   └── types.ts                 # Strong TypeScript interfaces
│
├── utils/
│   └── helper.ts                # Pure utility functions
│
└── apollo/
    └── apolloClient.ts          # Apollo Client setup with API key + cache
