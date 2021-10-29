const { Router } = require('express');
const Comment = require('../models/Comment');
const Picture = require('../models/Picture')


const router = Router();

router.post('/comment', async (req, res) =>{
    const {comment} = req.body;
    try {
        const comment = await Comment.create({
         comment
         
        });
   
        await Picture.findByIdAndUpdate(id, {$push: { comment: comment}}, { new: true});
     
       res.status(200).json(picture);
         } catch (error) {
       res.status(500).json(error);
     }
      
    });

router.get('/comment', async ( req, res ) =>{

});

router.get('/comment/:id', async ( req, res) =>{

});

router.put('/comment/:id', async ( req, res) =>{

});

router.delete('/comment/:id', async ( req, res) =>{
    
});


module.exports = router;