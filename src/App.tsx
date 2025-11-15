import React, { useState } from "react";
import { RoleFilter } from "./components/RoleFilter/filter";
import { CustomersList } from "./components/CustomersList/List";
import styled from "styled-components";
import { ROLES } from "./components/constant";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "SF Pro Display", "SF Pro Text", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    sans-serif;
`;

const Section = styled.div`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 40px 0;
`;

const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<"ADMIN" | "MANAGER" | null>(
    "ADMIN"
  );
  const roles = [
    { value: ROLES.ADMIN, label: "Admin" },
    { value: ROLES.MANAGER, label: "Manager" },
  ];
  return (
    <Container>
      <Section>
        <RoleFilter
          value={selectedRole}
          onChange={setSelectedRole}
          roles={roles}
        />
      </Section>
      <Divider />
      <Section>
        <CustomersList role={selectedRole} />
      </Section>
      <Divider />
    </Container>
  );
};

export default App;
