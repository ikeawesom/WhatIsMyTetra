import React from "react";
import Image from "next/image";
import { TelegramShareButton, WhatsappShareButton } from "react-share";
import { MaxType } from "./ResultsScreen";
function handleText(elements: string[]) {
  if (elements.length === 1)
    return `I represent the ${elements[0].toUpperCase()} element`;
  else {
    var text = "";

    for (let i = 0; i < elements.length - 1; i++) {
      text += `${elements[i].toUpperCase()}, `;
    }
    text = text.trim().substring(0, text.length - 2);
    text += ` and ${elements[elements.length - 1].toUpperCase()}`;
    return `I represent the ${text} elements`;
  }
}

export default function SharingButtons({ data }: { data: MaxType }) {
  const text = `Hi there! I just did my tetra test and I am proud to share that ${handleText(
    data.elements
  )}!

Check out yours here: https://whatismytetra.vercel.app/ !`;

  return (
    <>
      <h1 className="font-medium mt-10 text-lg">Let others know!</h1>
      <div className="flex items-center justify-center gap-4">
        <WhatsappShareButton url={text}>
          <Image
            src="whatsapp.svg"
            alt="Share to WhatsApp"
            width={50}
            height={50}
            className="hover:opacity-70 duration-150"
          />
        </WhatsappShareButton>
        <TelegramShareButton
          url={text}
          className="hover:opacity-70 duration-150"
        >
          <Image
            src="telegram.svg"
            alt="Share to Telegram"
            width={40}
            height={40}
          />
        </TelegramShareButton>
      </div>
    </>
  );
}
