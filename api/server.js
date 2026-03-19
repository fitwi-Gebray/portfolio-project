// ... after your reservations route

// ===============================
// TEST ROUTE
// ===============================
app.get("/api", (req, res) => {
  res.send("✅ API is running and connected!");
});

// ===============================
// DATABASE + SERVER (VERCEL OPTIMIZED)
// ===============================
const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err.message);
  });

if (process.env.NODE_ENV !== "production") {
  app.listen(5000, () => console.log("🚀 Local server running on port 5000"));
}

// Essential for Vercel
module.exports = app;
