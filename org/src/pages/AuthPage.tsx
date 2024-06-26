import { Link } from "react-router-dom";
import mappieLogo from "@assets/Mappie.svg"

function AuthPage() {
  
  return (
    <div className=" flex flex-col items-center justify-center h-screen w-screen fixed bg-white p-[5%]">
      
      <div className=" flex flex-col items-center justify-center px-[3%] pb-[2%] border-grey border-[3px] rounded-[10px]">
        <img src={mappieLogo} className="h-[60px] m-6"/>
        <div className="text-[20px] mb-1">Вход/Регистрация</div>
        <div>
          <div className="text-[12px] ml-3">Логин</div>
          <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad]"/>
          
          <div className="text-[12px] ml-3 mt-2">Пароль</div>
          <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
          type="password"/>

          <Link to={"/search"} className="ml-3 text-blue">Зарегистрироваться</Link>
        </div>
        <button  className="flex justify-center items-center mt-[15px] h-[40px] w-[50%] bg-blue rounded-[10px] text-white"
                >Войти</button>
      </div>
    </div>
  );
}

export default AuthPage;
