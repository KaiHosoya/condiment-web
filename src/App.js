import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Main from "./views/Main"
import Book from "./views/Book";
import NotFound from "./views/NotFound";
import { getCurrentUser } from "./lib/api/auth"
import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext()

const App =() => {
  const [loading, setLoading] = useState(true)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState()
  const [currentBook, setCurrentBook] = useState("a")

  // 認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)

        console.log(res?.data.data)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }


    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser }}>
        
        <Routes>
          <Route path={`/`} element={<Login />} />
          <Route path={`/signup`} element={<SignUp />} />
          <Route path={`/main`} element={<Main />} />
          <Route path={`/book`} element={<Book />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
