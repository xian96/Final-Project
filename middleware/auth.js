const authUser = async (req, res, next) => {
   console.log('----- authUser -------')
   if (!req.session.userId && !req.session.auth) {
      console.log('----- to logout -------')
      return res.redirect('/users/logout');
      // return res.redirect('/logout');
   }
   next();
}

module.exports = authUser;