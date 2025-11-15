import React, { memo } from "react";
import { useGetCustomers } from "../../hooks/useGetCustomers";
import {
  ListContainer,
  ListTitle,
  UsersList,
  UserItem,
  Avatar,
  UserInfo,
  UserName,
  UserRole,
} from "./styles";
import { formatRole, getInitials } from "../../utils/helper";
import { LABEL } from "../constant";

export type RoleFilter = { role: "ADMIN" | "MANAGER" | null };

const CustomerItem = memo(
  ({ customer }: { customer: any }) => (
    <UserItem>
      <Avatar aria-label={`Avatar for ${customer.name}`}>
        {getInitials(customer.name)}
      </Avatar>
      <UserInfo>
        <UserName>{customer.name}</UserName>
        <UserRole>{formatRole(customer.role)}</UserRole>
      </UserInfo>
    </UserItem>
  ),
  (prevProps, nextProps) => prevProps.customer.id === nextProps.customer.id
);

CustomerItem.displayName = "CustomerItem";

export const CustomersList = memo(({ role }: RoleFilter) => {
  const { customers, loading, error } = useGetCustomers(role);

  if (loading) return <div>{LABEL.LOADING_MSG}</div>;
  if (error) return <div>{LABEL.ERROR_MSG}</div>;
  if (!customers.length) return <div>{LABEL.NO_CUSTOMER}</div>;

  return (
    <ListContainer>
      <ListTitle aria-label="Customer list">
        {role ? `${formatRole(role)} Users` : "All Users"}
      </ListTitle>
      <UsersList role="list" aria-label="List of customers">
        {customers.map((customer) => (
          <CustomerItem key={customer.id} customer={customer} />
        ))}
      </UsersList>
    </ListContainer>
  );
});

CustomersList.displayName = "CustomersList";
