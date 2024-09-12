// ,
// {
//   "id": 4,
//   "name": "Mark Mbiti",
//   "role": "Vibes",
//   "url": "teamimages/guy1.jpg ",
//   "imageId":"t1iznyzzc0zyk7mni3f3",
//   "description": "Mark Mbiti is passionate about technology and sustainability. He finds inspiration in hiking and biking, which fuel his work in renewable energy and environmental conservation. Mark is dedicated to mentoring others and promoting tech education, striving to inspire positive change in his community."
// },
// {
//   "id": 5,
//   "name": "Lady Nyakio",
//   "role": "Chief",
//   "url": "teamimages/guy2.jpg ",
//   "imageId": "vkivejzbviov3afesb2k",
//   "description": "Lady Nyakio is passionate about social change and cultural heritage. She supports community development and traditional practices, mentors young leaders, and promotes education. Her work reflects her commitment to empowering others and preserving her cultural roots."
// },
// {
//   "id": 6,
//   "name": "Arthur Rere",
//   "role": "Dj",
//   "url": "teamimages/guy3.jpg ",
//   "imageId": "rzgzfrpmnyokrumj0vsp",
//   "description": "Arthur Rere is dedicated to environmental conservation and sustainable living. He enjoys outdoor activities like hiking and gardening, which fuel his commitment to eco-friendly practices. Arthur actively participates in community projects and environmental advocacy, aiming to inspire others to adopt sustainable lifestyles and protect natural resources."
// }
import React, { useState } from 'react';
import team from '../team.json';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

function MyVerticallyCenteredModal({ show, onHide, teammember }) {

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
            <img src={teammember.url} alt="" className="w-full h-auto object-cover rounded-2xl mb-4" loading="lazy" />
            <div className='w-full text-center'>
              <h3 className='text-lg font-semibold'>{teammember.name}</h3>
              <h6 className='text-slate-500'>{teammember.role}</h6>
              <h5 className='text-slate-500'>{teammember.description}</h5>
            </div>
          </div>
        </Modal.Body>
        <Button className='bg-white border-1 border-black m-1 text-black' onClick={onHide}>Close</Button>
      </Modal>
    </>
  );
}

const Team = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dk2kibtgi' } });
 
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShowModal = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className='flex flex-col mx-auto text-center '>
      <h2 className='text-2xl font-normal font-sans -mt-16 ml-3 mr-3 mb-3'>Get to know the team</h2>

      <div className="rounded-lg m-2 flex flex-wrap justify-center items-center">
      {team.map((teammember) => {
          const img = cld
            .image(teammember.imageId)
            .format('auto')
            .quality('auto')
            .resize(auto().gravity(autoGravity()).width(500).height(500));

          return (
            <div key={teammember.id} onClick={() => handleShowModal(teammember)} className='m-3 shadow rounded-lg p-3 cursor-pointer'>
              <AdvancedImage cldImg={img} className='rounded-lg w-52 object-contain' />
              <h3 className='text-2xl font-semibold '>{teammember.name}</h3>
              <h3 className='text-slate-500'>{teammember.role}</h3>
              <button onClick={() => handleShowModal(teammember)} className='mt-2 p-2 bg-white text-black border-1 border-black rounded'>
                See More
              </button>
            </div>
          );
        })}
      </div>

      {selectedMember && (
        <MyVerticallyCenteredModal show={showModal} onHide={handleCloseModal} teammember={selectedMember} />
      )}
    </div>
  );
}

export default Team;
