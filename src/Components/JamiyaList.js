import React from 'react'
import JamiyaItem from './JamiyaItem'
import JamiyaStore from '../stores/JamiyaStore'; 
import { useState } from 'react';
import { observer } from "mobx-react"


function JamiyaList(props) {

   const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);


    const jamiyaList = JamiyaStore.jamiyat.map((jamiya) => ( <JamiyaItem jamiya  = {jamiya}  key = {jamiya.id} />
    ));

    return (

        <div> 
        {JamiyaItem} 
        </div>


    ); 
}

export default observer (JamiyaList)
