const mongoose = require('mongoose');

const nameSchema = mongoose.Schema(
    {
        name: {
        type: String,
        required: true
    }
}
)

module.exports = (mongoose.model('name',nameSchema))