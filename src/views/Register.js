import React from "react";
import { Card, Input, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit =(data) => {
    console.log(data)
  }
  return (
    <Card onSubmit={handleSubmit} style={styles.register_form}>
      <Input
      style={styles.register_input}
      placeholder="email"
      value={email}
      onChange={(e) => {setEmail(e.target.value)}}
      />
      <Input
      style={styles.register_input}
      placeholder="password"
      value={password}
      onChange={(e) => {setPassword(e.target.value)}}
      />
      <div style={styles.register_button}>
      <Button type="submit" >新規登録</Button>
      </div>
      <Link to={`/login`}>ログイン</Link>
    </Card>
  )
}

const styles = {
  register_form: {
    width: "50%",
    margin: "0 auto",
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  register_input: {
    width: "50%",
    height: 50,
    margin: "0 auto",
    marginTop: 10,
  },
  register_button: {
    marginTop: 10,
  }
}

export default Register