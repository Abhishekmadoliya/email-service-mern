const mongoose = require('mongoose');

const emailLogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    companyEmail: { type: String, required: true }, // Recipient email
    status: { type: String, enum: ['sent', 'failed'], default: 'sent' },
    sentAt: { type: Date, default: Date.now },
    error: { type: String }, // For storing error messages if sending fails
    template: {
        subject: { type: String },
        body: { type: String }
    }
}, { timestamps: true });

module.exports = mongoose.model('EmailLog', emailLogSchema);