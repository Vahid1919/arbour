import styles from "@/styles/Card.module.css"
import Link from 'next/link'

const Card = ({buttonText = "Plant"}) => {
  return (
    <div className={styles.card_container}>
        <img className={styles.tree_img} src="https://picsum.photos/200" alt="image of tree" />

        <div className={styles.inner_flex}>
            <div className={styles.top_desc}>
                <h2 className={styles.tree_type}>Tree Type</h2>
                <span className={styles.sponsor_span}>by <a className={styles.sponsor_link} href="">Sponsor</a></span>
            </div>
            
            <div className={styles.bottom_desc}>
                <span className={styles.token_value_container}>
                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" /></svg>

                  50
                  </span>
                  <Link className={styles.link} href="/start-plant"><button className={styles.button}>{buttonText}</button></Link>

                
            </div>
        </div>

       
    
    </div>
  )
}

export default Card