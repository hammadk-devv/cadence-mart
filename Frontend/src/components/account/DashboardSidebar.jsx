export default function DashboardSidebar({ tabs = [], activeTab, onTabChange }) {
  return (
    <div className="flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-x-visible scrollbar-none border border-[var(--color-border)] rounded-[var(--radius-lg)] p-3 lg:p-4 bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)] static lg:sticky lg:top-24 select-none whitespace-nowrap lg:whitespace-normal">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const IconComponent = tab.icon;

        return (
          <button
            type="button"
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-shrink-0 flex items-center gap-3 px-4 py-2.5 lg:py-3 rounded-[var(--radius-md)] text-sm font-bold transition-all text-left focus-ring ${
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
