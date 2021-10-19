import React from 'react'
import { useState} from 'react'
import { Button } from 'react-bootstrap';
import JamiyaStore from '../stores/JamiyaStore'; 

    function JamiyaItem(props) {

    const jamiyat = props.jamiyat;

    const [isOpen, setIsOpen] = useState(false);
  
    const closeModal = () => setIsOpen(false);
  
    const openModal = () => setIsOpen(true);

    const handleDelete = () => {props.deleteRoom(jamiya.id);

    return (

        <>

        <Button className = "delete" onClick ={handleDelete}>Delete</Button>

        {/* <Button className = "update" onClick = {openModal}>Update</Button> */}
       
        </>
    )
} ; 

export default JamiyaItem 