import { AccountsList } from '../components/AccountsList'
import styles from './Dashboard.module.css'

export function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <h1>Welcome, Brigham!</h1>
            <div className={styles.row}>
                <div className={"card container-low " + styles.list}>
                    <AccountsList />
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