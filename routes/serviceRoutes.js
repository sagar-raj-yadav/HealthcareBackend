import express from 'express';
import Service from '../model/service.js';
const router = express.Router();

// 1. Add a new service
router.post('/addservice', async (req, res) => {
  try {
    const { name, description, price } = req.body;

    // Basic validation
    if (!name || !description || price == null) {
      return res.status(400).send('All fields are required');
    }

    const newService = new Service({ name, description, price });
    await newService.save();
    res.status(201).send(newService);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// 2. Get all services
router.get('/getservice', async (req, res) => {
  try {
    const services = await Service.find();
    res.send(services);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});


// 4. get a service by id
router.get('/getservice/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const services = await Service.findById(id);
  
      if (!services) {
        return res.status(404).send('Service not found with this is');
      }
  
      res.send(services);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });
  
// 3. Update a service
router.put('/updateservice/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return res.status(404).send('Service not found');
    }

    res.send(updatedService);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});



// 4. Delete a service
router.delete('/deleteservice/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).send('Service not found');
    }

    res.send('Service deleted');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});
export default router;
