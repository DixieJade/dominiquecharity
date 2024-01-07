import React, { useState } from "react";

const Index = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationFrequency, setDonationFrequency] = useState("once");
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };

  const handleInputClick = () => {
    setSelectedAmount(null);
  };

  return (
    <div className="mx-auto">
      <div className="shadow-lg bg-white w-[26rem] px-3 py-4 flex flex-col items-center">
        <div className="flex items-center mb-4">
          <label
            className={` ${
              donationFrequency === "once"
                ? "bg-[#000080] text-white py-3 px-12 rounded-l-md text-xl font-recoleta"
                : "bg-gray-400 text-xl text-white py-3 px-10 rounded-l-md"
            }`}
          >
            <input
              type="radio"
              name="donationFrequency"
              value="once"
              checked={donationFrequency === "once"}
              onChange={(e) => setDonationFrequency(e.target.value)}
              className="hidden"
            />
            Give once
          </label>
          <label
            className={`${
              donationFrequency === "monthly"
                ? "bg-[#000080] text-white py-3 px-10 rounded-r-md text-xl font-recoleta"
                : "bg-gray-400 text-xl text-white py-3 px-10 rounded-r-md"
            }`}
          >
            <input
              type="radio"
              name="donationFrequency"
              value="monthly"
              checked={donationFrequency === "monthly"}
              onChange={(e) => setDonationFrequency(e.target.value)}
              className="hidden"
            />
            Give monthly
          </label>
        </div>
        {donationFrequency === "once" && (
          <div className="mb-4 grid grid-cols-2 gap-x-3 gap-y-3 px-2">
            {[60, 110, 150, 200, 500].map((amount) => (
              <p
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`${
                  selectedAmount === amount
                    ? "text-lg font-recoleta bg-[#000080] text-white"
                    : "text-lg font-recoleta bg-gray-400 text-white"
                } px-4 py-2 cursor-pointer text-center`}
              >
                ${amount}
              </p>
            ))}
            <input
              type="text"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              onClick={handleInputClick}
              placeholder="Other amount"
              className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            />
          </div>
        )}
        {donationFrequency === "monthly" && (
          <div className="mb-4 grid grid-cols-2 gap-x-3 gap-y-2 px-2">
            {[20, 40, 60, 80, 100].map((amount) => (
              <p
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`${
                  selectedAmount === amount
                    ? "text-lg font-recoleta bg-[#000080] text-white"
                    : "text-lg font-recoleta bg-gray-400 text-white"
                } px-4 py-2 cursor-pointer text-center`}
              >
                ${amount} / month
              </p>
            ))}
            <input
              type="text"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              onClick={handleInputClick}
              placeholder="Other amount"
              className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
