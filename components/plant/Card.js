import styles from "@/styles/Card.module.css"

const Card = () => {
  return (
    <div className={styles.card_container}>
        <img className={styles.tree_img} src="https://picsum.photos/200" alt="image of tree" />

        <div className={styles.inner_flex}>
            <div className={styles.top_desc}>
                <h2 className={styles.tree_type}>Tree Type</h2>
                <span className={styles.sponsor_span}>by <a className={styles.sponsor_link} href="">Sponsor</a></span>
            </div>
            
            <div className={styles.bottom_desc}>
                <span className={styles.price}>50</span>
                <button className={styles.button}>Plant</button>
            </div>
        </div>

       
    
    </div>
  )
}

export default Card