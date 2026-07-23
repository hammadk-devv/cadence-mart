export const toAdminDTO = (admin) => {
  if (!admin) return null;
  return {
    id: admin._id,
    name: admin.name,
    email: admin.email,
  };
};
