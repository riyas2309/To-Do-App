const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fspromises = require("fs").promises;
const path = require("path");

const logevents = async (message, logfilename) => {
  const datetime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${datetime}\t${uuid()}\t${message}\n`;
  try {
    const logDir = path.join(__dirname, "..", "Logs");
    if (!fs.existsSync(logDir)) {
      await fspromises.mkdir(logDir); // Use mkdir instead of mkdirSync in an async function
    }
    await fspromises.appendFile(path.join(logDir, logfilename), logItem);
  } catch (error) {
    console.error(error);
  }
};

const logger = (req, res, next) => {
  logevents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqlog.log");
  console.log(`${req.method}\t${req.path}`);
  next();
};

module.exports = { logger, logevents };
