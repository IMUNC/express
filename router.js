const express = require('express')
const router = express.Router()
const cors = require("cors")
router.use(cors())
router.get('/user', (req, res) => {
res.send({
  userInfo:{
    name:'IMUN',
    age:18,
    favoriteAnime:'nichijou'
  },
  accountInfo:{
    account:'IMUN',
    password:'admin'
  }
});
})
module.exports = router