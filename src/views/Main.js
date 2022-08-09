import { Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../App"
import { signOut } from "../lib/api/auth";
import Cookies from "js-cookie";


const Main =() => {
  const navigate = useNavigate()
  const { isSignedIn,setIsSignedIn, currentUser } = useContext(AuthContext)
  console.log(isSignedIn, currentUser)

  const handleSignOut = async (e) => {
    await signOut().then((res) => {
      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        setIsSignedIn(false)
        navigate("/signin")

        console.log("Succeeded in sign out")
      }
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <>
    {
      isSignedIn && currentUser ? (
        <>
          <h1>Signed in successfully!</h1>
          <h2>Email: {currentUser?.email}</h2>
          {/* <Button onClick={handleSignOut}>SignOut</Button> */}
        </>
      ) : (
        <Navigate to="/signup" />
      )
    }
  </>
  )
}

export default Main