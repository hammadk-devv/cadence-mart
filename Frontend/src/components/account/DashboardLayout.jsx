import Container from "../ui/Container";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardLayout({ tabs = [], activeTab, onTabChange, children }) {
  const currentTab = tabs.find((t) => t.id === activeTab) || {};

  return (
    <Container className="py-8">
      <DashboardHeader
        title={currentTab.label || "Customer Portal"}
        description={currentTab.desc}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-3">
          <DashboardSidebar tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        <div className="lg:col-span-9">{children}</div>
      </div>
    </Container>
  );
}
