const Personnel = require("../models/personnelModel");

exports.getAllPersonnel = async (req, res) => {
  try {
    const personnel = await Personnel.find();

    res.status(200).json({
      status: "success",
      data: personnel,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || `internal server error`,
    });
  }
};

exports.createPersonnel = async (req, res) => {
  try {
    const newPersonnel = await Personnel.create(req.body);

    res.status(201).json({
      status: "success",
      data: newPersonnel,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || `internal server error`,
    });
  }
};
