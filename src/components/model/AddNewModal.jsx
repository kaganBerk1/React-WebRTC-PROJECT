import React from 'react'
import { Modal, TextInput,Button,Label } from 'flowbite-react';
export default function AddNewModal(props) {
    function addNew(){
        props.onClose();
    }
  return (
    <React.Fragment>
        <Modal
            show={props.openModal}
            size="md"
            popup={true}
            onClose={props.onClose}
        
        >
            <Modal.Header style={{backgroundColor:"#f1f1f1" ,borderRadius:"8px"}}/>
            <Modal.Body   style={{backgroundColor:"#f1f1f1",borderRadius:"8px"}}>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 " >
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

                />
                </div>

                <div className="w-full flex justify-end">
                    <Button color="dark" onClick={addNew}>
                        ADD+
                    </Button>
                </div>
               
            </div>
            </Modal.Body>
        </Modal>
        </React.Fragment>
  )
}
