import Container from "../components/Container"
import Users from '../components/Users'

import Head from "next/head"
import fetch from "isomorphic-fetch"

const Index = (props) => {
  return (
    <>
      <Container>
      <Head>
        <title>Next.js - Home</title>
      </Head>
        <h1>Next</h1>
        <Users 
          users={props.users}
        />
      </Container>
    </>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return { users : data.data}
}

export default Index