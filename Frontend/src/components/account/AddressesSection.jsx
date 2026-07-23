import { useState } from 'react';
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import DashboardEmptyState from "./DashboardEmptyState";
import Button from "../ui/Button";
import Typography from "../ui/Typography";

export default function AddressesSection({ addresses = [], onAdd, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editAddress, setEditAddress] = useState(null);

  const handleEditClick = (address) => {
    setEditAddress(address);
    setIsEditing(true);
  };

  const handleFormSubmit = (data) => {
    if (editAddress) {
      onEdit(editAddress.id, data);
    } else {
      onAdd(data);
    }
    setIsEditing(false);
    setEditAddress(null);
  };

  return (
    <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)]">
      <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-3 mb-6 select-none flex-wrap gap-2">
        <Typography variant="h4" className="font-extrabold text-[var(--color-text-primary)]">
          Saved Shipping Addresses
        </Typography>
        {!isEditing && (
          <Button
            variant="primary"
            onClick={() => {
              setEditAddress(null);
              setIsEditing(true);
            }}
            size="sm"
            className="font-bold uppercase text-xs px-4 py-2"
          >
            Add Address
          </Button>
        )}
      </div>

      {isEditing ? (
        <div className="flex flex-col gap-4">
          <Typography
            variant="body-sm"
            className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider select-none"
          >
            {editAddress ? "Edit Shipping Address" : "Add New Shipping Address"}
          </Typography>
          <AddressForm onSubmit={handleFormSubmit} initialData={editAddress || {}} />
          <Button
            variant="outline"
            onClick={() => setIsEditing(false)}
            size="sm"
            className="self-start font-bold uppercase text-xs border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] px-6 mt-3"
          >
            Cancel
          </Button>
        </div>
      ) : addresses.length === 0 ? (
        <DashboardEmptyState message="No saved addresses. Add one to speed up checkouts." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address) => (
            <AddressCard
              key={address.id}
              addressData={address}
              onEdit={() => handleEditClick(address)}
              onDelete={() => onDelete(address.id)}
              isDefault={address.isDefault}
            />
          ))}
        </div>
      )}
    </div>
  );
}
