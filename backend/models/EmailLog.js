const mongoose = require('mongoose');

const emailLogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
    companyEmail: { type: String, required: true },
    status: { type: String, enum: ['sent', 'replied', 'interviewed'], default: 'sent' },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('EmailLog', emailLogSchema);