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
  const {catagory}=req.params;
  try {
    const getDocument = await Docs.find({topic:catagory});
    res.send(getDocument);
  } catch (error) {
    res.send(error);
  }
};
const AddDocument = async (req, res) => {
  try {
    const { question, answer ,topic} = req.body;
    const topicc=topic.toLowerCase();
    const newDocument = await new Docs({question,answer,topic:topicc});
    const isSaved = await newDocument.save();
    console.log(isSaved);
    isSaved && res.send("document added !!");
  } catch (error) {
    res.send(error);
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

const getCatogery=async(req,res)=>{
  const response=await Docs.find({}).select({_id:0,topic:1});
  var data=[];
  response.map((e)=>{
    data.push(e.topic);
  });
  const uniqueData=data.filter((e,i)=>{
    return data.indexOf(e)===i;
  })
  
  res.send(uniqueData)
}

module.exports = {
  getAllDocuments,
  getSingleDocument,
  AddDocument,
  DeleteDocument,
  updateDocument,
  getCatogery
};
