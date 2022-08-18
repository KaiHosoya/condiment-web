import { Button, Input } from "@mui/material";
import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createBook } from "../lib/api/book";
import { AuthContext } from "../App";
import Header from "../components/Header/Header";

const Book = () => {
  // const [bookImage, setBookImage] = useState({data: "", name: ""})
  const [bookTitle, setBookTitle] = useState("")
  const [bookImage, setBookImage] = useState()


  const navigate = useNavigate()

  const { isSignedIn, currentUser } = useContext(AuthContext)


  const handleImage = (e) => {
		const files = e.currentTarget.files;
    const reader = new FileReader();
		if (!files || files?.length === 0) return;
		const file = files[0];
    reader.onload = () => {
      setBookImage({data: reader.result,
                    name: file ? file.name : "unknowenfile"})
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async() => {
    await createBook(currentUser.id ,bookTitle, bookImage)
    .then(() => {
      navigate("/mypage")
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  // const handleSubmit = async() => {
  //   await createBook(currentUser.id, bookTitle)
  //   .then(() => {
  //     navigate("/mypage")
  //   })
  //   .catch((e) => {
  //     console.log(e)
  //   })
  // }

  const backToMain = () => {
    navigate("/mypage")
  }

  return(
  <>
    { isSignedIn && currentUser ? (
      <div>
        <Header />
        <div style={styles.registerForm}>
          <Input
            placeholder="本の名前"
            value={bookTitle}
            onChange={(e) => {setBookTitle(e.target.value)}}
          />
          <Input
            type="file"  
            onChange={handleImage} 
          />
          <img
            src={bookImage?.data} 
            alt="写真"
          />
          <Button
          type="submit" onClick={handleSubmit}
          variant="outlined"
          style={styles.submitButton}
          >
            登録
          </Button>
          <div>
            <Button
              onClick={backToMain}  
            >
              戻る
            </Button>
          </div>
        </div>
      </div>
    ) : (
      <Navigate to="/" />
    )}
  </>
  )
}

const styles = {
  registerForm: {
    width: "50%",
    margin: "0 auto",
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  submitButton: {
    width: "20%",
    margin: "0 auto"
  }
}

export default Book