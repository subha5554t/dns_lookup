const mongoose = require('mongoose');
const LookupSchema = new mongoose.Schema({
  domain: { type: String, required: true },
  results: { type: Array, default: [] },
  queriedAt: { type: Date, default: Date.now }
}, { timestamps: true });
module.exports = mongoose.model('Lookup', LookupSchema);
