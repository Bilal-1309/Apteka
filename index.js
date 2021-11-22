const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

app.use(express.json());
app.use(require("./routes/index"));

async function connected() {
  try {
    await mongoose.connect(
      "mongodb+srv://Iznaur:Gimer2000@cluster0.gvxyp.mongodb.net/Apteka(CommandBackend)?retryWrites=true&w=majority"
    );
    console.log("Подключение к MongoDB прошло успешно!");
    app.listen(port, () => {
      console.log("server has been started");
    });
  } catch (e) {
    console.log("Не удалось подлючиться к MongoDB!");
  }
}

connected();