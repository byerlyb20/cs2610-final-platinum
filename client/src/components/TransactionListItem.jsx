import styles from './TransactionListItem.module.css'

export function TransactionListItem({ date, title, description, balance }) {
    const dollars = balance[0]
    const cents = String(balance[1]).padStart(2, '0')
    return (
        <div className={styles.item}>
            <div>{date}</div>
            <div className={styles.titleAndDescription}>
                <span className={styles.title}>{title}</span><br />
                <span className={styles.description}>{description}</span>
            </div>
            <div>${dollars}.{cents}</div>
        </div>
    )
}