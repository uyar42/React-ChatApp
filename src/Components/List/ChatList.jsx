import { useState } from "react";

const ChatList = () => {
  const [changeMode, setChangeMode] = useState(false);
  return (
    // serachbar
    <div className="flex-1  overflow-y-scroll scroll ">
      <div className="flex items-center gap-5 p-5 sticky top-0 z-10 bg-opacity-80 bg-slate-900 ">
        <div className="flex-1 flex p-2   items-center text-white gap-5 rounded-lg bg-orange-600 bg-opacity-80">
          <img className="h-5 w-5 cursor-pointer" src="./search.png" alt="" />
          <input
            className="bg-transparent outline-none border-none flex-1"
            type="text"
            placeholder="Search"
          />
        </div>
        <img
          className="h-11 w-11 bg-orange-600 bg-opacity-80  p-4 rounded-lg cursor-pointer hover:brightness-90
          "
          src={changeMode ? "./minus.png" : "./plus.png"}
          alt=""
          onClick={() => setChangeMode((prev) => !prev)}
        />
      </div>

      {/* chats */}
      <div className="flex items-center p-2 gap-5 cursor-pointer   border-b-[1px] hover:backdrop-opacity-55">
        <img className="rounded-full w-12 h-12" src="./avatar.png" alt="" />
        <div className="text-white">
          <span className="font-medium">Mehmet Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="flex items-center p-2 gap-5 cursor-pointer  border-b-[1px]    hover:backdrop-opacity-55">
        <img className="rounded-full w-12 h-12" src="./avatar.png" alt="" />
        <div className="">
          <span>Mehmet Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="flex items-center p-2 gap-5 cursor-pointer border-b-[1px]   hover:backdrop-opacity-55">
        <img className="rounded-full w-12 h-12" src="./avatar.png" alt="" />
        <div className="">
          <span>Mehmet Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="flex items-center p-2 gap-5 cursor-pointer border-b-[1px]   hover:backdrop-opacity-55">
        <img className="rounded-full w-12 h-12" src="./avatar.png" alt="" />
        <div className="">
          <span>Mehmet Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="flex items-center p-2 gap-5 cursor-pointer border-b-[1px]   hover:backdrop-opacity-55">
        <img className="rounded-full w-12 h-12" src="./avatar.png" alt="" />
        <div className="">
          <span>Mehmet Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="flex items-center p-2 gap-5 cursor-pointer border-b-[1px]  hover:backdrop-opacity-55 ">
        <img className="rounded-full w-12 h-12" src="./avatar.png" alt="" />
        <div className="">
          <span>Mehmet Doe</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
