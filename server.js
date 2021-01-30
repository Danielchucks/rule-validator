const express = require("express");
const app = express();

// Init Middleware
// app.use(cors()); for production
app.use(express.json({ extended: false }));

// Defining Routes
app.use("/api/", require("./route"));

// app.get("/", (req, res) => {
//   res.json({ msg: "Hello to my very first API" });
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
