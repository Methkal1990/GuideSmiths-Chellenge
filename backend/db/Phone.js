const { doc } = require('./firestore-client');
const firestore = require('./firestore-client');

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

module.exports.getPhones = getPhones;
module.exports.getSinglePhone = getSinglePhone;
