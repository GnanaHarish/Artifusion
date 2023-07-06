require("../models/database");
const Post = require("../models/Image");
var uuid = require('uuid');

const { Configuration, OpenAIApi } = require("openai");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});
require("dotenv").config();
const API_KEY = process.env.API_KEY;

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.createImage = async (req, res) => {
  var prompt = req.body.typedPhrase.trim();
  //console.log(prompt);
  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "256x256",
    });
    //response.data.data[0].url
    var uniqueId = uuid.v4();
    const photoUrl = await cloudinary.v2.uploader.upload(
      response.data.data[0].url,
      { public_id: uniqueId }
      // function (error, result) {
      //   console.log(result);
      // }
    );
    console.log(photoUrl);
    res.send(photoUrl);
  } catch (error) {
    console.log(error.message);
  }
};

exports.share = async (req, res) => {
  try {
    var phrase = req.body.phrase;
    var url = req.body.url;
    var name = req.body.name;
    var pubId = req.body.pubId
    const post = new Post({
      phrase: phrase,
      url: url,
      name : name,
      pubId : pubId
    });

    await post.save();
    res.send("Sucess");
  } catch (error) {
    res.send(error.message);
  }
};

exports.posts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ error: error.message });
  }
};
