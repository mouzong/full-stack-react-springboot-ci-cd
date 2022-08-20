import './App.css';
import {getAllStudents} from "./client";
import {useEffect, useState} from "react";

function App() {
    const [students, setStudents] = useState([]);
    const fetchStudents = () => {
        getAllStudents()
            .then(response => setStudents(response.data));
    }
    useEffect(() => {
        console.log("Conponent Mounted");
        fetchStudents();
        console.log(students);
    }, []);

    if(students.length <= 0){
        return "no data"
    }
    return students.map((student, index)=>{
        return <p key={index}>{student.id} {student.name}</p>
    });
}

export default App;
