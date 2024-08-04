import React, { useState } from 'react'
import team from '../team.json'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyVerticallyCenteredModal({show,onHide, teammember}) {
   
    return (
        <>
           <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={onHide}>
  <Modal.Header className="bg-white text-black" closeButton>
    {/* <Modal.Title id="contained-modal-title-vcenter">
        {teammember.name}
    </Modal.Title> */}
  </Modal.Header>
  <Modal.Body className="bg-white text-black">
    <div className='flex flex-col items-center'>
      <img src={teammember.url} alt="" className="w-full h-auto object-cover rounded-2xl mb-4" />
      <div className='w-full text-center'>
        <h3 className='text-lg font-semibold'>{teammember.name}</h3>
        <h6 className='text-slate-500'>{teammember.role}</h6>
        <h5 className='text-slate-500'>{teammember.description}</h5>
      </div>
    </div>
  </Modal.Body>
                {/* <Modal.Footer className="bg-dark"> */}
                    <Button className='bg-white border-1 border-black m-1 text-black' onClick={onHide}>Close</Button>
                {/* </Modal.Footer> */}
            </Modal>
        </>
    );
}

const Team = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember]=useState(null);

    
    const handleShowModal = (member) =>{ 
        setSelectedMember(member);
         setShowModal(true);
        };
    const handleCloseModal = () => setShowModal(false);

  return (
    <div className='flex flex-col mx-auto text-center '>
            <h2 className=' text-2xl font-normal font-sans -mt-16 ml-3 mr-3 mb-3'>Get to know the team</h2>

            

            <div className="rounded-lg m-2 flex flex-wrap justify-center items-center">
                {team.map((teammember) => (
                    <div key={teammember.id} onClick={()=>handleShowModal(teammember)} className='m-3 shadow rounded-lg p-3 cursor-pointer'>
                        <img src={teammember.url} alt="" className="rounded-lg w-52  object-contain" />
                        <h3 className='text-2xl font-semibold '>{teammember.name}</h3>
                        <h3 className='text-slate-500'>{teammember.role}</h3>
                        <button onClick={() => handleShowModal(teammember)} className='mt-2 p-2 bg-white text-black border-1 border-black rounded'>
                        See More</button>
                    </div>
                ))}
            </div>

           {selectedMember&&( <MyVerticallyCenteredModal show={showModal} onHide={handleCloseModal} teammember={selectedMember}/>)}
        </div>
  )
}

export default Team
