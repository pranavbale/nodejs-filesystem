// const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;
const quote = "Date : 23-March-2023 \nTime : 2.00AM"
app.get("/", function(request, response) {
    fs.writeFile("./Hello.html", quote, (err) => {
        if (err) {
            response.status(404).send("The file is not Created : ", err);
        } else {
            response.send("The file date-time.txt created ");
        }
    });
    response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));