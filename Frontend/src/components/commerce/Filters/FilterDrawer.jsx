import Drawer from "../../ui/Drawer";
import FilterSidebar from "./FilterSidebar";

export default function FilterDrawer({ isOpen, onClose, filters, onChange }) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Filter Products" position="left">
      <FilterSidebar filters={filters} onChange={onChange} />
    </Drawer>
  );
}
