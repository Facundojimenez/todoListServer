const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://facundoj:Facu2000@cluster0.1w4mu.mongodb.net/DB-todolist?authSource=admin&replicaSet=atlas-rbr49r-shard-0&readPreference=primary&ssl=true");

mongoose.connection.on("open", () => {
    console.log("Base de MONGO conectada");
})

mongoose.connection.on("error", () => {
    console.log("error al conectar a mongo");
})