// // server.js
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import router from "../route.js";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use(router);

// // Default route
// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// // Start server
// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });

///// serverless function version
// backend/src/api/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./route.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://online-resume-front.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// Routes - with /api prefix to handle all API routes
app.use('/api', router);

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
    
 // ✅ For Vercel: Export as serverless function
export default app;

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });
