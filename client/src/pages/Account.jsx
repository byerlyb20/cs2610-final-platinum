import { useLoaderData } from 'react-router'
import { ListWithBottomButtons } from '../components/ListWithBottomButtons'
import { TransactionListItem } from '../components/TransactionListItem'
import styles from './Account.module.css'

export function Account() {
    const account = useLoaderData();
    return (
        <div className={styles.dashboard}>
            <h1>{account.name}</h1>
            <div className={styles.row}>
                <div className={"card container-low " + styles.list}>
                    <ListWithBottomButtons
                        buttonText="New Transaction"
                        onClick={() => console.log("Hi!")}>
                        <TransactionListItem
                            date="5/5/24"
                            title="Paycheck"
                            description="From Job A"
                            balance={[0,0]} />
                        <TransactionListItem
                            date="5/5/24"
                            title="Gift"
                            description=""
                            balance={[0,0]} />
                        <TransactionListItem
                            date="5/5/24"
                            title="Bonus"
                            description="Mid-year performace bonus"
                            balance={[0,0]} />
                        <TransactionListItem
                            date="5/5/24"
                            title="Paycheck"
                            description=""
                            balance={[0,0]} />
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

export async function loader({ params }) {
    console.log("Loading data for " + params.accountId)
    return { name: "Bank of America" }
}