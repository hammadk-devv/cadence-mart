import { useState } from 'react';
import OrderCard from "./OrderCard";
import OrderDetailsModal from "./OrderDetailsModal";
import DashboardEmptyState from "./DashboardEmptyState";
import Typography from "../ui/Typography";

export default function OrdersSection({ orders = [] }) {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  return (
    <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)]">
      <Typography
        variant="h4"
        className="font-extrabold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3 mb-6 select-none"
      >
        Order History
      </Typography>

      {orders.length === 0 ? (
        <DashboardEmptyState message="You haven't placed any orders yet." />
      ) : (
        <div className="flex flex-col gap-6">
          {orders.map((order, idx) => (
            <OrderCard key={idx} order={order} onViewDetails={() => handleViewDetails(order)} />
          ))}
        </div>
      )}

      <OrderDetailsModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
