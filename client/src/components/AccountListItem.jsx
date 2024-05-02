import { Link } from 'react-router-dom'
import styles from './AccountListItem.module.css'

export function AccountListItem({ id, category, title, balance }) {
    const dollars = balance[0]
    const cents = String(balance[1]).padStart(2, '0')
    return (
        <Link to={`/account/${id}/transaction`} className={styles.item}>
            <div>
                <span className={styles.category}>{category}</span><br />
                <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.balance}>
                <span className={styles.dollarSign}>$</span>
                {dollars}.{cents}
            </div>
        </Link>
    )
}