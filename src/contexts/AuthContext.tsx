import { createContext } from "react";

interface AuthData{

}

interface AuthContextData{
    authData: AuthData,
    signIn: (email:String, senha:String)=>Promise<AuthData>,
    signOut: () =>Promise<void>
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);
