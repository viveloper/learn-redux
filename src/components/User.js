import React, { useEffect, useState } from 'react';
import { fetchUser } from '../api/user';

function User({ store }) {
  const [user, setUser] = useState(store.getState().user);
  useEffect(() => {
    store.subscribe(() => {
      setUser(store.getState().user);
    });
  }, [store]);
  const handleClick = () => {
    fetchUser('id').then((user) => {
      store.dispatch({
        type: 'SET_USER',
        user: {
          name: user.name,
        },
      });
    });
  };
  console.log('render User');
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={handleClick}>ChangeUser</button>
    </div>
  );
}

export default User;
