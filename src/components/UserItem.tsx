import {FC} from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div key={user.id} style={{padding: 15, border: '1px solid gray'}}>
            {user.name} {user.email} {user.address.city}
        </div>
    )
}

export default UserItem