import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Card, {CardVariant} from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types'

const App = () => {

    const [users,setUsers] = useState<IUser[]>([])

    useEffect(()=>{
      fetchUsers()
    },[])

    const fetchUsers = async () =>{
        try{
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        }
        catch(err){
            alert(err)
        }
    }

    return (
      <div>
          <Card onClick={(num) => console.log('click',num)} variant={CardVariant.outlined} width='200px' height='200px'>
            <button>Кнопка</button>
          </Card>
          <UserList users={users} />
      </div>
    )
}

export default App