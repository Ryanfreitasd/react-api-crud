import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Student } from './student.interface';

function App() {
  const [students, setStudents] = useState<Array<Student>>();

  useEffect(() => {
    const getStudents = async () => {
      const response = await axios.get('http://localhost:3000/students');
      console.log(response);
      setStudents(response.data);
    }
    getStudents();
  }, []);

  return (
    <>
      <ul>
        {
          students?.map((student) => {
            return <li>{student.name} / {student.email}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
