import { CurrentTab, useCurrentCustomerTabContext } from '../../../contexts/CurrentCustomerTabContext';

interface ITabProps {
  title: string
  tabId: CurrentTab
}

export function Tab({ title, tabId }: ITabProps) {
  const { currentTab, setCurrentTab } = useCurrentCustomerTabContext();

  function handleChangeTab() {
    if(currentTab !== tabId) {
      setCurrentTab(tabId);
    }
  }

  const className =
    currentTab == tabId
      ? ' bg-blue-500 text-white'
      : 'bg-transparent border border-blue-500 text-blue-500';

  return (
    <button
      className={`w-full flex-1 rounded duration-75 ease-in hover:opacity-50 p-2 ${className}`}
      onClick={handleChangeTab}
    >
      {title}
    </button>
  );
}
