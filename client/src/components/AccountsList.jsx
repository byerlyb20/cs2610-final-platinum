import { AccountListItem } from './AccountListItem'
import styles from './AccountsList.module.css'

export function AccountsList() {
    return (
        <div className={styles.listAndButtons}>
            <div className={styles.list}>
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
            </div>
            <div className={styles.buttons}>
                <div className={styles.button}>
                    Create New Account
                </div>
            </div>
        </div>
    )
}