// implement your posts router here
const express = require('express');
const Posts = require('./posts-model');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({
            message: "The posts information could not be retrieved"
        })
    }
})



// #### 2 [GET] /api/posts/:id

// - If the _post_ with the specified `id` is not found:

//   - return HTTP status code `404` (Not Found).
//   - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

// - If there's an error in retrieving the _post_ from the database:
//   - respond with HTTP status code `500`.
//   - return the following JSON: `{ message: "The post information could not be retrieved" }`.

router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id)
        if (post) {
            res.status(200).json(post)
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The post information could not be retrieved"
        })
    }
})






module.exports = router;