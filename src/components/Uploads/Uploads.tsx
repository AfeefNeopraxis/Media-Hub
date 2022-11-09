import { Routes, Route } from "react-router-dom";
import s from "./Uploads.module.css";
import Apps from "../Apps/Apps";
// Upload buttons clicks

const Uploads = () => {
  return (
    <div>
      <div className="flex justify-end mb-2 mt-2 ml-2 mr-2">
        <p className="font-bold text-xs my-1 justify-center pr-1">merge view</p>
        <label className="relative items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            id="default-toggle"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
        </label>
      </div>
      <div className="container mx-auto px-2 text-center">
        <p className="font-bold py-1 text-xs">User Uploads</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 text-center">
        <p className="font-bold py-1 text-xs">Bussiness Uploads</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            <p className=" text-sm">sample description of image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploads;
