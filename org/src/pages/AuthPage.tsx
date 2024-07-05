import { useNavigate } from "react-router-dom";
import mappieLogo from "@assets/Mappie.svg"
import { useEffect, useState } from "react";
import { logInUser, registrateUser } from "../utils/UserAccount/UserAccount";
import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import { usersCollection } from "../utils/Firebase/Controller";
import { UserFB } from "../store/types";

function AuthPage() {
  const navigate = useNavigate();  
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [users, setUsers] = useState<UserFB[]>()
  useEffect(() => onSnapshot(usersCollection, (snapshot: 
    QuerySnapshot<DocumentData>) => {
      setUsers(
        snapshot.docs.map((doc)=>{
        return{
            id: doc.id,
            ...doc.data()
        };         
    }) 
);           
}),[]);
  const LogIn = () => {
    if(login =="" || password == ""){
      return
    }
    if(logInUser(login, password, users)){
      localStorage.setItem('isLogIn', "true");
      navigate("/")
    }
  }
  const Registrate = () => {
    if(login =="" || password == ""){
      return
    }
    if(registrateUser(login, password, users)){
      localStorage.setItem('isLogIn', "true");
      navigate("/")
    }
  }
  return (
    <div className=" flex flex-col items-center justify-center h-screen w-screen fixed bg-white p-[5%]">
      
      <div className=" flex flex-col items-center justify-center px-[3%] pb-[2%] border-grey border-[3px] rounded-[10px]">
        <img src={mappieLogo} className="h-[60px] m-6"/>
        <div className="text-[20px] mb-1">Вход/Регистрация</div>
        <div>
          <div className="text-[12px] ml-3">Логин</div>
          <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
            onChange={(e) => {setLogin(e.target.value)}} 
            value={login}/>
          
          <div className="text-[12px] ml-3 mt-2">Пароль</div>
          <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
            type="password"
            onChange={(e) => {setPassword(e.target.value)}} 
            value={password}/>

          <button className="ml-3 text-blue"
            onClick={Registrate}>Зарегистрироваться</button>
        </div>
        <button  className="flex justify-center items-center mt-[15px] h-[40px] w-[50%] bg-blue rounded-[10px] text-white" 
          onClick={LogIn}>Войти</button>
      </div>
    </div>
  );
}

export default AuthPage;
