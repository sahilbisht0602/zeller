export const formatRole = (role: string) => {
  return role.charAt(0) + role.slice(1).toLowerCase();
};

export const getInitials = (name: string) => {
  return name.trim()[0].toUpperCase();
};
