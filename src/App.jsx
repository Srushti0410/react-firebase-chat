import Detail from "./component/details/Detail";
import List from "./component/list/List";
import Chat from "./component/chats/Chat";
const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>

    </div>
  )
}

export default App;