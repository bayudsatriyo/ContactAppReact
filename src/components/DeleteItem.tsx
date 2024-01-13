import { FiDelete } from "react-icons/fi";

interface Deleted {
  id: number;
  onDelete: (id: number) => void;
}
function DeleteButton({ id, onDelete }: Deleted) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      <FiDelete />
    </button>
  );
}

export default DeleteButton;
