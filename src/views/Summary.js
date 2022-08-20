import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";
import { getbook } from "../lib/api/book";
import { List, ListItemButton, ListItemIcon, ListItemText, Card } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Header from "../components/Header/Header";

const Summary = () => {
  const {currentUser, isSignedIn } = useContext(AuthContext)
  const [Books, setBooks] = useState([])
  const getBooks = async() => {
    const res = await getbook(currentUser?.id)
    setBooks(res)
  }

  useEffect(() => {
    getBooks()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(Books)
  return (
    <>
      {currentUser && isSignedIn ? (
        <>
          <Header />
          <Card style={styles.list}>
            {Books.map((book, i) => {
              return(
                // <p key={i}>タイトル： {book.title}</p>
                <List>
                  <ListItemButton>
                    <ListItemIcon>
                      <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText>
                      {book.title}
                    </ListItemText>
                  </ListItemButton>
                </List>
              )
            })}
          </Card>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  )
}

export default Summary;

const styles = {
  list: {
    width: "50%",
    margin: "0 auto",
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  }
}