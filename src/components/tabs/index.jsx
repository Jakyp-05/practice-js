import React, { useState } from "react";

function Tabs() {
  const [tabsCurrent, setTabsCurrent] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "Tab 1",
      title: "Title 1",
      content: "a",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      title: "Title 2",
      content: "b",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      title: "Title 3",
      content: "c",
    },
  ];

  const handleTabClick = (e) => {
    setTabsCurrent(e.target.id);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={tabsCurrent === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>
            {tabsCurrent === `${tab.id}` && (
              <div>
                <p>{tab.title}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
