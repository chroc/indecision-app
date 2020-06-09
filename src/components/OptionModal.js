import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Modal example"
    >
        <h3>Selected option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;

// <Modal
//     isOpen={modalIsOpen}
//     onAfterOpen={afterOpenModal}
//     onRequestClose={closeModal}
//     style={customStyles}
//     contentLabel="Example Modal"
// >

//     <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
//     <button onClick={closeModal}>close</button>
//     <div>I am a modal</div>
//     <form>
//         <input />
//         <button>tab navigation</button>
//         <button>stays</button>
//         <button>inside</button>
//         <button>the modal</button>
//     </form>
// </Modal>