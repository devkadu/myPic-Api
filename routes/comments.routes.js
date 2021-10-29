const { Router } = require('express');
const Comment = require('../models/Comment');
const Picture = require('../models/Picture')


const router = Router();

router.post('/comment/:id', async (req, res) =>{
    const { id } = req.params;
    
    try {
        /* const picture = await Picture.findById()
        res.status(400).json({message: "ok"}) */

        const newComment = {...req.body, id}
        const commentsfromDb = await Comment.create(newComment);
        await Picture.findByIdAndUpdate(id, {comment: commentsfromDb._id}, {new: true})
        res.status(201).json(commentsfromDb);
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