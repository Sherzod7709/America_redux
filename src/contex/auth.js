// import { createContext, useEffect, useState } from "react";
// import Home from "../pages/home/home";
// import Login from "../pages/login/login";
// export const AuthContex = createContext();
// const AuthProvider = () => {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   useEffect(() => {
//     if (token) {
//       localStorage.setItem("token", token);
//     }
//   }, [token]);
//   return (
//     <AuthContex.Provider value={{ token, setToken }}>
//       {token ? <Home /> : <Login />}
//     </AuthContex.Provider>
//   );
// };
// export default AuthProvider;
