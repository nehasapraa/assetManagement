const express = require('express');
const router = express.Router();

const Asset = require('../models/Asset')
const Center = require('../models/Center')

router.post("/add-asset", async (req, res, next) => {
  const  asset = req.body;
  console.log('asset',asset);
  const newAsset = Asset.query()
    .insert(asset)
    .then(item => {
      return res.status(200).json({ message: "Asset created successfully" });
    }).catch(err => next(err));
});

router.get('/assets', async(req, res, next) => {
  await Asset.query().withGraphFetched('shopping_center')
    .then(assets => {
      res.json(assets)
    }).catch(err => next(err));
});

router.get('/shopping-centers', async(req, res, next) => {
  await Center.query()
    .then(centers => {
      res.json(centers)
    }).catch(err => next(err));
});

module.exports = router;
