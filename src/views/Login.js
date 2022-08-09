import React from "react";
import { Button, Card, Input } from "@mui/material";
import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../App";
import { signIn } from "../lib/api/auth";

const Login = () => {
  const { isSignedIn,currentUser, setIsSignedIn, setCurrentUser } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit =async() => {
    const params = {
      email: email,
      password: password
    }
    await signIn(params).then((res) => {
      setIsSignedIn(true)
      setCurrentUser(res.data.data)
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
  }
  return(
    <>
    {
      isSignedIn && currentUser ? (
        <Navigate to={`/main`} />
      ) : (
        <Card style={styles.login_form} onSubmit={handleSubmit}>
          <Input
          style={styles.login_input}
          placeholder="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          />
          <Input
          style={styles.login_input}
          placeholder="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          />
          <div style={styles.login_button}>
            <Button type="submit" onClick={handleSubmit}> Login</Button>
          </div>
          <Link to={`/signup`}>新規登録</Link>
        </Card>
      )
    }
    </>
  )
}

const styles = {
  login_form: {
    width: "50%",
    margin: "0 auto",
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  login_input: {
    width: "50%",
    height: 50,
    margin: "0 auto",
    marginTop: 10,
  },
  login_button: {
    marginTop: 10,
  }
}


export default Login