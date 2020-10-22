const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const {check, validationResult} = require('express-validator');

const User = require('../../models/User');
const Profile = require('../../models/Profile');
// @route   GET api/profile/me
// @desc    Get  current users profile
// @access  Private
router.get('/me',auth, async (req, res) => {
 try{
 const profile =await Profile.findOne({
     user:req.user.id
 }).populate('user' ['name', 'avatar']);
 if(!profile){
     return res.status(400).json({msg:'There is no profile for this user'});

 }
 res.json(profile);
 }

 catch(err){
 console.error(err.message);
 res.status(500).send('Server Error');
 }
});
// @route   POST api/profile
// @desc    create or update user profile
// @access  Private

router.post('/',[auth,[ check('status','Status is required')
.not()
.isEmpty(),
]],
async (req,res)=>
{
const errors= validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}


const {
    location,
    bio,
    status,
    linkedin,
    instagram,
    twitter,

} = req.body;
// Build profile object

const profileFields = {};
profileFields.user =req.user.id;

if(location) profileFields.location =location;

if(bio) profileFields.bio =bio;

if(status) profileFields.status =status;


// Build social object
profileFields.social ={};
if(linkedin) profileFields.social.linkedin = linkedin;
if(instagram) profileFields.social.instagram = instagram;
if(twitter) profileFields.social.twitter = twitter;

try{let profile = await Profile.findOne({ user: req.user.id});

if(profile){
    profile= await Profile.findOneAndUpdate(
        {user: req.user.id},
        {
            $set: profileFields
        },
        {
      new:true
        }
    );
    return res.json(profile);

}
//Create
profile = new Profile(profileFields);
await profile.save();
res.json(profile);

}catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
}
});

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public

router.get('/', async(req,res)=>{
    try {
        const profiles = await Profile.find().populate('user',['name','avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   GET api/profile/user/user_id
// @desc    Get  profile by user ID
// @access  Public

router.get('/user/:user_id', async(req,res)=>{
    try {
        const profile = await Profile.findOne({user:req.params.user_id}).populate('user',['name','avatar']);

if(!profile) return res.status(400).json({ msg: 'Profile not found'});

        res.json(profiles);
    } catch (err) {
        console.error(err.message);

        if(err.kind == 'ObjectId') { return res.status(400).json({ msg: 'Profile not found'});
    }
        res.status(500).send('server Error');
        
    }
});

// @route   DELETE api/profile
// @desc    DELETE profile,user & post
// @access  Private

router.delete('/', async(req,res)=>{
    try {
        // @todo - remove users posts

        // Remove profile
        const profiles = await Profile.findOneAndRemove({user: req.user.id});
         //Remove user
        const User = await User.findOneAndRemove({_id: req.user.id});
         
        res.json({msg: 'User deleted'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});








// @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private
router.put(
    '/education',
    [
      auth,
      [
        check('school', 'School is required').not().isEmpty(),
        check('degree', 'Degree is required').not().isEmpty(),
        check('fieldofstudy', 'Field of study is required').not().isEmpty(),
        check('from', 'From date is required and needs to be from the past')
          .not()
          .isEmpty()
          .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
      ]
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
      } = req.body;
  
      const newEdu = {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
      };
  
      try {
        const profile = await Profile.findOne({ user: req.user.id });
  
        profile.education.unshift(newEdu);
  
        await profile.save();
  
        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  
  // @route    DELETE api/profile/education/:edu_id
  // @desc     Delete education from profile
  // @access   Private
  
  router.delete('/education/:edu_id', auth, async (req, res) => {
    try {
      const foundProfile = await Profile.findOne({ user: req.user.id });
      foundProfile.education = foundProfile.education.filter(
        (edu) => edu._id.toString() !== req.params.edu_id
      );
      await foundProfile.save();
      return res.status(200).json(foundProfile);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Server error' });
    }
  });

module.exports = router;
