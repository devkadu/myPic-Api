const {Router} = require('express');
const User = require('../models/User');
const uploadImage = require('../config/cloudinary.config');
const Picture = require('../models/Picture');


const router = Router();


router.get('/user', async (req, res) => {
    try {
        const users = await User.find().populate('pictures')
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json(error);
      }
    });

    router.get('/user/:id', async (req, res) => {
      try {
          const users = await User.findById(req.params.id)
          res.status(200).json(users);
        } catch (error) {
          res.status(500).json(error);
        }
      });

    router.post('/user/profilepic', uploadImage.single('avatar'), async (req, res) => {

      const { path } = req.file;
      const { id } = req.user;
      try {
        const updatedUser = await User.findByIdAndUpdate(id, { profilePicture: path }, { new: true });
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(500).json(error);
      }
    });

module.exports = router
