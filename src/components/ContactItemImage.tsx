interface Image {
  imageUrl: string;
}
function ContactItemImage({ imageUrl }: Image) {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
}

export default ContactItemImage;
