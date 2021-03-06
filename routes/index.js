const groupRoute = require("./groups");
const userRoute = require('./users');
const zipcodeApiRoute = require('./zipcodeApi');
const domain = process.env.REACT_APP_DOMAIN || `https://aglie-monsters-frontend.herokuapp.com/`
const apiDomain = process.env.REACT_APP_API_DOMAIN || `https://agile-monsters.herokuapp.com`;

module.exports = (app) => {
   app.use("/groups", groupRoute);
   app.use("/users", userRoute);
   app.use("/zipcodeApi", zipcodeApiRoute);

   app.use("*", (req, res) => {
      res.status(404).json("Page Not Found");
   })
}