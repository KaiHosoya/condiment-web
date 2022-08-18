import { Alert, Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../App"
import { getbook, updatebook } from "../lib/api/book";


const Main =() => {
  const { isSignedIn, currentUser } = useContext(AuthContext)
  const [currentBook, setCurrentBook] = useState()
  const [updateCount, setUpdateCount] = useState("")
  const navigate = useNavigate()

  const getCurrentBook = async() => {
    if (currentUser) {
      const res = await getbook(currentUser.id)
      setCurrentBook(res)
    }
  }

  useEffect(() => {
    getCurrentBook();
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault()
   const res = updatebook(currentUser.id ,updateCount)
   setCurrentBook(res)
   alert("更新されました")
   navigate("/main")
  }

  return (
  <>
    {
      isSignedIn && currentUser ? (
        <>
          <h2>読んでいる本: {currentBook?.title}</h2>
          <h2>現在: {currentBook?.count}P</h2>
          <div className="updateCount">
            <Input
              type="number"
              placeholder="100"
              value={updateCount}
              onChange={(e) => {setUpdateCount(e.target.value)}}  
            />
            <Button
              onClick={handleUpdate}
            >
              更新
            </Button>
          </div>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/book"
          >
            本を登録
          </Button>
        </>
      ) : (
        <Navigate to="/signup" />
      )
    }
  </>
  )
}

export default Main