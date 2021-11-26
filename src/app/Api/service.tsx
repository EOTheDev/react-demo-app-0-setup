import { FormLoginModel } from "../model/FormLoginModel";

export class Service{
    private static BaseUrl = "http://localhost:3200";

    static async doLogin( data : FormLoginModel){
      console.log(data);
      
        return fetch(this.BaseUrl + "/do-login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }).then((res) => res.json()).catch(err => console.log(err));
          
    }
    static async isUserLogged(token?: string) {
      //chiamata a checktoken e ritornare boolean se loggato
      if (token==null){
        return false;
      }
      return fetch( "http://localhost:3200/check-token/", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: token,
        }
      })
    }
}