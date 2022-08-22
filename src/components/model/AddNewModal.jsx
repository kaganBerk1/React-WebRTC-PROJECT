import React, { useState } from 'react'
import { Modal, TextInput,Button,Label } from 'flowbite-react';
import { getUser, updateUser } from '../../services/UserServices';
import { useAuth } from '../../contexts/AuthContext';
export default function AddNewModal(props) {
    const {currentUser}=useAuth();
    const [newId,setNewId] = useState("")

    async function addNew(){
        let user= await getUserData() 
        console.log(user)
        props.handleContacts(user)
        props.onClose();
    }

    async function getUserData(){
        let user= await getUser(newId)
        return user
        /* localStorage.setItem("userData",user) */
    }
    function handleId(e){
        setNewId(e.target.value)
    }
  return (
    <React.Fragment>
        <Modal
            show={props.openModal}
            size="md"
            popup={true}
            onClose={props.onClose}
            style={{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}
        
        >
            <Modal.Header style={{backgroundColor:"#f1f1f1" ,borderRadius:"8px"}}/>
            <Modal.Body   style={{backgroundColor:"#f1f1f1",borderRadius:"8px"}} >
                <div className='h-full'>
                    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8" >
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Add a New Contact
                    </h3>
                    <div>
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label
                        value="Contact's ID"
                        />
                    </div>
                    <TextInput
                        id="id"
                        type="text"
                        onChange={(e)=>handleId(e)}
                    />
                    </div>

                    <div className="w-full flex justify-end">
                        <Button color="dark" onClick={addNew}>
                            ADD+
                        </Button>
                    </div>
                
                </div>
                </div>
           
            </Modal.Body>
        </Modal>
        </React.Fragment>
  )
}
