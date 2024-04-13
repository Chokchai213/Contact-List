const Contacts = require("../model/contactModel");

const createContact = async (req, res) => {
  try {
    const { cid, firstname, lastname, mobile, email, facebook, imageUrl } =
      req.body;

    if (!cid || !firstname || !lastname || !mobile) {
      return res
        .status(400)
        .json({ message: "Please fill the required fields" });
    }
    const findCid = await Contacts.findOne({
      cid: cid,
    });
    if (!!findCid) {
      return res.status(400).json({ message: "Cid has been used" });
    }
    const mobilePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (!mobilePattern.test(mobile)) {
      return res.status(400).json({ message: "Invalid mobile format" });
    }

    const lowerEmail = !!email ? email.toLowerCase() : "";

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/;
    if (
      !!email &&
      (!emailPattern.test(lowerEmail) || lowerEmail.length > 254)
    ) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const newContact = await Contacts({
      cid: cid,
      firstname: firstname,
      lastname: lastname,
      mobile: mobile,
      email: lowerEmail || "",
      facebook: facebook || "",
      imageUrl: imageUrl || "https://semantic-ui-vue.github.io/static/images/avatar/large/matthew.png",
    });
    console.log(newContact);
    if (!!!newContact) {
      return res.status(400).json({ message: "Can't create new contact" });
    }

    await newContact.save();
    return res.status(200).json({ message: "Create new contact :: "+firstname});
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
};

const getAllContact = async (req, res) => {
  try {
    const listAllContact = await Contacts.find({});
    return res.status(200).json(listAllContact);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "required id" });
    }

    const findContact = await Contacts.findById({
      _id: id,
    });
    
    if (!findContact) {
      return res.status(400).json({ message: "Can not find a contact" });
    }
    return res.status(200).json(findContact);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

const UpdateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { cid, firstname, lastname, mobile, email, facebook, imageUrl } =
      req.body;

    if (!id) {
      return res.status(400).json({ message: "required id" });
    }

    const findContactUpdate = await Contacts.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        cid: cid,
        firstname: firstname,
        lastname: lastname,
        mobile: mobile,
        email: email,
        facebook: facebook,
        imageUrl: imageUrl,
      },
      {
        new: true,
      }
    );
    console.log(findContactUpdate);
    if (!!!findContactUpdate) {
      return res.status(400).json({ message: "Can not find a contact" });
    }

    return res.status(200).json({ message: "Update contact succesful" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

const DeleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "required id" });
    }

    const findContactRemove = await Contacts.findByIdAndDelete({
      _id: id,
    });

    if (!!!findContactRemove) {
      return res.status(400).json({ message: "Can not find a contact" });
    }
    console.log(`Deleted ${id} `);
    return res.status(200).json({ message: "Delete contact succesful" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = {
  createContact,
  getAllContact,
  getContact,
  UpdateContact,
  DeleteContact,
};
