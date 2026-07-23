import ShippingAddressForm from "../commerce/Checkout/ShippingAddressForm";

export default function AddressForm({ onSubmit, initialData }) {
  return <ShippingAddressForm onSubmit={onSubmit} initialData={initialData} />;
}
