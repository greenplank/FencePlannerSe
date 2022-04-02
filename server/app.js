const express = require("express");
const path = require("path");
const config = require("./config");
const transporter = require("./mail.config");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build"));
});

const sendMail = async (to, path) => {
  let info = await transporter.sendMail({
    from: '"UMER" <umersheykh@gmail.com>', // sender address
    to: to, // list of receivers
    subject: "Hello ✔", // Subject line
    text: path, // plain text body
    html: "<b>Hello world?</b>" // html body
  });
};

app.post("/share_plan", async (req, res) => {
  const { email, path } = req.body;

  url = "http://myadress?" + path;

  console.log("api hit", email, path);

  sendMail(email, url)
    .then(d => {
      return res.status(200).json({
        status: "success",
        message: "mail sent successfully"
      });
    })
    .catch(err => {
      console.log(err)
      return res.status(400).json({
        status: "error",
        message: "Internal server error could not send mail"
      });
    });
});

const { port, host } = config;

const PORT = process.env.PORT || port;

// if (host) {
//   app.listen(port, host, () =>
//     console.log(
//       `app is running on http://${host}:${port} or http://localhost:${port}`
//     )
//   );
// } else {
//   app.listen(port, () =>
//     console.log(`app is running on http://localhost:${port}`)
//   );
// }

app.listen(PORT, () =>
    console.log(`app is running on http://localhost:${PORT}`)
  );
