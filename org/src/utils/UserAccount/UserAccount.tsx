import { UserFB } from "@//store/types"
import { registrate } from "../Firebase/Controller"

export const logInUser = (login: string, password: string, users: UserFB[] | undefined) => {
    const user = users?.find((element) => checkUser(element, login, password))
    if(user == undefined){
        return false
    }
    if(user.id != undefined){
        localStorage.setItem('userId', user.id);
    }
    return true
}

export const registrateUser = (login: string, password: string, users: UserFB[] | undefined) => {
    const user = users?.find((element) => checkUser(element, login, password))
    if(user == undefined){
        registrate(login, password)
        return true
    }
    if(user.id != undefined){
        localStorage.setItem('userId', user.id);
    }
    return false
}

const checkUser = (user: UserFB, login?: string, password?: string) => {
    if(user.login == login && user.password == password){
        return true
    }
    return false
}

// console.log(localStorage.userId);
// console.log(localStorage.isLogIn);