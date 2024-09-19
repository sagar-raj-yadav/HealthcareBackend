import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    minlength: 10
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

const Service = mongoose.model('Service', serviceSchema);

export  default Service;
