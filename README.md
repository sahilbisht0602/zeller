# Project overview

This is a React TypeScript application built to display and filter Zeller customers by their roles (Admin/Manager). The application uses Apollo Client for GraphQL data fetching, styled-components for styling, and React Testing Library for comprehensive testing.

# Technical Stack
Framework: React 18.2.0 with TypeScript 4.9.5

Styling: Styled-components 5.3.11

Testing: React Testing Library, Jest

# Architecture & Approach

src/
├── components/
|   ├── CustomersList/
|   │   ├── List.tsx          # Customer list component
|   │   ├── List.test.tsx     # Comprehensive tests
|   │   └── styles.ts         # Styled components
|   ├── RoleFilter/
|   │   ├── filter.tsx        # Role filter component
|   │   └── styles.ts         # Filter styles
|   └── constant.ts           # Application constants
├── hooks/
│   └── useGetCustomers.ts    # Custom hook for data fetching
├── graphql/
│   ├── queries.ts            # GraphQL queries
│   └── types.ts              # TypeScript interfaces
└── utils/
    └── helper.ts             # Utility functions
    
# Performance Optimization

Implemented React.memo() on components to prevent unnecessary re-renders

Used useMemo() for expensive filtering operations

Configured Apollo Client with cache-and-network fetch policy for optimal data caching

Memoized customer items in the list to avoid re-rendering unchanged items

Used useCallback() for event handlers to maintain referential equality

# Test Coverage

Unit Tests: Custom hooks tested with renderHook

Component Tests: All components tested with loading, error, and success states

Integration Tests: Filter and list interactions tested together

Edge Cases: Empty states, null values, and error boundaries covered

Accessibility: ARIA labels and roles tested

