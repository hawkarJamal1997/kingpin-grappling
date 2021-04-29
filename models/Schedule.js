const mongoose = require('mongoose')

const ScheduleSchema = mongoose.Schema({
    weekday: String,
    events: {
        exercise: [String],
        time: [String]  
    }
})

module.exports = mongoose.model('Schedule', ScheduleSchema)