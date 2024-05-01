import styles from './TransactionDetail.module.css'
import { useLoaderData } from "react-router"

export function TransactionDetail() {
    const transaction = useLoaderData()
    return (
        <div className="card container-low">
            Transaction detail view for transaction {transaction.id}
        </div>
    )
}

export async function loader({ params }) {
    console.log("Loading transaction " + params.transactionId)
    return { id: params.transactionId }
}