import axios from 'axios';
import {Student, CreateStudent} from "../interfaces/student.interface"

export class ApiService {
    baseURL = "http://localhost:3000/students";

    async readAll(): Promise<Array<Student>> {
        try {
            const response = await axios.get(this.baseURL);
            return response.data;
        }catch(e: any){
          throw new Error(e);
        }
    }

    async create(student: CreateStudent): Promise<string | undefined> {
        try {
            const response = await axios.post(this.baseURL, student);
            if (response.data !== undefined) {
                return response.statusText;
            }
        } catch (e: any) {
           throw new Error(e); 
        }
    }


}