import { app } from "./app";

(async () => {

    app().then(server => {
        server.listen(3000, () => {
            console.log(`Listening in port ${3000}`) 
        });
    })
    
})();
