"use client";
import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";

interface QrCodeProps {
  qrUrl?: string;
  title?: string;
  imgUrl?: string;
}

const QrCode: React.FC<QrCodeProps> = ({
  imgUrl = "/larsanto.svg",
  title = "Lar dos Idosos Santo Antonio",
  qrUrl = "https://www.facebook.com/asiloivaipora/?locale=pt_BR",
}) => {
  const QrRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const QRCode = new QRCodeStyling({
      width: 300,
      height: 300,
      type: "svg",
      data: qrUrl,
      dotsOptions: {
        color: "#272343",
        type: "rounded",
      },
      image: imgUrl,
      imageOptions: {
        margin: 2,
        crossOrigin: "anonymous",
      },
      backgroundOptions: {
        round: 0.05,
      },
    });
    if (QrRef.current) {
      QrRef.current.innerHTML = "";
      QRCode.append(QrRef.current);
    }
  }, [qrUrl, imgUrl]);
  return <div title={`QR Code do ${title}`} ref={QrRef} />;
};

export default QrCode;
