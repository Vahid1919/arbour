import styles from "@/styles/Ongoing.module.css"
import Card from "../Card"

const Ongoing = () => {
    return (
        <div className={styles.main}>
            <div className={styles.buttons_flex}>

                <div className={styles.radio_container}>
                    <input className={styles.radio} type="radio" name="mode" id="plant" value="plant"/>
                    <label className={styles.text} htmlFor="plant">Plant</label>
                </div>

                <div className={styles.radio_container}>
                    <input className={styles.radio} type="radio" name="mode" id="sponsor" value="sponsor"  checked />
                    <label className={styles.text} htmlFor="sponsor">Sponsor</label>
                </div>
            </div>

        <div className={styles.inherited_main}>
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
        </div>


        </div>
    )
}

export default Ongoing