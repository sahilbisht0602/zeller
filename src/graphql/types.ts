export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
}

export interface ZellerCustomer {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface ZellerCustomersResponse {
  listZellerCustomers: {
    items: ZellerCustomer[];
  };
}

export type RoleFilter = UserRole | null;
