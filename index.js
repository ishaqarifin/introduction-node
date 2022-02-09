// memanggil package express
const express = require("express"); //import express from 'express'

//menggunakan package express
const app = express(); //app=aplikasi

//set endpoint
app.get("/", function (req, respon) {
  respon.send("hello world");
});

//konfigurasi port aplikasi
const port = 5000;
app.listen(port, function () {
  console.log(`server running on ${port}`);
});
