import app from "./app.js";
import connection from "./src/config/index.js";

const PORT = process.env.PORT || 8088;
if(connection){
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
}

