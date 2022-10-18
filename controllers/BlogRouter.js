const express = require('express')
const BlogModel = require('../models/blogSchema')

const router = express.Router()

// add privecy to this routes
//middleware function
//if user is not logged in cannot see blogs
router.use((req,res,next) => {
  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect('/user/signin')
  }
})

//===get
router.get('/', async (req, res) => {
  console.log(req.session);
  try {
    const blogs = await BlogModel.find()
    res.render('blog/Blog', {BlogModel: blogs, loggedInUser: req.session.username,})
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot get')
  }
}) 
//====render form
router.get('/new', (req, res) => {
  try {
    res.render('blog/New')
  } catch (err) {
    console.log(err);
    res.status(403).send('not found')
  }
})

//===post method
router.post('/', async (req, res) => {
  try {
    if (req.body.sponsored === 'on') {
      req.body.sponsored = true;
    } else {
      req.body.sponsored = false
    }
    //set the author to the loggedIn user
    req.body.author = req.session.username
    const newBlog = await BlogModel.create(req.body)
    res.redirect('/blog')
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot create')
  }
})

//GET SHOW SINGLE POST
router.get('/:id', async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    res.render('blog/Show', { blog: blog });
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot get')
  }
})
///====get by id
router.get('/:id/edit', async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id)
    res.render('blog/Edit',{blog: blog})
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot get')
  }
})




///==== PUT update by ID
router.put('/:id', async (req, res) => {
  console.log(req.body);
  try {
    if (req.body.sponsored === 'on') {
      req.body.sponsored = true;
    } else {
      req.body.sponsored = false
    }
    const { id } = req.params
    const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body,
      { 'returnDocument': "after" })
    res.redirect(`/blog`)
  } catch (err) {
    res.status(403).send('cannot updat')
  }
})

//====DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
    console.log(deletedBlog);
    res.redirect('/blog')
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot put')
  }
})

module.exports = router;