const express = require('express')
const Schedule = require('../models/Schedule')

const router = express.Router()

//Get full schedule of week
router.get('/', async (req, res) => {
   try {
       const schedule = await Schedule.find({})
       res.json(schedule)
   } catch (err) {
        res.status(500).json({ message: err.message })
   }
})

// Get day of week
router.get('/:id', getDay, async (req, res) => {
        res.json(res.day)
 })

// Create a schedule for a day
router.post('/', async (req, res) => {
    
    const schedule = new Schedule({
        weekday: req.body.weekday,
        events: req.body.events
    })
    
    try {
        const savedSchedule = await schedule.save()
        res.status(201).json(savedSchedule)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update a day
router.patch('/:id', getDay, async (req, res) => {
    try {
        await Schedule.updateOne(
            { _id: req.params.id },
            { $set: { weekday: req.body.weekday, events: req.body.events }} 
        )
        res.json({ message: `updated ${req.params.id}`})
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})

// Delete a day
router.delete('/:id', getDay, async (req, res) => {
    try {
        await res.day.remove()
        res.status(204).json({ message: "Deleted day"})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Gets the id of the day
async function getDay(req, res, next) {
    try{
        const day = await Schedule.findById(req.params.id)
        res.day = day
    } catch (err) {
        return res.status(404).json({ message: "Day not found" })
    }
    next()
}

module.exports = router