import { useEffect, useState } from "react"
import { useApi } from "./api"

export const useUser = () => {
    const api = useApi()
    const [user, setUser] = useState(null)
    
    async function loadUser() {
        const user = await api.get('/user/')
        setUser(user)
    }

    useEffect(() => {
        loadUser()
    }, [])

    return user
}