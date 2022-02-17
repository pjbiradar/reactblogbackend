const express=require("express")
const router=express.Router();
const reactblogcontroller=require('../controller/reactblogcontrollers')

router.route("/blog").get(reactblogcontroller);
router.route("/blog/:category").get(reactblogcontroller);
router.route("/blog/category/:Id").get(reactblogcontroller);



module.exports=router;