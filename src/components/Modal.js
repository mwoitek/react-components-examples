import ReactDOM from 'react-dom';

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='absolute inset-0 bg-gray-300 opacity-80'
      ></div>
      <div className='absolute inset-40 p-10 bg-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet
        praesentium ea beatae maiores porro alias hic. Doloremque fugiat eos
        perspiciatis eius ipsum tenetur, exercitationem, ex suscipit sunt
        incidunt vel?
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
