import React from 'react';
import { Route } from 'react-router-dom';
import Tabs from './Tabs';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

const TabsPage = () => (
  <>
    <h1>Tabs page</h1>
    <Route
      path="/Tabs/:currentTabId?"
      render={props => <Tabs tabs={tabs} {...props} />}
    />
  </>
);

export default TabsPage;
