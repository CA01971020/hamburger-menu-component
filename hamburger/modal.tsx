import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export function HambState() {
  const [show, setShow] = useState(false);
  return { show, setShow };
}
// モーダルを表示するためのボタンコンポーネント
export default function HambBtn() {
  const { show, setShow } = HambState();
  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className=" absolute top-4 right-10 h-12 w-12 rounded-xl "
      >
        <GiHamburgerMenu className=" absolute text-white select-none top-0 left-2.5 text-3xl" />
      </button>
      {show && <Hamburger setShow={setShow} />}
    </div>
  );
}

// モーダルコンポーネント
export function Hamburger({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="bg-sky400 fixed w-full z-20 top-0 right-0 h-full flex items-center justify-center">
      <button
        onClick={() => setShow(false)}
        className="absolute  top-4 right-10 h-12 w-12 rounded-xl "
      >
        <IoClose className=" absolute text-white select-none top-0 left-2.5 text-4xl" />
      </button>
      <div className=" text-White">
        <div className=" relative -top-10 sm:-top-4 text-center grid grid-cols-1">
          <a className=" select-none" href="">
            ホーム
          </a>
          <a className="mt-16 select-none" href="">
            お知らせ
          </a>
          <a className="mt-16 select-none" href="">
            設定
          </a>
          <a className=" mt-16 select-none" href="">
            お問い合わせ
          </a>
        </div>
      </div>
    </div>
  );
}
