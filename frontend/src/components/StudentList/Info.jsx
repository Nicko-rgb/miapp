import React from 'react'
import './info.css'

const Info = ({student, onClose}) => {
  return (
    <div className='info'>
        <div className="content-info">
            <p><span>FirstName: </span>{student.firstName}</p>
            <p><span>LastName: </span>{student.lastName}</p>
            <p><span>Age: </span>{student.age}</p>
            <p><span>Email: </span>{student.email}</p>
            <p><span>Phone: </span>{student.phone}</p>
            <div className="btns">
                <button className="close" onClick={onClose}>ACEPTAR</button>
            </div>
        </div>
    </div>
  )
}
export default Info
