const express = require('express');
const validate = require('../validators/Phone');
const router = express.Router();
const {
  getPhones,
  getSinglePhone,
  createPhone,
  deletePhone,
  editPhone,
} = require('../controllers/Phone');

router.get('/', async (req, res) => {
  const phones = await getPhones();
  res.send({ success: true, data: phones });
});

router.get('/:id', async (req, res) => {
  const phone = await getSinglePhone(req.params.id);
  if (!phone) return res.status(404).send('Phone was not found');
  res.send({ success: true, data: phone });
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  console.log(error);
  if (error) return res.status(400).send(error.details[0].message);
  await createPhone(req.body);
  res.status(201).send({ success: true });
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  await editPhone(req.params.id, req.body);
  res.status(204).send({ success: true });
});

router.delete('/:id', async (req, res) => {
  await deletePhone(req.params.id);
  res.status(204).send({ success: true });
});

module.exports = router;
