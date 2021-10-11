import React from "react";
import "./dashboard.css";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";

const Dashboard = () => {
  return (
    <div className="admin">
      <Tabs
        activeTab="1"
        className="mt-5  taby"
        ulClassName=""
        activityClassName="bg-success"
        onClick={(event, tab) => console.log(event, tab)}
      >
        <Tab title="Dashboard" className="mr-8 tab-title">
          <div className="mt-3">Tab 1 content</div>
        </Tab>

        <Tab title="Users" className="mr-3 tab-title">
          <div className="mt-3">Tab 2 content</div>
        </Tab>

        <Tab title="Players" className="mr-3 tab-title">
          <div className="mt-3">Tab 3 content</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
