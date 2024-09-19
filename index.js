import express from 'express';
import mongoose from 'mongoose';
import ServiceRoute from './routes/serviceRoutes.js';

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());



// Use the service routes
app.use('/api', ServiceRoute);

// MongoDB connection
mongoose.connect('mongodb+srv://sagarrajyadav2002:1XIKsN05ybDgmglV@cluster0.c2bcwqe.mongodb.net/Devknus?retryWrites=true&w=majority&appName=Cluster0', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
