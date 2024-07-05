import Layout from "@pages/Layout";
import { useEffect } from "react";

export function App() {
  useEffect(() => {
    localStorage.setItem("isRoute", "false") 
  },[]);
  return (
    <Layout/>
  );
}

export default App;
