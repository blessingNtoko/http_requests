import express from "express";
const app = express();
const port = 4177;

app.get("/", (req, res) => {
    console.log("request.headers:: ", req.headers);
  res.send("<h1>Hello World, this is the home page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello World, I am Digital Shaman</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Hello World, you can contact me on +27557896541</h1>");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});