import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import styles from "@/styles/StartPlant.module.css"

const index = () => {
    return (
        <div>

            <Header />
            <h3 className={styles.title}>Verification Steps</h3>
            <section className={styles.steps_flex}>
                <p className={styles.steps}><b>Step 1:</b> Take a picture of prepared the
                    plant site (before you plant!) </p>
                    <button className={styles.camera_button}><svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></button>
                <p className={styles.steps}><b>Step 2:</b> Plant your seedling!</p>
                <p className={styles.steps}><b>Step 3:</b> Take a picture of your planted
                    seedling</p>
                    <button className={styles.camera_button}><svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></button>
                <p className={styles.steps}><b>Step 4:</b> Wait for verification; <b>Get Paid</b> </p>
            </section>

            <Nav />
        </div>
    )
}

export default index