const express = require("express");
const { getLogs, createLogs, getLog, updateLogs, deleteLogs } = require("./controllers/logsController");
const notFound = require("./controllers/notFound");
const welcome = require("./controllers/welcome");

const app = express();

app.use(express.json())
app.get("/", welcome)

app.get("/logs", getLogs)
app.get("/logs/:id", getLog)
app.post("/logs", createLogs)
app.put("/logs/:id", updateLogs)
app.delete("/logs/:id", deleteLogs)

app.get("404", notFound)

module.exports = app;