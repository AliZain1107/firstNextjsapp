"use client"
import React from 'react'

const AddNewUser = () => {

  function handleAddNewUser(){
    alert("Ohh you want to add a new User ;) Okay can Add. But I don't have enough functionality to do so :( ")
  }
  return (
    <div>
      <button onClick={handleAddNewUser}>Add New User</button>
    </div>
  )
}

export default AddNewUser
