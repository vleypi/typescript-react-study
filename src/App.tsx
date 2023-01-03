import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Card, {CardVariant} from './components/Card'
import List from './components/List'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'
import { ITodo, IUser } from './types/types'
import UserList from './components/UserList'
import EventsExample from './components/EventsExample'

const App = () => {

    const [users,setUsers] = useState<IUser[]>([])
    const [todos,setTodos] = useState<ITodo[]>([])

    useEffect(()=>{
      fetchUsers()
      fetchTodos()
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

    const fetchTodos = async () =>{
      try{
          const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
          setTodos(res.data)
      }
      catch(err){
          alert(err)
      }
  }

    return (
      <div>
          <EventsExample />
          <Card onClick={(num) => console.log('click',num)} variant={CardVariant.outlined} width='200px' height='200px'>
            <button>Кнопка</button>
          </Card>
          
          
          <List items={users} renderItem={(user: IUser)=><UserItem user={user} key={user.id}/>}/>
          <List items={todos} renderItem={(todo: ITodo)=><TodoItem todo={todo} key={todo.id}/>}/>

          <UserList users={users} />
      </div>
    )
}

export default App