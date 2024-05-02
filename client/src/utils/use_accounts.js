import { useEffect, useState } from "react"
import { useApi } from "./api"

export const useAccounts = () => {
    const api = useApi()
    const [accounts, setAccounts] = useState([])
    
    async function loadAccounts() {
        const { accounts } = await api.get('/accounts/')
        setAccounts(accounts)
    }

    useEffect(() => {
        loadAccounts()
    }, [])

    return accounts
}