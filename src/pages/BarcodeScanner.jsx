import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const BarcodeScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5Qrcode(scannerRef.current.id);
    scanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      (decodedText) => setScanResult(decodedText),
      (err) => console.error(err)
    );

    return () => scanner.stop();
  }, []);

  return (
    <div>
      <div
        id="reader"
        ref={scannerRef}
        style={{ width: "300px", height: "300px" }}
      ></div>

      {/* Icons */}
      <div style={{ marginTop: "20px" }}>
        <a href="/home">
          <HomeIcon className="h-6 w-6 text-blue-500" />
        </a>
        <a href="/back">
          <ArrowUturnLeftIcon className="h-6 w-6 text-red-500 ml-4" />
        </a>
      </div>

      {scanResult && <p>Scanned result: {scanResult}</p>}
    </div>
  );
};

export default BarcodeScanner;
