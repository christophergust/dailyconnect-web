const express = require('express');
const router = express.Router();

// Activity model
const Activity = require('../../models/Activity');

// @route GET api/activities
// @desc Get all activities by date
// @access Public
router.get('/date/:date', (req, res) => {
    Activity.find({'date': req.param('date')})
    .then(activities => res.json(activities))
});

// @route GET api/activities
// @desc Get all activities by kid
// @access Public
router.get('/kid/:kid', (req, res) => {
    Activity.find({'kid_id': req.param('kid')})
    .then(activities => res.json(activities))
});

// @route GET api/activities
// @desc Get all activities by kid and date
// @access Public
router.get('/kid/:kid/date/:date', (req, res) => {
    Activity.find({'kid_id': req.param('kid'), 'date': req.param('date')})
    .then(activities => res.json(activities))
});


module.exports = router;