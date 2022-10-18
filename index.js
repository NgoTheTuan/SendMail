const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");
app.use(cors());
app.use(express.json());

app.get("/tin-tuc", (req, res) => {
  return res.status(200).json({ message: "Send Email" });
});

app.post("/sendEmail", async (req, res) => {
  const { email } = req.body;

  //   return res.status(200).json({ message: "Send Email", email });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ngothetuan27082001@gmail.com",
      pass: "wtvxjuijguesskuo",
    },
  });

  await transporter.sendMail(
    {
      from: "ngothetuan27082001@gmail.com",
      to: `${email}`,
      subject: "Hello ✔",
      text: "thang anh chan ga ",
      html: "<b>Hello world?</b>",
    },
    (err) => {
      if (err) {
        return res.status(400).json({ message: "Lỗi", err });
      }

      return res.status(200).json({ message: "Send Email" });
    }
  );
});

app.listen(5000, () => {
  console.log("Server is running 5000");
});
