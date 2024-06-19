const UserInfo = () => {
  return (
    <div className="flex p-5 items-center justify-between bg-slate-900 bg-opacity-80">
      {/* avatars - nick */}
      <div className="flex items-center gap-5 ">
        <img
          className="rounded-full w-12 h-12 hover:brightness-150"
          src="./avatar.png"
          alt=""
        />
        <h2 className="text-white">Haci Doe</h2>
      </div>

      {/* //icons */}
      <div className="flex gap-5 ">
        <img
          className="w-5 h-5 hover:opacity-65 cursor-pointer"
          src="./more.png"
          alt=""
        />
        <img
          className="w-5 h-5 hover:opacity-65 cursor-pointer"
          src="./video.png"
          alt=""
        />
        <img
          className="w-5 h-5 hover:opacity-65 cursor-pointer"
          src="./edit.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default UserInfo;
