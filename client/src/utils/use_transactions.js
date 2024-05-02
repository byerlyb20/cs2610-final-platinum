import { useEffect, useState } from "react"
import { useApi } from "./api"

export const useTransactions = (accountId) => {
    const api = useApi()
    const [transactions, setTransactions] = useState([])
    const [accountName, setAccountName] = useState("")
    
    async function loadTransactions() {
        const { transactions, accountName } = await api.get(`/accounts/${accountId}/transactions/`)
        setTransactions(transactions)
        setAccountName(accountName)
    }

    useEffect(() => {
        loadTransactions()
    }, [])

    return [transactions, accountName]
}