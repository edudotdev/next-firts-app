import Router from 'next/router';

const Users = ({users}) => {
  console.log(users);
  return (
    <ul className="list-group">
      {
        users.map(user => (
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={user.id}
            onClick={e => Router.push('/users/[id]', `/users/${user.id}`)}
          >
            <div>
              <h5>{user.first_name}</h5>
              <p>Email: {user.email}</p>
            </div>
            <img src={user.avatar} alt="" style={{borderRadius: "10px"}} />
          </li>
        ))
      }
    </ul>
  );
}

export default Users;
