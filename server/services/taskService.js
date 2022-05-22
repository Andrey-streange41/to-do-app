import TaskTable from "../models/TaskTable.js";

class TaskService {
    async create(task){
        try {
            const createdTask = await TaskTable.create(task);
            console.log('Task service is start ...');
            return createdTask;
        } catch (error) {
            console.log(error + 'sumsing was wrong !')
        }
        
    }
    async getAll(){
        try{
             const tasks = await TaskTable.find();
             return tasks;
        }
          catch(e){
              return new Error('sumsing was wrong :( ');
          }
    }    
    async getOne(id){
        if(!id)
            throw new Error('id not found !');
        const task = await TaskTable.findById(id);
        return task;
    }    
     async update(task){
        if(!task._id){
            throw new Error('id not found !');
        }
            const updated = await TaskTable.findByIdAndUpdate(task._id, task, {new:true});
            return  updated;
    }    
    async delete(id){
           if(!id){
                throw new Error('id not found !');
           }
            const deleteOne = await TaskTable.findByIdAndDelete(id);
            return deleteOne;
    }     
}

export default new TaskService();