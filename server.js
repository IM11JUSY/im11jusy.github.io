const express = require("express");
const app = express();

app.use(express.json());

const CORRECT_PASSWORD = "Sadece o";

app.post("/check-password", (req, res) => {
  const { password } = req.body;

  if (password && password.trim() === CORRECT_PASSWORD) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(2999, () => {
  console.log("Server çalışıyor : http://localhost:2999");
});