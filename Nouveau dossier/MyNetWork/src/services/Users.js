export class UserApi{

    url = "http://localhost:3000/utilisateurs"

    async create(identifiants){
        try{
            const options = {
                method : "POST",
                body : JSON.stringify({...identifiants, role: "client"}),
                headers : {
                    "content-type" : "application/json"
                }
            }
           const reponse = await fetch(this.url, options)
           const data = await reponse.json();
           return data ;
        }catch(ex){
            console.log(ex)
        }
    }

    async existe(email,pseudo){
        try{
            const reponse = await fetch(`http://localhost:3004/utilisateurs?email=${email}&pseudo=${pseudo}`)
           
            const data = await reponse.json();
            // si existe [{}]
            // si email non pris existe []
            return data.length === 0 ? true : false ;
        }catch(ex){
            console.log(ex)
        }
    }

}