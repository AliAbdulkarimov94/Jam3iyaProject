import React from 'react'
import JamiyaItem from './JamiyaItem'
import JamiyaStore from '../stores/JamiyaStore';
import { useState } from 'react';
import { observer } from "mobx-react"


function JamiyaList(props) {

if (JamiyaStore.isLoading) return (
    <p> Loading </p>
)

const jamiyaList = JamiyaStore.jamiyat.map((jamiya) => ( 
<JamiyaItem jamiya  ={jamiya}  key ={jamiya.id} />

));

    return (

        <div> 
        {jamiyaList} 
        </div>

    ); 
}

export default observer(JamiyaList);
