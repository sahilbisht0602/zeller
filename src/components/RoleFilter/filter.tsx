import React, { memo, useCallback } from "react";
import {
  FilterContainer,
  FilterOptions,
  RadioInput,
  RadioLabel,
  RadioOption,
  Title,
} from "./styles";

interface Role {
  value: string;
  label: string;
}

interface Props {
  value: "ADMIN" | "MANAGER" | null;
  onChange: (val: "ADMIN" | "MANAGER" | null) => void;
  roles: Role[];
}

export const RoleFilter: React.FC<Props> = memo(
  ({ value, onChange, roles }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value || null;
        onChange(val as "ADMIN" | "MANAGER" | null);
      },
      [onChange]
    );

    return (
      <FilterContainer>
        <Title>User Types</Title>
        <FilterOptions role="radiogroup" aria-label="Filter by user type">
          {roles.map((role) => (
            <RadioOption key={role.value} selected={value === role.value}>
              <RadioInput
                type="radio"
                name="role"
                value={role.value}
                checked={value === role.value}
                onChange={handleChange}
                id={`role-${role.value}`}
                aria-label={role.label}
              />
              <RadioLabel>
                {role.label}
              </RadioLabel>
            </RadioOption>
          ))}
        </FilterOptions>
      </FilterContainer>
    );
  }
);

RoleFilter.displayName = "RoleFilter";
