import { useState } from 'react'
import styles from './NewTransaction.module.css'
import { useApi } from '../utils/api'
import { useLoaderData, useNavigate } from 'react-router'

export function NewTransaction() {
    const accountId = useLoaderData()
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const api = useApi()
    const navigate = useNavigate()

    console.log(accountId)

    async function createTransaction() {
        await api.post(`/accounts/${accountId}/transactions/`, {
            short_description: description,
            amount: amount.split(".")
        })

        navigate(-1)
    }

    return (
        <div>
            <h1>New Transaction</h1>
            <label>
                Description
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <label>
                Amount
                <input type="text" value={amount} onChange={e => setAmount(e.target.value)} />
            </label>
            <button type="button" onClick={createTransaction}>Add Transaction</button>
        </div>
    )
}

export async function loader({ params }) {
    return params.accountId
}