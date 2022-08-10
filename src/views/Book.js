import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { createBook } from "../lib/api/book";

const Book = () => {
  const [bookImage, setBookImage] = useState({data: "", name: ""})
  const [bookTitle, setBookTitle] = useState("")
  const handleImage = (e) => {
		const files = e.currentTarget.files;
    const reader = new FileReader();
		if (!files || files?.length === 0) return;
		const file = files[0];
    reader.readAsDataURL(file)
    reader.onload = () => {
      setBookImage({data: reader.result,
                    name: file.name})
    }
		console.log('file:', file);
    console.log(bookImage)
  }

  // const handleImage = (e) => {
  //   let canvas = document.getElementById("canvas");
  //   let ctx = canvas.getContext("2d");
  //   let maxW = 250;
  //   let maxH = 250;

  //   let img = new Image();
  //   img.onload = () => {
  //     let iw = img.width;
  //     let ih = img.height;
  //     let scale = Math.min(maxW / iw, maxH / ih);
  //     let iwScaled = iw * scale;
  //     let ihScaled = ih * scale;
  //     canvas.width = iwScaled;
  //     canvas.height = ihScaled;
  //     ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
  //     const resizeData = canvas.toDataURL("image/jpeg", 0.5);
  //     setBookImage(resizeData)
  //     // setFieldValue("profile_image", resizeData);
  //   };
  //   img.src = URL.createObjectURL(e.target.files[0]);
  // };

  const handleSubmit = async() => {
    await createBook(bookTitle, bookImage)
    .catch((error) => {
      console.log(error.message)
    })
  }

  return(
    <div style={styles.registerForm}>
      <div>
        <Input
        placeholder="本の名前"
        value={bookTitle}
        onChange={(e) => {setBookTitle(e.target.value)}} />
        <Input type="file" accept="image/*" onChange={handleImage}></Input>
        <img src={!bookImage ? "" : bookImage.data} />
        {/* <canvas
        id="canvas"
        style={{
          display: "none"
        }}
        width="64"
        height="64"
        /> */}
      </div>
      <div style={styles.submitButton}>
        <Button type="submit" onClick={handleSubmit}>登録</Button>
      </div>
    </div>
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