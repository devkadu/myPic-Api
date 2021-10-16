const {Router} = require('express');
const Picture = require('../models/Picture');
const uploadImage = require('../config/cloudinary.config');

const router = Router();

 router.post('/picture', uploadImage.single('photos'), async(req, res) => {
   const { path: url = '' } = req.file;
   const { title } = req.body;
   const { id } = req.user;

   try {
    const picture = await Picture.create({
      title, url,  userId: id,
     });
    res.status(200).json(picture);
      } catch (error) {
    res.status(500).json(error);
  }
   
 });

 router.get('/picture', async(req, res) => {
  try {
    const picture = await Picture.find();
    res.status(200).json(picture);
  } catch (error) {
    res.status(500).json({message: "error"});
  }
});

router.get('/picture/:id', async(req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    res.status(200).json(picture);
  } catch (error) {
    res.status(500).json({message: "error"});
  }
});

router.put('/picture/:id', async(req, res) => {
    try {
    const picture = await Picture.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(picture);
  } catch (error) {
    res.status(500).json({message: "error"});
  }
});

router.delete('/picture/:id', async(req, res) =>{
  const picture = await Picture.findById(req.params.id);
  try {
    await picture.remove();
    res.status(204).json({ message: "picture delete" });
  } catch (error) {
    res.status(500).json(error);
  }

})

  module.exports = router;