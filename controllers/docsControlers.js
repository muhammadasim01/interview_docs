const Docs = require("../models/Docs");

const getAllDocuments = async (req, res) => {
  try {
    const getDocument = await Docs.find();
    res.send(getDocument);
  } catch (error) {
    res.send(error);
  }
};
const getSingleDocument = async (req, res) => {
  try {
    const getDocument = await Docs.findById(req.params.id);
    res.send(getDocument);
  } catch (error) {
    res.send(error);
  }
};
const AddDocument = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newDocument = await new Docs(req.body);
    const isSaved = await newDocument.save();
    console.log(isSaved);
    isSaved && res.send("document added !!");
  } catch (error) {
    res.send(err);
  }
};
const DeleteDocument = async (req, res) => {
  try {
    const getDocument = await Docs.findByIdAndDelete(req.params.id);
    res.send(getDocument);
  } catch (error) {
    res.send(error);
  }
};
const updateDocument = async (req, res) => {
  try {
    const getDocument = await Docs.findByIdAndUpdate(req.params.id, req.body);
    res.send(getDocument);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllDocuments,
  getSingleDocument,
  AddDocument,
  DeleteDocument,
  updateDocument,
};
