import React, { useState } from "react";

const Index = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationFrequency, setDonationFrequency] = useState("once");
  // ... other state variables as needed

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-yellow-500 mb-8">
        Select your donation
      </h2>
      <div className="flex items-center mb-4">
        <label
          className={`mr-3 ${
            donationFrequency === "once"
              ? "bg-[#000080] text-white p-2 rounded-md"
              : ""
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
          className={`mr-4 ${
            donationFrequency === "monthly"
              ? "bg-[#000080] text-white p-2 rounded-md"
              : ""
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
      <div className="mb-4">{/* Options for donation amounts */}</div>
      <div className="mb-8">
        <input
          type="text"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="Other amount"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      </div>
      <div className="text-center mt-4">
        <a href="#" className="text-gray-700 no-underline">
          PAYMENT INFORMATION
        </a>
      </div>
    </div>
  );
};

export default Index;
