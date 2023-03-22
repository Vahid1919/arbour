import styles from "@/styles/Sponsor.module.css"


const SponsorComponent = () => {
  return (
    <form className={styles.main}>
       <span>
            <label for="tree-type"  className={styles.label}>Tree Type:</label> 
            <select className={styles.select} name="tree-type" id="tree-type">
                <option value="general">General</option>
                <option value="acacia">Acacia</option>
            </select>
       </span>

       <span>
        
        <label for="tree-type" className={styles.label}>Amount:&nbsp;&nbsp;&nbsp;</label> 
         <input className={styles.select} type="number" name="amount"/>
       </span>

       <button className={styles.button}>
        Sponsor
       </button>


    </form>
  )
}

export default SponsorComponent