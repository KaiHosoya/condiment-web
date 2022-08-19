import { Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../App"
import { getbook, updatebook } from "../lib/api/book";
import Header from "../components/Header/Header"
import Footer from "../components/ Footer/ Footer";


const Main =() => {
  const { isSignedIn, currentUser } = useContext(AuthContext)
  const [updateCount, setUpdateCount] = useState("")
  const [currentBook, setCurrentBook] = useState("")
  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()
   const res = updatebook(currentUser.id ,updateCount)
   setCurrentBook(res)
   alert("更新されました")
   navigate("/")
  }

  const getBook = async() => {
    const res = await getbook(currentUser?.id)
    setCurrentBook(res)
  }

  useEffect(() => {
    getBook()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(currentBook)

  return (
  <>
    {
      isSignedIn && currentUser ? (
      <>
        <Header />
        <div style={styles.main}>
          <h2>読んでいる本: <i>{currentBook?.title}</i></h2>
          <div style={styles.image}>
            <img
            src={currentBook?.url} 
            alt="写真"
            style={styles.image_resize}
            />
          </div>
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
          {/* <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/book"
            style={styles.register_button}
          >
            本を登録
          </Button> */}
        </div>
        <Footer />
      </>
      ) : (
        <Navigate to="/" />
      )
    }
  </>
  )
}

export default Main

const styles = {
  main: {
    width: "50%",
    margin: "0 auto",
    marginTop: 30,
    marginBottom: 250,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  image: {
    textAlign: "center"
  },
  register_button: {
    width: "30%",
    height: 30,
    margin: "0 auto",
    marginTop: 10,
  },
  image_resize: {
    width: "300px",
    height: "200px"
  }
}