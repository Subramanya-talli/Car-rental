const User = require("../models/User");


const getUser = async function (req, res) {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "User Does not exist" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createNewUser = async function (req, res) {
  try {
    const {name, lastName, email, mobileNumber, password, role} = req.body
    if(!name || !lastName || !email || !mobileNumber || !password)
    {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const user = await User.create({name, lastName, email, mobileNumber, password, role});
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const verifyUser = async function(req, res)
{
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    res.cookie("token", token);
    return res.json({ redirect: "/"});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const userLogout = (req, res)=>{
  res.clearCookie('token'); 
  return res.status(200).json({message : "Logged out Succssfully"})
}

module.exports = {
  getUser,
  createNewUser,
  verifyUser,
  userLogout
};
