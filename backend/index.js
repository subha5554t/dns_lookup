const express = require('express');
const dns = require('dns');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lookup = require('./models/Lookup');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dns_lookup_db';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// GET /api/lookup?domain=example.com
app.get('/api/lookup', async (req, res) => {
  const domain = req.query.domain;
  if (!domain) return res.status(400).json({ error: 'Domain query parameter is required' });

  dns.lookup(domain, { all: true }, async (err, addresses) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    try {
      // Save lookup to DB
      const doc = new Lookup({
        domain,
        results: addresses,
        queriedAt: new Date()
      });
      await doc.save();
      res.json({ domain, addresses });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
});

// GET /api/history - returns last 50 lookups
app.get('/api/history', async (req, res) => {
  try {
    const docs = await Lookup.find().sort({ queriedAt: -1 }).limit(50);
    res.json(docs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
