const router = require("express").Router();
const {
  getAllDocuments,
  getSingleDocument,
  AddDocument,
  DeleteDocument,
  updateDocument,
  getCatogery
} = require("../controllers/docsControlers");

router.get("/", getAllDocuments);
router.get("/doc/:catagory", getSingleDocument);
router.post("/addDoc", AddDocument);
router.get("/getcatagory",getCatogery)
router.delete("/delete/:id", DeleteDocument);
router.put("/update-doc/:id", updateDocument);

module.exports = router;
