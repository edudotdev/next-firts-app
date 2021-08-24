import {useRouter} from 'next/router'
import fetch from "isomorphic-fetch"
import Container from '../../components/Container';

const User = ({user}) => {
  console.log(user);
  const router = useRouter()
  const {id} = router.query
  console.log(id);

  return (
    <Container>
      <div className="row">
        <div className="col-md-6 affset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img src={user.avatar} style={{borderRadius: '50%'}} alt="" />
            </div>
            <div className="card-body">
              <h3>{user.id}. {user.first_name} {user.last_name}</h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

User.getInitialProps = async (e) => {
  const res = await fetch(`https://reqres.in/api/users/${e.query.id}`)
  const data = await res.json()
  console.log(data);
  
  return {user: data.data}
}

export default User
