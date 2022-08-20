import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import MyPage from "./views/MyPage"
import Book from "./views/Book";
import NotFound from "./views/NotFound";
import Inquiry from "./views/Inquiry";
import { getCurrentUser } from "./lib/api/auth"
import { useState, useEffect, createContext } from "react";
import Summary from "./views/Summary";

export const AuthContext = createContext()

const App =() => {
  const [loading, setLoading] = useState(true)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState()
  const [currentBook, setCurrentBook] = useState()

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

  // const handleGetCurrentBook = async () => {
  //   if (currentUser) {
  //     try {
  //       const res = await getbook(currentUser.id)
  //       setCurrentBook(res)
  //     } catch (err) {
  //     console.log(err)
  //   }
  // } 
  // }

  useEffect(() => {
    handleGetCurrentUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCurrentUser])

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser, currentBook, setCurrentBook }}>
        
        <Routes>
          <Route path={`/`} element={<Login />} />
          <Route path={`/signup`} element={<SignUp />} />
          <Route path={`/mypage`} element={<MyPage />} />
          <Route path={`/book`} element={<Book />} />
          <Route path={`/inquiry`} element={<Inquiry />} />
          <Route path={`/summary`} element={<Summary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
