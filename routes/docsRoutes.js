const router = require("express").Router();
const {
  getAllDocuments,
  getSingleDocument,
  AddDocument,
  DeleteDocument,
  updateDocument,
} = require("../controllers/docsControlers");

router.get("/", getAllDocuments);
router.get("/doc/:id", getSingleDocument);
router.post("/addDoc", AddDocument);
router.delete("/delete/:id", DeleteDocument);
router.put("/update-doc/:id", updateDocument);

module.exports = router;
