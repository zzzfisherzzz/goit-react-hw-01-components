import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../user.json'
import statisticalData from '../statistical-data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'

const App = () => (
    <div>
        <Profile 
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics
          title="Upload stats" 
          stats={statisticalData} 
        />
        <FriendList friends={friends} /> 

        <TransactionHistory items={transactions} />
    </div>
);

export default App;