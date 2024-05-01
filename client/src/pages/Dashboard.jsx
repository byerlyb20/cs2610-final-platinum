import { ListWithBottomButtons } from '../components/ListWithBottomButtons'
import { AccountListItem } from '../components/AccountListItem'
import styles from './Dashboard.module.css'

export function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <h1>Welcome, Brigham!</h1>
            <div className={styles.row}>
                <div className={"card container-low " + styles.list}>
                    <ListWithBottomButtons
                        buttonText="Add New Account"
                        onClick={() => console.log("Hi!")}>
                        <AccountListItem
                            category="Savings"
                            title="Bank of America"
                            balance={[4938,75]} />
                        <AccountListItem
                            category="Investment"
                            title="Fidelity"
                            balance={[19837,87]} />
                        <AccountListItem
                            category="Checking"
                            title="Bank of Utah"
                            balance={[844,12]} />
                    </ListWithBottomButtons>
                </div>
                <div className={styles.detailArea}>
                    <div className="card container-low">
                        Card A
                    </div>
                    <div className="card container-low">
                        Card B
                    </div>
                </div>
            </div>
        </div>
    )
}