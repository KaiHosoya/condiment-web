import React, { useEffect } from "react";
import { Card, Input, Button } from "@mui/material";
import { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { signUp } from "../lib/api/auth";
import { AuthContext } from "../App";
import { getBooks } from "../lib/api/book";

const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { isSignedIn, setIsSignedIn, currentUser,setCurrentUser } = useContext(AuthContext)
  const handleSubmit =async() => {
    const params = {
      email: email,
      password: password,
    }
    await signUp(params).then((res) => {
      if (res.status === 200) {
        // アカウント作成と同時にログインさせてしまう
        // 本来であればメール確認などを挟むべきだが、今回はサンプルなので
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setIsSignedIn(true)
        setCurrentUser(res.data.data)
        navigate("/main")
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
  <>
    { isSignedIn && currentUser ? (
      <Navigate to="/mypage" />
    ) : (
    <Card style={styles.register_form}>
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
      <Button type="submit" onClick={handleSubmit}>新規登録</Button>
      </div>
      <Link to={`/`}>ログイン</Link>
    </Card>
    )}
  </>
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

export default SignUp