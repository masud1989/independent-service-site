import React from 'react';
import Student from '../Student/Student';
import student1 from './../../../images/students/student1.jpg';
import student2 from './../../../images/students/student2.jpg';
import student3 from './../../../images/students/student3.jpg';
import student4 from './../../../images/students/student4.jpg';
import student5 from './../../../images/students/student5.jpg';
import student6 from './../../../images/students/student6.jpg';

const Students = () => {

    const students = [
        {id: 1, name: 'Sohel', img: student1},
        {id: 2, name: 'Md. Mithu', img: student2},
        {id: 3, name: 'Rana', img: student3},
        {id: 4, name: 'Tomal Ahmed', img: student4},
        {id: 5, name: 'Tarek', img: student5},
        {id: 6, name: 'Maliha', img: student6},
    ]

    return (
        <div id="students" className="container mx-auto my-20">
        <h2 className="text-danger mt-5 text-center">My Studentsts Reviews</h2>
        <div className="row">
            { 
                students.map(student =><Student
                    key={student.id}
                    student={student}
                ></Student>)
            }
        </div>
    </div>
    );
};

export default Students;