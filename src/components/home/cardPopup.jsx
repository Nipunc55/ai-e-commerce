import styles from "./cardPopup.module.css";

const CardPopup = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <img
            src='./icons/tone-on-tone-dressing-blue-oxford-shirt.png'
            className='img-fluid'
            alt='Card Image'
          />
        </div>
        <div className={styles.text_container}>
          <h3 className={styles.card_title}>Item name with description</h3>
          <h5>20$</h5>
          <p className='card-text'>Free Shipping</p>
        </div>
      </div>
    </div>
  );
};

export default CardPopup;
