const Detail = () => {
  return (
    <div className="flex-1 ">
      <div className="py-6 px-5 flex flex-col  items-center gap-3 border-b-[1px]">
        <img
          className="w-24 h-24 object-cover rounded-full"
          src="./avatar.png"
          alt=""
        />
        <h2>Ali Doe</h2>
        <p>Lorem ipsum dolor Lorem, ipsum.f</p>
      </div>

      <div className="p-5 flex flex-col gap-4 ">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Chat Settings</span>
            <img
              className="w-7 h-7 bg-main p-2 rounded-full cursor-pointer"
              src="./arrowUp.png"
              alt=""
            />
          </div>
        </div>
        {/* privacy help */}
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Privacy % help</span>
            <img
              className="w-7 h-7 bg-main p-2 rounded-full cursor-pointer"
              src="./arrowUp.png"
              alt=""
            />
          </div>
        </div>

        <div className="">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Shared Photos</span>
            <img
              className="w-7 h-7 bg-main p-2 rounded-full cursor-pointer"
              src="./arrowUp.png"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-5 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  className="w-10 h-10 rounded-lg object-cover"
                  src="https://images.pexels.com/photos/18374429/pexels-photo-18374429/free-photo-of-duvar-tepe-lamba-antik.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                />
                <span className="text-xs font-light text-gray-300">
                  photo_2042_2.png
                </span>
              </div>
              <img
                className="h-7 w-7 p-2 bg-main cursor-pointer rounded-full"
                src="./download.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Shared Files</span>
            <img
              className="w-7 h-7 bg-main p-2 rounded-full cursor-pointer"
              src="./arrowUp.png"
              alt=""
            />
          </div>
        </div>
        <button className="bg-orange-950 opacity-85 hover:bg-orange-300 py-1 relative px-20 rounded-sm text-white text-sm font-semibold ">
          Block User
        </button>
        <button className="bg-orange-500 opacity-85 hover:bg-orange-300 py-1 relative px-20 rounded-sm text-white text-sm font-semibold ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
