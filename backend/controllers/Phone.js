const firestore = require('../db/firestore-client');
const phonesImages = require('./phonesImageMock');

const getPhones = async () => {
  const querySnapshot = await firestore.collection('phones').get();
  const phones = querySnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return phones;
};

const getSinglePhone = async (id) => {
  let phone = await firestore.collection('phones').doc(id).get();
  phone = phone.data();
  return phone;
};

const createPhone = async (phone) => {
  const imageUrl = generateRandomImageUrl(phonesImages);
  await firestore.collection('phones').add({
    name: phone.name,
    color: phone.color,
    description: phone.description,
    imageUrl,
    lunch: phone.lunch,
    platform: phone.platform,
    price: phone.price,
    manufacturer: phone.manufacturer,
  });
};

const editPhone = async (id, updateData) => {
  const phone = firestore.collection('phones').doc(id);
  await phone.update({
    name: updateData.name,
    color: updateData.color,
    description: updateData.description,
    lunch: updateData.lunch,
    platform: updateData.platform,
    price: updateData.price,
    manufacturer: updateData.manufacturer,
  });
};

const deletePhone = async (id) => {
  const phone = firestore.collection('phones').doc(id);
  await phone.delete();
};

// util function
const generateRandomImageUrl = (imagesUrlArray) => {
  const randomeIndex = Math.ceil(Math.random() * imagesUrlArray.length);
  return imagesUrlArray[randomeIndex];
};

module.exports.getPhones = getPhones;
module.exports.getSinglePhone = getSinglePhone;
module.exports.createPhone = createPhone;
module.exports.deletePhone = deletePhone;
module.exports.editPhone = editPhone;
