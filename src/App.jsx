import List from "./Components/List/List";
import Chat from "./Components/Chat";
import Detail from "./Components/Detail";

function App() {
  return (
    <>
      <div className="h-[90vh] w-[90vw] rounded-lg  bg-opacity-75 bg-black backdrop-blur-md flex flex-row">
        <List></List>
        <Chat></Chat>
        <Detail></Detail>
      </div>
    </>
  );
}

export default App;
