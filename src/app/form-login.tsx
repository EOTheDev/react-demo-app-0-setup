import React, { ReactEventHandler } from "react";
import { json } from "stream/consumers";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Service } from "./Api/service";
import { FormLoginModel } from "./model/FormLoginModel";

import "./form-login.css";

export interface FormLoginProp{
    clicked: ReactEventHandler;
}

const FormLogin: React.FC = () => {
    
    const history = useHistory();

    const callPost = (event : any)=>{
        
        
        event.preventDefault();
        let token;
        const data = {
            email: event.target.email.value,
            password: event.target.password.value
        } as FormLoginModel;
        Service.doLogin(data).then(response=> {token = response.token;
            //save token
            Service.isUserLogged(token);
            //redirect ot homepage
                history.push("/home");
            }
        );
    }
    
    
    return (
        <div className="col-8">
        <form  onSubmit={callPost}>
            <h2>login</h2>
            <div className="inputForm">
                
                <label htmlFor="email">Inserisci email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="inputForm">
                <label htmlFor="password">Inserisci password</label>
                <input type="password" name="password" id="password" />
            </div>
            <input className="btn btn-primary" type="submit" value="Login"/>
        </form>
        <a href="/register">Utente non registrato?</a>
        </div>

    );

}
export default FormLogin;
