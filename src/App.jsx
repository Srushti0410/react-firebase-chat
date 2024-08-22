import Detail from "./component/details/Detail";
import List from "./component/list/List";
import Chat from "./component/chat/Chat";
const App = () => {
  return (
    <div className='container'>
      <Detail />
      <List />
      <Chat />
    </div>
  )
}

export default App;