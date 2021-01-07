const express = require('express');
const router = express.Router();
const { getPhones, getSinglePhone } = require('../db/Phone');

router.get('/', async (req, res) => {
  const phones = await getPhones();
  res.send({ success: true, data: phones });
});


router.get("/:id", async (req, res) => {
  const phone = await getSinglePhone(req.params.id);
  if(!phone) return res.status(404).send("Phone was not found");
  res.send({success: true, data: phone});
});

module.exports = router;
