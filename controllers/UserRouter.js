const express = require('express')
const UserModel = require('../models/userSchema')
const bcrypt = require('bcryptjs')

const router = express.Router()


//===get
router.get('/', async (req, res) => {
  try {
    const user = await UserModel.find()
    res.render('user/Users', {UserModel:user})
  } catch (err) {
    res.status(500).json(err)
  }
})

//render a registeration form
router.get('/signup', (req,res) => {
  res.render('user/Signup')
})

//===post method
router.post('/signup', async (req, res) => {
  try {
    //check if user exist
    const userAlreadyExist = await UserModel.find({ email: req.body.email });
    //must put a return if there is other res.send
    //is there is a object inside of the array
    if (userAlreadyExist[0]) {
      return res.send('User already exist')
    }
    //create new user
    const SALT = await bcrypt.genSalt(10) //how strong your hash will be
    req.body.password = await bcrypt.hash(req.body.password, SALT) //reasign the password to the hash password
    const newUser = await UserModel.create(req.body)
    res.redirect('/user/Signin')
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot post')
  }
})
//render the signin form
router.get('/signin', (req, res) => {
  res.render('user/Signin')
})
//sign an user
router.post('/signin', async (req, res) => {
  try {
    //find user by email
    const user = await UserModel.findOne({ email: req.body.email })
    if (!user) return res.send('please check your email and password')
    //checks if password match
    const decodedpassword = await bcrypt.compare(req.body.password, user.password)
    if (!decodedpassword) return res.send('please check your email and password')
    //set the user session
    //create a new user in the session obj using the user ingo from the db
    console.log(user);
    req.session.username = user.username
    req.session.loggedIn = true
    //redirect to /blog
    res.redirect('/blog')
  } catch (err) {
  }
})

//signout user and destroy session
router.get('/signout', (req, res) => {
  try {
    req.session.destroy()
    res.redirect('/')
  } catch (err) {
    console.log(err);
  }
})

//===get by id
router.get('/:id', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id)
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot get user by id')
  }
})

///==== PUT update by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body,
      // { 'returnDocument': 'after' } or >
      { new: true }
    )
    res.send(updatedUser)
  } catch (err) {
    res.status(403).send('cannot update')
  }
})

//====DELET
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
    console.log(deletedUser);
    res.send('User deleted')
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot delete')
  }
})


module.exports = router;
