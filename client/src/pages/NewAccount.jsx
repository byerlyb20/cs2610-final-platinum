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
        <div className="page">
            <h1>New Account</h1>
            <div className={`card container-low ${styles.main}`}>
                <form className="padded">
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
                    <br />
                </form>
                <button type="button" onClick={createAccount}>Create Account</button>
            </div>
        </div>
    )
}