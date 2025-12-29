//start server
require('dotenv').config();
const app=require('./src/app');
const connectDB=require('./src/db/db');

// Connect to database
connectDB();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`🚀 Server started at http://localhost:${PORT}`);
});