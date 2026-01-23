import React from 'react'

function FeeStructureTable() {
  return (
    <div className="max-w-[1200px] mx-auto p-[40px_20px] text-center max-[768px]:p-[20px_10px]">
      <h2 className="text-[2.5rem] text-[#8B0000] mb-5 max-[768px]:text-[2rem]">Fee Structure for Sargodha Medical College</h2>
      <p className="text-[1.1rem] text-[#666] mb-[30px] leading-[1.6]">
        Below is the detailed fee structure for various programs offered at SMC.
        All fees are in Pakistani Rupees (PKR) and are subject to change.
      </p>

      <table className="w-full border-collapse m-0 mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-white max-[768px]:block">
        <thead className="max-[768px]:hidden">
          <tr>
            <th className="p-[15px] border border-[#ddd] bg-[#8B0000] text-white font-semibold uppercase tracking-[0.5px]">Fee Category</th>
            <th className="p-[15px] border border-[#ddd] bg-[#8B0000] text-white font-semibold uppercase tracking-[0.5px]">Program</th>
            <th className="p-[15px] border border-[#ddd] bg-[#8B0000] text-white font-semibold uppercase tracking-[0.5px]">Amount (PKR)</th>
            <th className="p-[15px] border border-[#ddd] bg-[#8B0000] text-white font-semibold uppercase tracking-[0.5px]">Frequency</th>
          </tr>
        </thead>
        <tbody className="max-[768px]:block">
          {/* Admission / Registration Fee */}
          <tr className="bg-[#fff5f5] font-semibold max-[768px]:block max-[768px]:mb-[15px] max-[768px]:border max-[768px]:border-[#ddd] max-[768px]:rounded-lg max-[768px]:p-2.5 max-[768px]:bg-white max-[768px]:shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Fee_Category'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" rowSpan="2" data-label="Fee Category">Admission / Registration Fee</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Program'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Program">DPT</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Amount_(PKR)'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Amount (PKR)">20,000</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Frequency'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Frequency">Once</td>
          </tr>
          <tr className="max-[768px]:block max-[768px]:mb-[15px] max-[768px]:border max-[768px]:border-[#ddd] max-[768px]:rounded-lg max-[768px]:p-2.5 max-[768px]:bg-white max-[768px]:shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Program'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Program">BS Programs</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Amount_(PKR)'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Amount (PKR)">20,000</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Frequency'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Frequency">Once</td>
          </tr>

          {/* Security Fee */}
          <tr className="even:bg-[#f9f9f9] hover:bg-[#f1f1f1] max-[768px]:block max-[768px]:mb-[15px] max-[768px]:border max-[768px]:border-[#ddd] max-[768px]:rounded-lg max-[768px]:p-2.5 max-[768px]:bg-white max-[768px]:shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Fee_Category'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Fee Category">Security Fee</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Program'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Program">-</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Amount_(PKR)'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Amount (PKR)">5,000</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Frequency'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Frequency">Refundable</td>
          </tr>

          {/* Tuition Fee */}
          <tr className="bg-[#fff5f5] font-semibold max-[768px]:block max-[768px]:mb-[15px] max-[768px]:border max-[768px]:border-[#ddd] max-[768px]:rounded-lg max-[768px]:p-2.5 max-[768px]:bg-white max-[768px]:shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Fee_Category'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" rowSpan="5" data-label="Fee Category">Tuition Fee</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Program'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Program">DPT</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Amount_(PKR)'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Amount (PKR)">65,000</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Frequency'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Frequency">Per Semester</td>
          </tr>
          <tr className="max-[768px]:block max-[768px]:mb-[15px] max-[768px]:border max-[768px]:border-[#ddd] max-[768px]:rounded-lg max-[768px]:p-2.5 max-[768px]:bg-white max-[768px]:shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Program'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Program">BS-MLT</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Amount_(PKR)'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Amount (PKR)">30,000</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Frequency'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Frequency">Per Semester</td>
          </tr>
          {/* ... other rows following the same pattern ... */}
          <tr className="max-[768px]:block max-[768px]:mb-[15px] max-[768px]:border max-[768px]:border-[#ddd] max-[768px]:rounded-lg max-[768px]:p-2.5 max-[768px]:bg-white max-[768px]:shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Program'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Program">BS-RIT</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Amount_(PKR)'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Amount (PKR)">30,000</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Frequency'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Frequency">Per Semester</td>
          </tr>
          <tr className="max-[768px]:block max-[768px]:mb-[15px] max-[768px]:border max-[768px]:border-[#ddd] max-[768px]:rounded-lg max-[768px]:p-2.5 max-[768px]:bg-white max-[768px]:shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Program'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Program">BS-HND</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Amount_(PKR)'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Amount (PKR)">30,000</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Frequency'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Frequency">Per Semester</td>
          </tr>
          <tr className="max-[768px]:block max-[768px]:mb-[15px] max-[768px]:border max-[768px]:border-[#ddd] max-[768px]:rounded-lg max-[768px]:p-2.5 max-[768px]:bg-white max-[768px]:shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Program'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Program">BS-Biochemistry</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Amount_(PKR)'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Amount (PKR)">25,000</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Frequency'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Frequency">Per Semester</td>
          </tr>

          {/* Enrollment Fee */}
          <tr className="even:bg-[#f9f9f9] hover:bg-[#f1f1f1] max-[768px]:block max-[768px]:mb-[15px] max-[768px]:border max-[768px]:border-[#ddd] max-[768px]:rounded-lg max-[768px]:p-2.5 max-[768px]:bg-white max-[768px]:shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Fee_Category'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Fee Category">Enrollment Fee</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Program'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Program">-</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Amount_(PKR)'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Amount (PKR)">2,000</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Frequency'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Frequency">Per Semester</td>
          </tr>

          {/* Examination Fee */}
          <tr className="even:bg-[#f9f9f9] hover:bg-[#f1f1f1] max-[768px]:block max-[768px]:mb-[15px] max-[768px]:border max-[768px]:border-[#ddd] max-[768px]:rounded-lg max-[768px]:p-2.5 max-[768px]:bg-white max-[768px]:shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Fee_Category'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Fee Category">Examination Fee</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Program'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Program">-</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Amount_(PKR)'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Amount (PKR)">6,500</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Frequency'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Frequency">Per Semester</td>
          </tr>

          {/* Sports Fund */}
          <tr className="even:bg-[#f9f9f9] hover:bg-[#f1f1f1] max-[768px]:block max-[768px]:mb-[15px] max-[768px]:border max-[768px]:border-[#ddd] max-[768px]:rounded-lg max-[768px]:p-2.5 max-[768px]:bg-white max-[768px]:shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Fee_Category'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Fee Category">Sports Fund</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Program'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Program">-</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Amount_(PKR)'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Amount (PKR)">1,000</td>
            <td className="p-[15px] border border-[#ddd] text-[#333] max-[768px]:block max-[768px]:w-full max-[768px]:text-left max-[768px]:p-[8px_10px] max-[768px]:border-none max-[768px]:text-[0.95rem] max-[768px]:relative max-[768px]:before:content-['Frequency'] max-[768px]:before:font-bold max-[768px]:before:text-[#8B0000] max-[768px]:before:block max-[768px]:before:mb-[5px]" data-label="Frequency">Per Semester</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-[30px] font-bold text-[#8B0000]">
        <strong>Note:</strong> Additional fees may apply for special courses,
        workshops, or extracurricular activities. For the latest fee structure,
        please contact the admissions office.
      </p>
    </div>
  )
}

export default FeeStructureTable
