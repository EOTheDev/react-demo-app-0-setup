import React from "react";
import { FormLoginProp } from "./form-login";



export const FormInserUser: React.FC = () => {
    return (
        <>
        <form action="http://localhost:3200/insert-user" method="post">
        <h2>Registrazione</h2>

            <div className="inputForm">
                
                <label htmlFor="email">Inserisci email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="inputForm">
                <label htmlFor="password">Inserisci password</label>
                <input type="password" name="password" id="password" />
            </div>
            <input type="submit" value="Registrati"/>
        </form>
        <a href="/login">Effettua il login</a>
        </>

    );

}
