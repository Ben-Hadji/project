export class PosteApi{

    url = "http://localhost:3004/articles"

    async create(poste){
        try{
            const options = {
                method : "POST",
                body : JSON.stringify(poste),
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

    async getAllPoste(pseudo){
        try{
            const reponse = await fetch(`${this.url}?pseudo=${pseudo}`)
            const data = await reponse.json();
            return data ;
        }catch(ex){
            console.log(ex)
        }
    }
}