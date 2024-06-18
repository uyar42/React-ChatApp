import ChatList from "./ChatList";
import UserInfo from "./UserInfo";

const List = () => {
  return (
    <div className="flex-1">
      <UserInfo></UserInfo>
      <ChatList></ChatList>
    </div>
  );
};

export default List;
