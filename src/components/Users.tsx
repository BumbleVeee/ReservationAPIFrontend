import { useUserContext } from "../contexts/UserContext"
import User from "./User"


export function Users() {
    const {usersList, load, error}= useUserContext()

    if (load) {
        return(
            <p>
                Userek betöltése...
            </p>
        )
    }

    if (error) {
        return(
            <p>
                {error}
            </p>
        )
    }

    return (
        <div>
            <h1>Userek:</h1>
            {
                usersList.map((user, i)=>{
                    return(<User key={i} user={user}/>)
                })
            }
        </div>
    )
}

export default Users