import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { ListZellerCustomers } from "../graphql/queries";
import { ZellerCustomer } from "../graphql/types";

export type RoleFilter = "ADMIN" | "MANAGER" | null;

export function useGetCustomers(role: RoleFilter) {
  const { data, loading, error } = useQuery(ListZellerCustomers, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });

  const customers: ZellerCustomer[] = useMemo(
    () => data?.listZellerCustomers?.items ?? [],
    [data]
  );

  const filteredCustomers = useMemo(() => {
    if (!role) return customers;
    return customers.filter((c) => c.role === role);
  }, [customers, role]);

  return {
    customers: filteredCustomers,
    loading,
    error,
  };
}
