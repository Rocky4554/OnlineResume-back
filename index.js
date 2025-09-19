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
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import router from "./route.js";
// import serverless from "serverless-http";

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173", 
//       "https://online-resume-front.vercel.app",
//       "http://localhost:3000"
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
//     allowedHeaders: ["Content-Type", "Authorization"]
//   })
// );

// // Body parsing middleware
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // Request logging for debugging
// app.use((req, res, next) => {
//   console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
//   next();
// });

// // Health check route
// app.get("/health", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Server is healthy",
//     timestamp: new Date().toISOString(),
//     env: process.env.NODE_ENV || 'development'
//   });
// });

// // API Routes
// app.use("/api", router);

// // Root route
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Backend is running 🚀",
//     timestamp: new Date().toISOString(),
//     endpoints: {
//       health: "/health",
//       contact: "/api/contact-us",
//       apiHealth: "/api/health"
//     }
//   });
// });

// // Handle favicon requests
// app.get("/favicon.ico", (req, res) => {
//   res.status(204).end();
// });

// // 404 handler - catch all unmatched routes
// app.use((req, res) => {
//   console.log(`404 - Route not found: ${req.method} ${req.originalUrl}`);
//   res.status(404).json({
//     success: false,
//     message: "Route not found",
//     path: req.originalUrl,
//     method: req.method,
//     availableEndpoints: {
//       root: "/",
//       health: "/health",
//       contact: "/api/contact-us",
//       apiHealth: "/api/health"
//     }
//   });
// });

// // Global error handling middleware
// app.use((error, req, res, next) => {
//   console.error('Global error handler:', error);
//   res.status(500).json({
//     success: false,
//     message: "Internal server error",
//     timestamp: new Date().toISOString()
//   });
// });

// // For local development only
// // const PORT = process.env.PORT || 3000;
// // if (process.env.NODE_ENV !== 'production') {
// //   app.listen(PORT, () => {
// //     console.log(`✅ Server running on http://localhost:${PORT}`);
// //   });
// // }

// // Export for Vercel serverless deployment
// export default serverless(app);


import express from "express";
import cors from "cors";
import serverless from "serverless-http";

const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.json({
    message: "Hello from Vercel! 🚀",
    timestamp: new Date().toISOString()
  });
});

app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Test endpoint working",
    path: req.path
  });
});

// Export for Vercel
export default serverless(app);