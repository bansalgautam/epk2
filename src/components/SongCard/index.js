"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function SongCard({
  name,
  singer,
  album,
  src,
  password,
  description,
  soundcloud,
  lyrics,
}) {
  const [pass, setPass] = useState("");
  const [verify, setVerify] = useState(undefined);
  const [lyric, setLyric] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass !== password) {
      onOpen();
    }
    setVerify(pass === password);
  };

  const show = () => {
    setLyric((prev) => !prev);
  };

  const Details = (
    <div className="select-none">
      <iframe height="150" allow="autoplay" className="mx-auto lg:max-w-[95%] w-[100%]" src={soundcloud} />
      <div
        onClick={show}
        className="cursor-pointer bg-[#feac32] text-black px-2 py-1 my-4 inline-block hover:bg-[rgba(254,172,50,0.8)]"
      >
        {lyric ? "Hide Lyrics" : `Show Lyrics`}
      </div>
      {lyric && <pre className="text-wrap">{lyrics}</pre>}
    </div>
  );

  return (
    <>
      <div className="w-[90%] shadow-2xl mx-auto p-2 m-8 flex text-white gap-4 lg:flex-row flex-col items-center lg:items-start bg-[#0a0a23]">
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
                  className="block cursor-pointer my-2 bg-white text-black pr-4 pl-2 focus:outline-none"
                />
              </form>
            </div>
          )}
          {(password.length === 0 || verify) && Details}
        </div>
      </div>
      <Modal
        size={"sm"}
        isOpen={isOpen}
        onClose={onClose}
        backdrop={"blur"}
        className="bg-black text-white"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-center">
                Wrong Password
              </ModalHeader>
              <ModalBody>Please try again with correct password!</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
