
const express = require("express");
const router = express.Router();

//inic
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let obj = JSON.parse(req.body.obj);
    cb(null, "./public/uploads/" + obj.resource);
  },
  filename: function (req, file, cb) {
    let obj = JSON.parse(req.body.obj);
    cb(null, obj.id.toString());
  },
});

const upload = multer({ storage: storage });
//fim

const controller = require("../controllers/funcionario-controller");

router.get("/", controller.get);
router.get("/search", controller.getByCargo);
router.get("/:id", controller.getById);
router.post("/", upload.single("file"),controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;