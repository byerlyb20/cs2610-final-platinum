import { ListWithBottomButtons } from '../components/ListWithBottomButtons'
import { AccountListItem } from '../components/AccountListItem'
import styles from './Dashboard.module.css'
import { useNavigate } from 'react-router'
import { useUser } from '../utils/use_user'
import { useAccounts } from '../utils/use_accounts'

export function Dashboard() {
    const navigate = useNavigate()
    const user = useUser()
    const accounts = useAccounts()

    return (
        <div className="page">
            <h1>Welcome{user ? `, ${user.first}` : ""}!</h1>
            <div className={styles.row}>
                <div className={"card container-low " + styles.list}>
                    <ListWithBottomButtons
                        buttonText="Add New Account"
                        onClick={() => navigate("/account/new")}>
                            {accounts.map(account => (
                                <AccountListItem
                                    key={account.id}
                                    id={account.id}
                                    category={account.category}
                                    title={account.name}
                                    balance={account.balance} />
                            ))}
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