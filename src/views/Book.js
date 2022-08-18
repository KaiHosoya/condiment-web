import { Button, Input } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createBook, getbook } from "../lib/api/book";
import { AuthContext } from "../App";
import { create } from "@mui/material/styles/createTransitions";

const Book = () => {
  const [bookImage, setBookImage] = useState({data: "", name: ""})
  const [bookTitle, setBookTitle] = useState("")


  const navigate = useNavigate()

  const { isSignedIn, currentUser } = useContext(AuthContext)


  // const handleImage = (e) => {
	// 	const files = e.currentTarget.files;
  //   const reader = new FileReader();
	// 	if (!files || files?.length === 0) return;
	// 	const file = files[0];
  //   reader.readAsDataURL(file)
  //   reader.onload = () => {
  //     setBookImage({data: reader.result,
  //                   name: file.name})
  //   }
  // }

  // const handleSubmit = async() => {
  //   await createBook(bookTitle, bookImage)
  //   .then(() => {
  //     navigate("/main")
  //   })
  //   .catch((error) => {
  //     console.log(error.message)
  //   })
  // }

  const handleSubmit = async() => {
    await createBook(currentUser.id, bookTitle)
    .then(() => {
      navigate("/")
    })
    .catch((e) => {
      console.log(e)
    })
  }

  const backToMain = () => {
    navigate("/main")
  }

  return(
  <>
    { isSignedIn && currentUser ? (
      <div>
      <div style={styles.registerForm}>
        <Input
        placeholder="本の名前"
        value={bookTitle}
        onChange={(e) => {setBookTitle(e.target.value)}}
        />
        <Button type="submit" onClick={handleSubmit}>登録</Button>
      </div>
        <Button
          onClick={backToMain}  
        >戻る</Button>
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
    height: "50%"
  },
  submitButton: {

  }
}

export default Book