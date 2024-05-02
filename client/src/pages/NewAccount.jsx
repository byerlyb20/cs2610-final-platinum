import { useState } from 'react'
import styles from './NewAccount.module.css'
import { useApi } from '../utils/api'
import { useNavigate } from 'react-router'

export function NewAccount() {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [number, setNumber] = useState("")
    const api = useApi()
    const navigate = useNavigate()

    async function createAccount() {
        await api.post("/accounts/", {
            name,
            category,
            number
        })

        navigate(-1)
    }

    return (
        <div>
            <h1>New Account</h1>
            <label>
                Name
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Category
                <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
            </label>
            <label>
                Number
                <input
                    type="number"
                    min="1000"
                    max="9999"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </label>
            <button type="button" onClick={createAccount}>Create Account</button>
        </div>
    )
}