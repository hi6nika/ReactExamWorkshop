exports.isAuthenticated = (req, res, next) => {
 
  if (req.user?.data.user._id) {
    next();
  } else {
    res.status(401).json({ unauthorized: "unauthorized" });
  }
};
