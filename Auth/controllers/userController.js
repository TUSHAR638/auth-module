const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
};

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

exports.updateUser = async (req, res) => {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { name, email }, { new: true });
    res.json(user);
};

exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
};
