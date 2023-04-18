import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import styles from "@/styles/Profile.module.css"
import Transaction from "../../../components/TransactionCard"
import { useState } from "react";
import { useRouter } from "next/router";


const Profile = (props) => {
    const [transactionStart, setTransactionStart] = useState(false);
    const router = useRouter();

    return (
        <>
            <Header page="Arbour" />
            <div className={styles.main}>
                <div className={styles.info_flex}>
                    <img className={styles.profile_image} src="https://picsum.photos/200" alt="profile picture" />

                    <div className={styles.info_text}>
                        <h2>John Doe</h2>
                        <p>john.doe@gmail.com</p>
                    </div>
                </div>

                <div className={styles.history_container}>
                    <h3>History</h3>
                    <ul className={styles.trees_list}>
                        <li>Trees sponsored: 1,123</li>
                        <li>Trees planted: 42</li>
                    </ul>

                </div>

                <div className={styles.history_container}>
                    <h3>Leaf Tokens</h3>

                    <div className={styles.token_value_container}>
                        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" /></svg>
                        <span className={styles.token_value_number}>120</span>
                        <button onClick={() => { setTransactionStart(!transactionStart) }} className={styles.button}>Buy Leaf</button>
                        <button onClick={() => { setTransactionStart(!transactionStart) }} className={styles.button}>Sell Leaf</button>
                    </div>




                </div>




                <button onClick={() => {
                    router.push({
                        pathname: '/',
                        // query: { page: 'Ongoing' }
                    })
                }} className={styles.button_logout}>Logout</button>
            </div>
            {transactionStart === true ? <Transaction transactionStart={transactionStart} setTransactionStart={setTransactionStart} /> : <></>}
            {/* <Transaction/> */}
            <Nav currentPage={"Profile"} />
        </>

    )
}



export default Profile