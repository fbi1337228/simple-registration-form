import React from "react";

export default function Logo({ size = "medium" }) {
  const config = {
    little: {
      container: "w-[35px] h-[35px] rounded-[6px] mt-14 mb-14",
      text: "text-[16px]",
    },
    medium: {
      container: "w-[56px] h-[56px] rounded-[12px] mt-26 mb-16",
      text: "text-[36px]",
    },
  };

  const { container, text } = config[size];

  return (
    <div
      className={`
        ${container}
        text-white 
        border-0
        bg-[#34A751]
        flex flex-col items-center justify-center 
        `}
    >
      <span className={`${text}`}>IIZ</span>
    </div>
  );
}
