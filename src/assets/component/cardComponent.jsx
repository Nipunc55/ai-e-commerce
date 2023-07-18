import styles from "./cardComponent.module.css";

const CardContainer = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img
          src='./icons/tone-on-tone-dressing-blue-oxford-shirt.webp'
          className='img-fluid'
          alt='Card Image'
        />
      </div>
      <div>
        <h3 className={styles.card_title}>Item name with description</h3>
        <h5>20$</h5>
        <p className='card-text'>Free Shipping</p>
      </div>
    </div>
  );
};

export default CardContainer;
