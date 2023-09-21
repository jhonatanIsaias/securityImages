import { useNavigation } from "@react-navigation/native";
import { createContext, useState } from "react";
import React from "react";

interface AuthData{
    login:String,
    senha:String,
    token:number
}
const navigation = useNavigation();
interface AuthContextData{
    authData?: AuthData,
    signIn: (login:String, senha:String)=>Promise<AuthData>,
    token:(token:number)=>Promise<void>,
    signOut: () =>Promise<void>
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);
export const AuthProvider: React.FC = ({children}) =>{
    const [authData,setAuth] = useState<AuthData>();
    
   async function signIn(login:String,senha:String) : Promise<AuthData>{
        try{
            
            navigation.navigate('SecurityToken');

        }catch(Error){

        }
    
    }
    async function signOut(): Promise<void>{
       setAuth(undefined)
       return; 
    }
    async function token(token:number): Promise<void>{
        
    }

    return <AuthContext.Provider value={{authData,signIn,token,signOut}}>{children}</AuthContext.Provider>
    
}
export default AuthContext;
