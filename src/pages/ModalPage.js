import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptate
        vitae doloremque maxime labore ipsam quibusdam blanditiis aliquid sed
        eos atque, reiciendis veritatis molestias exercitationem velit eligendi
        voluptatum temporibus minima!
      </p>
    </Modal>
  );

  return (
    <div className='relative'>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos ab ipsa excepturi nulla placeat harum odio at qui! Quae
        rerum asperiores recusandae veniam at, dolorum officia a nemo eveniet.
      </p>
    </div>
  );
}

export default ModalPage;
