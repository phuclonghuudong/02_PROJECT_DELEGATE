module.exports = {
  checkAdmin: async () => {},
  checkUser: async (req, res, next) => {
    let userToken = req.headers.token;
    let userInfo = 0;
  },
  checkPermision: async () => {},
};
