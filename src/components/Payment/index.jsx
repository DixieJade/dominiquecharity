import React, { useState } from "react";

const Index = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationFrequency, setDonationFrequency] = useState("once");

  return (
    <div className="mx-auto">
      <div className="shadow-lg bg-white w-96 px-3 py-4 flex flex-col items-center">
        <h2 className="text-2xl text-center font-semibold font-Lora mb-8">
          Select your donation
        </h2>
        <div className="flex items-center mb-4">
          <label
            className={` ${
              donationFrequency === "once"
                ? "bg-[#000080] text-white py-3 px-9 rounded-l-md text-xl font-recoleta"
                : "bg-gray-400 text-xl text-white py-3 px-9 rounded-l-md"
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
            className={` ${
              donationFrequency === "monthly"
                ? "bg-[#000080] text-white py-3 px-9 rounded-r-md text-xl font-recoleta"
                : "bg-gray-400 text-xl text-white py-3 px-9 rounded-r-md"
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
          <div className="mb-4 grid grid-cols-2 gap-x-3 gap-y-3">
            <p onClick={(e) => setDonationAmount(e.target.value)}>$60</p>
            <p onClick={(e) => setDonationAmount(e.target.value)}>$110</p>
            <p onClick={(e) => setDonationAmount(e.target.value)}>$150</p>
            <p onClick={(e) => setDonationAmount(e.target.value)}>$200</p>
            <p onClick={(e) => setDonationAmount(e.target.value)}>$500</p>
            <input
              type="text"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Other amount"
              className="border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
        )}
        {donationFrequency === "monthly" && (
          <div className="mb-4 grid grid-cols-2 gap-x-3 gap-y-2">
            <p
              onClick={(e) => setDonationAmount(e.target.value)}
              className={
                donationAmount
                  ? "text-lg font-recoleta bg-[#000080]"
                  : "text-lg font-recoleta bg-gray-400"
              }
            >
              $20 / month
            </p>
            <p onClick={(e) => setDonationAmount(e.target.value)}>
              $40 / month
            </p>
            <p onClick={(e) => setDonationAmount(e.target.value)}>
              $60 / month
            </p>
            <p onClick={(e) => setDonationAmount(e.target.value)}>
              $80 / month
            </p>
            <p onClick={(e) => setDonationAmount(e.target.value)}>
              $100 / month
            </p>
            <input
              type="text"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Other amount"
              className="border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
