// import React, { useState } from "react";
// // import "./styles.css";

// import Modal from "react-modal";

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <div className="App">
//       <button onClick={toggleModal}>Open modal</button>

//       <Modal
//         isOpen={isOpen}
//         onRequestClose={toggleModal}
//         contentLabel="My dialog"
//       >
//         <button onClick={toggleModal}>Close modal</button>
//         <div class="modal" tabindex="-1" role="dialog">
//           <div class="modal-dialog" role="document">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <h5 class="modal-title">Modal title</h5>
//                 <button
//                   type="button"
//                   class="close"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div class="modal-body">
//                 <p>Modal body text goes here.</p>
//               </div>
//               <div class="modal-footer">
//                 <button type="button" class="btn btn-primary">
//                   Save changes
//                 </button>
//                 <button
//                   type="button"
//                   class="btn btn-secondary"
//                   data-dismiss="modal"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }

import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Dropdown } from "bootstrap/dist/js/bootstrap.bundle";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const Modal = () => {
  return (
    <>
      <Dropdown>
        <DropdownToggle variant="success" id="dropdown-basic">
          Dropdown Button
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem href="#/action-1">Action</DropdownItem>
          <DropdownItem href="#/action-2">Another action</DropdownItem>
          <DropdownItem href="#/action-3">Something else</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default Modal;
