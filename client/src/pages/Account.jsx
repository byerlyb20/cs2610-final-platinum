import { Outlet, useLoaderData, useNavigate } from 'react-router'
import { ListWithBottomButtons } from '../components/ListWithBottomButtons'
import { TransactionListItem } from '../components/TransactionListItem'
import styles from './Account.module.css'
import { useTransactions } from '../utils/use_transactions'

export function Account() {
    const navigate = useNavigate()
    const accountId = useLoaderData()
    const [transactions, accountName] = useTransactions(accountId)

    return (
        <div className={styles.dashboard}>
            <h1>{accountName}</h1>
            <div className={styles.row}>
                <div className={"card container-low " + styles.list}>
                    <ListWithBottomButtons
                        buttonText="New Transaction"
                        onClick={() => navigate("new")}>
                            {transactions.map(transaction => (
                                <TransactionListItem
                                    key={transaction.id}
                                    id={transaction.id}
                                    date={transaction.date}
                                    title={transaction.short_description}
                                    description=""
                                    balance={transaction.amount} />
                            ))}
                    </ListWithBottomButtons>
                </div>
                <div className={styles.detailArea}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export async function loader({ params }) {
    return params.accountId
}