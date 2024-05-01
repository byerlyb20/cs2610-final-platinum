import styles from './AccountsList.module.css'

export function AccountsList() {
    return (
        <div className={styles.listAndButtons}>
            <div className={styles.list}>
                Here is the list
            </div>
            <div className={styles.buttons}>
                <div className={styles.button}>
                    Create New Account
                </div>
            </div>
        </div>
    )
}