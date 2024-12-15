const isvalidmovie = async (req, res, next) => {
  try {
    let {
      title,
      description,
      releaseDate,
      category,
      actors,
      ratings,
      comments,
      addedBy,
    } = req.body;

    if (
      !title ||
      !description ||
      !releaseDate ||
      !category ||
      !actors ||
      !ratings ||
      !comments ||
      !addedBy
    ) {
      return res.status(400).json({ error: "all fields are required" });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = isvalidmovie;
