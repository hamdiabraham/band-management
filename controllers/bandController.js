const Band = require("../models/bandModel");

exports.getAllBand = async (req, res) => {
  try {
    const band = await Band.find().select("_id name maxPersonnel");

    res.status(200).json({
      status: "success",
      data: band,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || `internal server error`,
    });
  }
};

exports.createBand = async (req, res) => {
  try {
    const newBand = await Band.create(req.body);

    newBand.member = undefined;
    res.status(201).json({
      status: "success",
      data: newBand,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || `internal server error`,
    });
  }
};

exports.getBandById = async (req, res) => {
  try {
    const { bandId } = req.params;

    const band = await Band.findById({ _id: bandId }).select(
      "-_id name member"
    );

    res.status(201).json({
      status: "success",
      data: band,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || `internal server error`,
    });
  }
};

exports.editBand = async (req, res) => {
  try {
    const { bandId } = req.params;
    const { name, maxPersonnel } = req.body;

    const band = await Band.findByIdAndUpdate(
      { _id: bandId },
      { name, maxPersonnel }
    );

    band.member = undefined;
    res.status(201).json({
      status: "success",
      data: band,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || `internal server error`,
    });
  }
};
