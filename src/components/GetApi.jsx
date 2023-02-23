import React, { useEffect, useRef, useState } from "react";

const GetApi = () => {
  const [result, setResult] = useState({
    date: "",
    rate: "",
    result: "",
  });

  const [symbolList, setSymbolList] = useState([]);
  const [convertFrom, setConvertFrom] = useState("USD");
  const [convertTo, setConvertTo] = useState("KRW");
  const [amount, setAmount] = useState(1);

  const toRef = useRef();
  const fromRef = useRef();

  useEffect(() => {
    var currencyURL = `https://api.exchangerate.host/convert?from=${convertFrom}&to=${convertTo}&amount=${amount}`;

    var currencyReq = new XMLHttpRequest();

    currencyReq.open("GET", currencyURL);
    currencyReq.responseType = "json";
    currencyReq.send();

    currencyReq.onload = () => {
      var currencyRes = currencyReq.response;

      setResult({
        date: currencyRes.date,
        rate: currencyRes.info.rate,
        result: currencyRes.result,
      });
    };
  }, [amount, convertFrom, convertTo]);

  useEffect(() => {
    var symbolsURL = "https://api.exchangerate.host/symbols";
    var symbolsReq = new XMLHttpRequest();

    symbolsReq.open("GET", symbolsURL);
    symbolsReq.responseType = "json";
    symbolsReq.send();

    symbolsReq.onload = function () {
      var symbolsRes = symbolsReq.response;

      setSymbolList(Object.values(symbolsRes.symbols));
    };
  }, []);

  return (
    <div className="selection:bg-sky-200 justify-center">
      <div className="mx-5 mt-5 text-xl">
        <div className="mb-10">
          <p className="relative text-left font-bold text-gray-400">
            {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            {convertFrom}
            &nbsp;=
          </p>

          <p className="text-left text-4xl font-bold my-5 hover:text-sky-500 transition-all duration-300 ease-in-out">
            {(Math.round(result.result * 100) / 100)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            &nbsp;{convertTo}
          </p>

          <p className="text-left font-bold text-gray-400 animate-pulse">
            {result.date} 기준
          </p>
        </div>

        <div className="mb-8">
          <p className="font-bold pb-3">입력값</p>

          <input
            type="number"
            defaultValue="1"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className="border-2 rounded-md inputClass"
          />

          <select
            ref={fromRef}
            onClick={() => setConvertFrom(fromRef.current.value)}
            defaultValue="USD"
            className="border-2 rounded-md mr-5 py-1 inputClass"
          >
            <option value="USD">United States Dollar</option>
            {symbolList.map((items) => (
              <option value={items.code}>{items.description}</option>
            ))}
          </select>
        </div>

        <div>
          <p className="font-bold pb-3">결과값</p>

          <input
            type="text"
            value={(Math.round(result.result * 100) / 100)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            readOnly
            className="border-2 rounded-md cursor-not-allowed inputClass"
          />
          <select
            ref={toRef}
            defaultValue="KRW"
            onClick={() => setConvertTo(toRef.current.value)}
            className="border-2 rounded-md mr-5 py-1 inputClass"
          >
            <option value="KRW">South Korean Won</option>
            {symbolList.map((items) => (
              <option value={items.code}>{items.description}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default GetApi;
