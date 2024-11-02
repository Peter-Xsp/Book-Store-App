const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth/", authRoutes);
app.use("/api/", bookRoutes);
app.use("/api/", orderRoutes);
app.use("/api/", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
