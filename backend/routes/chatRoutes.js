const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { accessChat } = require('../controllers/chatController');

const router = express.Router()

 router.route('/').post(protect, accessChat );
// router.route("/").get(protect,fetchChats)
// router.route("/group").get(protect,createGroupChat)
// router.route("/rename").get(protect,renameGroup)
// router.route("/groupremove").get(protect,removeFromGroup)
// router.route("/groupadd").get(protect,addToGroup)

module.exports= router;