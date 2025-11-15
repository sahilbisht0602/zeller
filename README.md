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
    
1. Performance Optimization

Implemented React.memo() on components to prevent unnecessary re-renders

Used useMemo() for expensive filtering operations

Configured Apollo Client with cache-and-network fetch policy for optimal data caching

Memoized customer items in the list to avoid re-rendering unchanged items

Used useCallback() for event handlers to maintain referential equality

2. Test Coverage

Integration Tests: Filter and list interactions tested together

Edge Cases: Empty states, null values, and error boundaries covered

Accessibility: ARIA labels and roles tested

Test coverage includes:

Loading states

Error handling

Empty data scenarios

Role filtering (Admin, Manager, All)

3. Code Quality

Strict TypeScript configuration with explicit types

Separation of concerns (components, hooks, utilities)

Error boundaries and graceful error handling

4. UI Quality & Responsiveness

Mobile-first responsive design with breakpoints at 768px

Touch-friendly interactions with appropriate sizing

Smooth transitions and hover states



