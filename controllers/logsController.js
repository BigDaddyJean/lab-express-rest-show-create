const data = require("../models/log")

const getLogs = (req, res) => res.status(200).json(data)

const getLog = (req, res) => {
  const item = data[req.params.id];
  if (item)
    return res.status(200).json(item);
  res.redirect("/404")
}

const createLogs = (req, res) => {
  data.push(req.body)
  res.status(200).json(req.body)
}

const updateLogs = (req, res) => {
  const item = data[req.params.id]
  if (!item) return res.redirect("/404")

  data[req.params.id] = req.body;
  return res.status(200).json();
}

const deleteLogs = (req, res) => {
  const item = data[req.params.id]
  if (!item) return next();

  data.splice([req.params.id], 1);
  return res.status(200).json();
}

module.exports = { getLogs, getLog, createLogs, updateLogs, deleteLogs }