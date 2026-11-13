import type { userType } from '../types/userType'

interface UserProps{
    user: userType
}

export function User({user}:UserProps) {
  return (
    <div>
        <h3>User:</h3>
        <p>id: {user.id}</p>
        <p>name: {user.name}</p>
        <p>email: {user.email}</p>
    </div>
  )
}

export default User