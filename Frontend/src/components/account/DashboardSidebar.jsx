
export default function DashboardSidebar({ tabs = [], activeTab, onTabChange }) {
  return (
    <div className="flex flex-col gap-1 border border-[var(--color-border)] rounded-[var(--radius-lg)] p-4 bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)] sticky top-24 select-none">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const IconComponent = tab.icon;

        return (
          <button
            type="button"
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] text-sm font-bold transition-all text-left focus-ring ${
              isActive
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            {IconComponent && <IconComponent className="w-4 h-4 flex-shrink-0" />}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
