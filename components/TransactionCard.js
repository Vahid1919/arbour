import styles from "@/styles/Transaction.module.css"

const TransactionCard = ({transactionStart, setTransactionStart}) => {
  return (
    <div className={styles.main}>
        <h1 className={styles.title}>Buy Leaf</h1>
        <span className={styles.payement_flex}>
            <div className={styles.inner_flex}>
                <label className={styles.amount} htmlFor="amount-input">Amount: </label>
                <input className={styles.number} type="number" />
            </div>

            <button onClick={() => {setTransactionStart(!transactionStart)}} className={styles.button}>Buy</button>
            

        </span> 
        

    </div>
  )
}

export default TransactionCard