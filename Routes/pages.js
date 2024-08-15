//route/pages.js file
const express = require('express');
const router = express.router();

router.get('/',(req , res)=>{
    res.send("this is home page");
});
router.get("/about",(req , res)=>{
    res.send("this is about us  page");
});
module.export = router;

