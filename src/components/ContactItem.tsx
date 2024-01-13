import ContactItemBody from "./ContactItemList";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteItem";

interface ContactItem {
  imageUrl: string;
  name: string;
  tag: string;
  id: number;
  onDelete: (id: number) => void;
}

function Contactitem({ imageUrl, name, tag, id, onDelete }: ContactItem) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default Contactitem;
