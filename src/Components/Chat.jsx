const Chat = () => {
  return (
    <div className="flex-2 border-l-[1px] border-r-[1px] h-full">
      <div className="p-5 flex items-center justify-between border-b-[1px]">
        <div className="flex items-center gap-5">
          <img
            className="rounded-full w-16 h-16 object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-white">Ali Doe</span>
            <p className=" text-gray-200">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <img
            className="w-5 h-5 hover:opacity-65 cursor-pointer"
            src="./phone.png"
            alt=""
          />
          <img
            className="w-5 h-5 hover:opacity-65 cursor-pointer"
            src="./video.png"
            alt=""
          />
          <img
            className="w-5 h-5 hover:opacity-65 cursor-pointer"
            src="./info.png"
            alt=""
          />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Chat;
