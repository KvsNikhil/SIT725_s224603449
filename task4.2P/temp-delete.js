const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/task4DB');
    const Student = mongoose.model('Student', new mongoose.Schema({ name: String, course: String, university: String, description: String }));
    const docs = await Student.find({}).sort({ _id: 1 }).limit(9);
    const ids = docs.map(d => d._id);
    const res = await Student.deleteMany({ _id: { $in: ids } });
    console.log('Deleted count:', res.deletedCount);
    const remain = await Student.find({});
    console.log('Remaining count:', remain.length);
    remain.forEach((r, i) => console.log(`${i + 1}. ${r.name}`));
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
})();