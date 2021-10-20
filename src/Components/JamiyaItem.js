import React from 'react'
import { observer } from 'mobx-react-lite';
import { Button } from 'react-bootstrap';


function JamiyaItem(props) {

const jamiya = props.jamiya;
    // console.log(jamiyat);

    // const [isOpen, setIsOpen] = useState(false);
  
    // const closeModal = () => setIsOpen(false);
  
    // const openModal = () => setIsOpen(true);

    // const handleDelete = () => {props.deleteRoom(jamiyat.id);

    return (

        <div>
            <p> { jamiya.title } </p>
        </div>
        // <Button className = "delete" onClick ={handleDelete}>Delete</Button>
      
    ); 
}


export default observer(JamiyaItem);