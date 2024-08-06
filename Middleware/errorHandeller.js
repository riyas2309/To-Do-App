const { logger, logevents } = require("./logger");

const errorHandeller = (err, req, res, next) => {
  logevents(
    `${err.name}\t${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errlog.log"
  );
  res.send(500);
};
module.exports = errorHandeller;
