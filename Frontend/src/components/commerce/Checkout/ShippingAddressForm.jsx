import { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

export default function ShippingAddressForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.name || "");
  const [phone, setPhone] = useState(initialData.phone || "");
  const [address, setAddress] = useState(initialData.address || "");
  const [city, setCity] = useState(initialData.city || "");
  const [state, setState] = useState(initialData.state || "");
  const [zipCode, setZipCode] = useState(initialData.zipCode || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !address || !city || !state || !zipCode) return;
    onSubmit({ name, phone, address, city, state, zipCode });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="ship-name"
          placeholder="e.g. John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Full Name"
          required
        />
        <Input
          id="ship-phone"
          placeholder="e.g. +1 555-0199"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          label="Phone Number"
          required
        />
      </div>

      <Input
        id="ship-address"
        placeholder="Apartment, suite, unit, building, floor, street address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        label="Street Address"
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Input
          id="ship-city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="City"
          required
        />
        <Input
          id="ship-state"
          placeholder="State / Province"
          value={state}
          onChange={(e) => setState(e.target.value)}
          label="State / Province"
          required
        />
        <Input
          id="ship-zip"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          label="Zip / Postal Code"
          required
        />
      </div>

      <Button
        variant="primary"
        type="submit"
        className="self-end px-8 py-2.5 font-bold uppercase mt-2"
      >
        Continue to Delivery
      </Button>
    </form>
  );
}
