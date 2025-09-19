import express from 'express';
import handleContactForm from './contact-controller.js';

const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString()
  });
});

// POST /api/contact-us - Handle contact form submission
router.post('/contact-us', handleContactForm);

// Handle other HTTP methods on /contact-us route
router.all('/contact-us', (req, res) => {
  res.status(405).json({
    success: false,
    message: `Method ${req.method} not allowed. Only POST requests are accepted.`
  });
});

export default router;