import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
      <Modal.Open opens="table-form">
        <Button>Add table</Button>
      </Modal.Open>
      <Modal.Window name="table-form">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;

//LGACY METHOD NOT GOOD PRACTICE - RESOLVING IT USING COMPOUND COMPONENET METHOD
// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//
//   return (
//     <div>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//       <Button onClick={() => setIsOpenModal(!isOpenModal)}>Add Cabin</Button>
//     </div>
//   );
// }
