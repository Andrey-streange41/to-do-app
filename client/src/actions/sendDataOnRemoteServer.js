import axios from 'axios';


export const sendDataOnRemoteServer = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/TaskTable');
         return response.data;
    } catch (error) {
       console.log(error + " (Ошибка отправления запроса)");
    }

}

export const addNewRowInTable = async (Title,Type,When) => {
    try {
        const response = await axios.post('http://localhost:5000/api/TaskTable',{Title,Type,When});
         return response.data;
    } catch (error) {
       return 500;
    }
}

export const removeRowFromTable = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/TaskTable/${id}`);
         return response.data;
    } catch (error) {
        return 500;
    }
}


export const updateRowInTable = async (Title,Type,When, _id) => {
    try {
        const response = await axios.put('http://localhost:5000/api/TaskTable',{Title,Type,When,_id});
         return response.data;
    } catch (error) {
       return 500;
    }
}
