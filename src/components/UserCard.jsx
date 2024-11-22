import { FaGift } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import '../generalStyles/cards.css'



function UserCard({user, openEdit, deleteUser}) {
    
  return (
    <div className='card'> 
        <h3 className='card__name'>{user?.first_name} {user?.last_name}</h3>
        <div className="card__info"> 
            
            <div>
                <span className="card__label">Correo</span>
                {user?.email}
            </div>
            <div>
                <span className="card__label">Cumpleaños</span>
               <span className="card__data"><FaGift className="icon--gift" /> {user?.birthday}</span>
            </div>

        </div>
        <div className="card__btns">
            <button className=" btn btn--delete" onClick={() => deleteUser(user?.id)}><IoTrashOutline /></button>
            <button  className=" btn btn--edit"onClick={() => openEdit(user)}><BsPencilSquare /></button>
        </div>
    </div>
    
  )
}

export default UserCard