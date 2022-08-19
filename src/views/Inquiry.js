import React from "react";
import { TextField, Input } from "@mui/material";
import Header from "../components/Header/Header";

const Inquiry = () => {
  return (
    <div>
      <Header />
      <form action="mailto:chaichai.extyo@gmail.com" method="post" encType="text/plain">
        <Input type="text" name="name" placeholder="名前"/>
        <div>お問合せ
          <TextField
            id="filled-multiline-static"
            multiline
            rows={4}
            placeholder="内容を記入してください"
            variant="filled"
          >
          </TextField>
        </div>
        <p><Input type="submit" value="送信" /></p>
      </form>
    </div>
  )
}

export default Inquiry;