"use client";

import { details } from "@/public/details";
import { useState } from "react";

export default function IdPage({ params }) {
  const songDetails = details.find((item) => item.id == params.id);
  const [pass, setPass] = useState("");
  const [verify, setVerify] = useState(false);

  const handleChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVerify(pass === songDetails.password);
  };

  if (!songDetails) {
    return (
      <div className="flex items-center justify-center h-[100vh] w-full text-white">
        Wrong song requested!
      </div>
    );
  }

  if (songDetails.password.length === 0 || verify) {
    return (
      <div className="text-white">
        <pre>{JSON.stringify(songDetails, undefined, 2)}</pre>
      </div>
    );
  }

  return (
    <div className="text-white">
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
  );
}
