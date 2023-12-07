const{
    listProperties, 
    featured,
    type, 
    types,
    addProperty,
    updatedProperty,
    deleteProperty,
    myProperties,
} = require("../controllers/propertyController")

const express = require('express');
const router = express.Router();

router.get("/list-properties",listProperties)
router.get("/find/featured",featured)
router.get("/find",type)
router.get("/find/types",types)
router.post("/",addProperty)
router.put("/:id",updatedProperty)
router.post("/:id",deleteProperty)
router.get("/find/:id",myProperties)

module.exports = router;
