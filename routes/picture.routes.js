const {Router} = require('express');
const Picture = require('../models/Picture');
const uploadImage = require('../config/cloudinary.config');
const User = require('../models/User')
const cloudinary = require('cloudinary').v2


const router = Router();

 router.post('/picture', uploadImage.single('photos'), async(req, res) => {
  const { title, comment } = req.body;
  const { path: url='' } = req.file;
  const {id, username } = req.user
  console.log(req.file)
  
   try {
     const picture = await Picture.create({
       title, url, comment, user: id, 
      
     });

     await User.findByIdAndUpdate(id, {$push: { pictures: picture}}, { new: true});
  
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

  try {
    const picture = await Picture.findById(req.params.id)
      const{ url } = picture
     
      const urlArray = url.split("/")
      const file = [...urlArray].pop()
      
      const fileArray = file.split(".")
      const name = fileArray[0]
      await cloudinary.uploader.destroy(`myPic/${name}`)
      await Picture.findByIdAndRemove(req.params.id);
      console.log(req.params.id)
    
    res.status(200).json({ message: "picture delete" });
  } catch (error) {
    res.status(500).json(error);
  }

});

  module.exports = router;