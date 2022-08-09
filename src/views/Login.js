import React from "react";
import { Button, Card, Input } from "@mui/material";
import { useState } from "react";
import { height } from "@mui/system";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit =(data) => {
    console.log(data)
  }
  return(
    <Card onSubmit={handleSubmit} style={styles.login_form}>
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
        <Button type="submit" > Login</Button>
      </div>
      <Link to={`/register`}>新規登録</Link>
    </Card>
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