"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function SongCard({
  id,
  name,
  singer,
  album,
  src,
  password,
  description,
  soundcloud,
}) {
  const [pass, setPass] = useState("");
  const [verify, setVerify] = useState(false);

  const handleChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVerify(pass === password);
  };

  const Details = (
    <div>
      <iframe width="100%" height="150" allow="autoplay" src={soundcloud} />
      <Link href={`/upcoming/${id}`}>Visit Song Page</Link>
    </div>
  );
  return (
    <div className="w-[90%] border border-white mx-auto p-2 m-2 flex text-white gap-4 lg:flex-row flex-col items-center lg:items-start">
      <Image
        src={src}
        height={250}
        width={200}
        className="lg:h-full lg:w-auto"
      />
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-semibold text-center">{name}</h1>
        <p className="text-center">Singer : {singer}</p>
        <p className="text-center">Album : {album}</p>
        <div className="my-4">Description - {description}</div>
        {password.length !== 0 && !verify && (
          <div>
            <form onSubmit={handleSubmit}>
              <div>Enter Password to listen and access lyrics</div>
              <input
                className="bg-inherit text-white px-1 focus:outline-none border-b-2 w-full lg:max-w-[600px]"
                type="password"
                onChange={handleChange}
              />
              <input
                type="submit"
                value="Submit &rarr;"
                className="block cursor-pointer my-2"
              />
            </form>
          </div>
        )}
        {(password.length === 0 || verify) && Details}
      </div>
    </div>
  );
}