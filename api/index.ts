import app from "./src/app"
import "./database"


app.listen(app.get("PORT"), ()=>{
    console.log("listening on port", app.get("PORT"))
})