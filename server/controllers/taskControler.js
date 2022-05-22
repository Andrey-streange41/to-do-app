import TaskService from "../services/taskService.js";

class TaskController {
  async create(req, res) {
    try {
      const body = req.body;
      console.log(body);
      const task = await TaskService.create(body);

      res.send("User was create" + task);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req, res) {
    try {
      const tasks = await TaskService.getAll();
      return res.send(tasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async delete(req, res) {
    try {
      const deleteOne = await TaskService.delete(req.params.id);
      return res.send(deleteOne);
    } catch (error) {
      res.status(500).send("Sumsing was wrong :(");
    }
  }
  async getOne(req, res) {
    try {
      const task = await TaskService.getOne(req.params.id);
      return res.send(task);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async update(req, res) {
    try {
      const task = req.body;
      const updated = await TaskService.update(task);
      return res.send(updated);
    } catch (error) {
      res.status(500).json(error + " sumsing was wrong :( ");
    }
  }
  
}

export default new TaskController();
