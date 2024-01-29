import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Error from "./components/404/Error.js";
import Signup from "./components/signup/Signup.js";
import Signin from "./components/signin/Signin.js";
import Main from "./components/main/Main.js";


function App(): JSX.Element {

  const [isAuth, setIsAuth] = useState(false);


  useEffect(() => {
    fetch("/api/check", { credentials: 'include' })
      .then((data) => data.json())
      .then((data) => { setIsAuth(data) })

  }, [])



  return (
    <Routes>
      <Route path="/" element={<Navbar setIsAuth={setIsAuth} isAuth={isAuth} />}>
        <Route index element={<Main/>} />
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        <Route path="/signin" element={<Signin setIsAuth={setIsAuth} />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;