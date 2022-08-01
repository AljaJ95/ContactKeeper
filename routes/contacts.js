const express = require('express');
const router = express.Router();


//@route     GET api/contacts
//@desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});


//@route     POST api/auth
//@desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Get all contacts');
});

//@route     PUT api/contact/:id
//@desc      Update contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

//@route     DELETE api/auth
//@desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete contacts');
});

module.exports = router;