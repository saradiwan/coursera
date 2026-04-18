const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];

// Home
app.get("/", (req, res) => {
    res.send("Task API is running");
});

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Add task
app.post("/tasks", (req, res) => {
    const task = req.body.task;
    tasks.push(task);

    res.json({
        message: "Task added",
        tasks: tasks
    });
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
    const id = req.params.id;
    tasks.splice(id, 1);

    res.json({
        message: "Task deleted",
        tasks: tasks
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
