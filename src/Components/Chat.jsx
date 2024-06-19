import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  console.log(text);

  return (
    <div className="flex-2 flex flex-col border-l-[1px] border-r-[1px] h-full">
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
      <div className="flex-1 p-5 gap-5 flex flex-col overflow-scroll">
        <div className="max-w-[70%] flex gap-5">
          <img className="h-6 w-6 rounded-full" src="./avatar.png" alt="" />
          <div>
            <p className="text-white p-3 bg-main rounded-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos hic
              quod nemo sunt. Numquam, vero aperiam? Doloribus voluptates
              facilis tempore.
            </p>
            <span className="text-sm ">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 self-end">
          <div>
            <p className="text-white p-3 bg-orange-800 bg-opacity-50 rounded-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos hic
              quod nemo sunt. Numquam, vero aperiam? Doloribus voluptates
              facilis tempore.
            </p>
            <span className="text-sm ">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5">
          <img className="h-6 w-6 rounded-full" src="./avatar.png" alt="" />
          <div>
            <p className="text-white p-3 bg-main rounded-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos hic
              quod nemo sunt. Numquam, vero aperiam? Doloribus voluptates
              facilis tempore.
            </p>
            <span className="text-sm ">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 self-end">
          <div>
            <p className="text-white p-3 bg-orange-800 bg-opacity-50 rounded-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos hic
              quod nemo sunt. Numquam, vero aperiam? Doloribus voluptates
              facilis tempore.
            </p>
            <span className="text-sm ">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 self-end">
          <div>
            <img
              className="w-full h-[250px] rounded-lg object-cover"
              src="https://images.pexels.com/photos/18374429/pexels-photo-18374429/free-photo-of-duvar-tepe-lamba-antik.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <p className="text-white p-3 bg-orange-800 bg-opacity-50 rounded-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos hic
              quod nemo sunt. Numquam, vero aperiam? Doloribus voluptates
              facilis tempore.
            </p>
            <span className="text-sm ">1 min ago</span>
          </div>
        </div>
      </div>
      <div className="flex p-5 items-center justify-between gap-5 border-t-[1px] mt-auto">
        <div className="flex gap-5">
          <img className="w-5 h-5 cursor-pointer" src="./img.png" alt="" />
          <img className="w-5 h-5 cursor-pointer" src="./camera.png" alt="" />
          <img className="w-5 h-5 cursor-pointer" src="./mic.png" alt="" />
        </div>
        <input
          className="flex-1 rounded-xl text-lg  border-none outline-none text-white p-3 bg-main"
          type="text"
          value={text}
          placeholder="Type a text message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="relative">
          <img
            onClick={() => setOpen((prev) => !prev)}
            className="w-5 h-5 cursor-pointer"
            src="./emoji.png"
            alt=""
          />
          <div className="absolute left-0 bottom-8">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="text-white bg-orange-600  rounded-lg hover:brightness-95 px-4 py-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
