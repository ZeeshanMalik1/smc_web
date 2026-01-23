import React, { useState } from "react";

function ActualAdmissionInfo() {
  const [activeTab, setActiveTab] = useState("policy");

  return (
    <div className="flex justify-center py-10 px-5 bg-[#f9f9f9] relative font-['Segoe_UI',sans-serif] min-h-screen">
      <div className="bg-white rounded-[14px] p-[20px] sm:p-[30px] max-w-[950px] w-full shadow-[0_8px_25px_rgba(0,0,0,0.1)]">

        {/* Tabs */}
        <ul className="flex justify-center mb-[25px] border-b-2 border-[#eee] pb-2 gap-[15px] flex-wrap list-none">
          <li className="list-none">
            <button
              className={`bg-transparent border-none text-[0.85rem] sm:text-[0.9rem] md:text-base font-semibold py-2 px-3.5 sm:py-3 sm:px-6 rounded-lg cursor-pointer relative transition-all duration-[350ms] ease-in-out 
                ${activeTab === "policy"
                  ? "bg-[#8B0000]! text-white shadow-[0_6px_14px_rgba(139,0,0,0.35)] scale-105"
                  : "text-[#333] hover:text-[#8B0000] hover:-translate-y-[2px] "
                }`}
              onClick={() => setActiveTab("policy")}
            >
              General Policy
            </button>
          </li>
          <li className="list-none">
            <button
              className={`bg-transparent border-none text-[0.85rem] sm:text-[0.9rem] md:text-base font-semibold py-2 px-3.5 sm:py-3 sm:px-6 rounded-lg cursor-pointer relative transition-all duration-[350ms] ease-in-out 
                ${activeTab === "eligibility"
                  ? "bg-[#8B0000] text-white shadow-[0_6px_14px_rgba(139,0,0,0.35)] scale-105"
                  : "text-[#333] hover:text-[#8B0000] hover:-translate-y-[2px]"
                }`}
              onClick={() => setActiveTab("eligibility")}
            >
              Eligibility Criteria
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="mt-5 animate-fadeIn">
          {activeTab === "policy" && (
            <div className="animate-slideUp">
              <h2 className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem] font-bold text-[#333] mb-[25px] pl-[18px] border-l-[6px] border-[#8B0000] leading-[1.4]">
                General Policy (According to the Affiliated University)
              </h2>
              <ul className="my-2.5 mx-0 mb-5 ml-[25px] list-disc">
                <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Admission will be notified in the major Urdu / English newspapers.</li>
                <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Admission forms are available with/without prospectus from the institute or downloadable from the website.</li>
                <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Application form may be filled and submitted online.</li>
                <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Selection of candidates will be on the basis of merit.</li>
                <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Academic session will be commencing according to the Sargodha Medical College.</li>
              </ul>

              <h3 className="mt-5 text-[1.1rem] sm:text-[1.25rem] font-bold text-[#8B0000] relative before:content-['▸'] before:text-[#8B0000] before:mr-2 before:text-base">
                Instructions for Admission
              </h3>
              <ul className="my-2.5 mx-0 mb-5 ml-[25px] list-disc">
                <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Each candidate has to submit the application on the prescribed form.</li>
                <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Separate application is required for each category.</li>
                <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">
                  The application should be duly filled in by the candidate in his/her own handwriting in BLOCK letters with black ink or ballpoint.
                  Fill all the columns and write "Not Applicable" if a column is irrelevant.
                </li>
                <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">
                  O/A level candidates should mention equivalent marks obtained and maximum marks in the admission form awarded by the Inter Boards Committee, Islamabad.
                </li>
                <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">
                  If a candidate is admitted on the basis of false statements, he/she will be expelled from the Institute
                  and all fee and other dues paid shall be forfeited. Further departmental or legal action may be taken.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "eligibility" && (
            <div className="animate-slideUp">
              <h2 className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem] font-bold text-[#333] mb-[25px] pl-[18px] border-l-[6px] border-[#8B0000] leading-[1.4]">
                Eligibility Criteria
              </h2>

              {/* Eligibility Table */}
              <div className="overflow-x-auto mt-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <table className="w-full border-collapse bg-white text-left">
                  <thead className="hidden md:table-header-group bg-gradient-to-r from-[#8B0000] to-[#660000] text-white">
                    <tr>
                      <th className="p-[14px_18px] text-[15px] tracking-[0.5px] uppercase">Department</th>
                      <th className="p-[14px_18px] text-[15px] tracking-[0.5px] uppercase">Course</th>
                      <th className="p-[14px_18px] text-[15px] tracking-[0.5px] uppercase">Marks %</th>
                      <th className="p-[14px_18px] text-[15px] tracking-[0.5px] uppercase">Qualification</th>
                    </tr>
                  </thead>
                  <tbody className="block md:table-row-group">
                    {[
                      { dept: "Physiotherapy", course: "DPT (Doctor of Physical Therapy)", marks: "60% (660)", qual: "F.Sc. Pre-medical or equivalent" },
                      { dept: "Allied Health Sciences", course: "BS-MLT (Medical Laboratory Technology)", marks: "60% (660)", qual: "F.Sc. Pre-medical or equivalent" },
                      { dept: "Allied Health Sciences", course: "BS-RIT (Radiography & Imaging Technology)", marks: "60% (660)", qual: "F.Sc. Pre-medical or equivalent" },
                      { dept: "Allied Health Sciences", course: "BS-OTT (Operation Theater Technology)", marks: "60% (660)", qual: "F.Sc. Pre-medical or equivalent" },
                      { dept: "Food & Nutrition", course: "BS-HND (Human Nutrition & Dietetics)", marks: "45% (495)", qual: "F.Sc. Pre-medical or equivalent" },
                      { dept: "Applied Sciences", course: "BS-Biochemistry", marks: "45% (495)", qual: "F.Sc. Pre-medical or equivalent" }
                    ].map((row, idx) => (
                      <tr key={idx} className="block md:table-row bg-white md:odd:bg-[#fff5f5] mb-[15px] md:mb-0 rounded-[10px] md:rounded-none shadow-[0_4px_10px_rgba(0,0,0,0.08)] md:shadow-none overflow-hidden hover:bg-[#ffebeb] transition-colors duration-200">
                        <td data-label="Department" className="p-[12px_16px] md:p-[14px_18px] text-sm md:border-b md:border-[#eee] flex justify-between md:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#8B0000] before:basis-[45%] before:text-left before:md:hidden">
                          {row.dept}
                        </td>
                        <td data-label="Course" className="p-[12px_16px] md:p-[14px_18px] text-sm md:border-b md:border-[#eee] flex justify-between md:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#8B0000] before:basis-[45%] before:text-left before:md:hidden">
                          {row.course}
                        </td>
                        <td data-label="Marks %" className="p-[12px_16px] md:p-[14px_18px] text-sm md:border-b md:border-[#eee] flex justify-between md:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#8B0000] before:basis-[45%] before:text-left before:md:hidden">
                          {row.marks}
                        </td>
                        <td data-label="Qualification" className="p-[12px_16px] md:p-[14px_18px] text-sm md:border-b md:border-[#eee] flex justify-between md:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#8B0000] before:basis-[45%] before:text-left before:md:hidden">
                          {row.qual}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Additional Eligibility Info */}
              <div className="mt-8">
                <h3 className="mt-5 text-[1.1rem] sm:text-[1.25rem] font-bold text-[#8B0000] relative before:content-['▸'] before:text-[#8B0000] before:mr-2 before:text-base">
                  Additional Criteria
                </h3>
                <ul className="my-2.5 mx-0 mb-5 ml-[25px] list-disc">
                  <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">
                    <strong>Age:</strong> Maximum 22 years of age on closing date
                    (extendable up to 24 years with Director/Principal’s permission and up to 27 years by Vice Chancellor GCUF).
                    Or according to the affiliated University.
                  </li>
                  <li className="mb-2.5 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">
                    <strong>Domicile:</strong> Candidates from whole Punjab can apply for open merit only.
                  </li>
                </ul>

                <h4 className="text-lg font-bold text-[#8B0000] mt-4">Requirements</h4>
                <p className="text-[#444] my-2">The following attested copies should be attached with the application form:</p>
                <ul className="my-2.5 mx-0 mb-5 ml-[25px] list-disc">
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Four Passport size Photographs</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Two attested copies of Matriculation Certificate (or equivalent)</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Two attested copies of Intermediate Certificate (F.Sc. or equivalent)</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Two attested copies of CNIC / Form-B</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Two attested copies of Father's/Guardian's CNIC</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Two attested copies of Domicile Certificate</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Two copies of Character Certificate</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Equivalence Certificate from IBCC/HEC (for foreign Qualification)</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">
                    Two attested copies of Attempt Certificate (if the period between Matric and Intermediate is more than two sessions)
                  </li>
                </ul>

                <p className="text-[#444] my-4"><strong>Note:</strong> Required before the commencement of classes or on the day of selection interview:</p>
                <ul className="my-2.5 mx-0 mb-5 ml-[25px] list-disc">
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">All Original Documents</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">An affidavit on stamp paper of Rs.100/-</li>
                </ul>

                <h4 className="text-lg font-bold text-[#8B0000] mt-4">Final Selection</h4>
                <ul className="my-2.5 mx-0 mb-5 ml-[25px] list-disc">
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">For the final selection, candidates will be interviewed at SMC campus by the admission committee.</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Original documents will be kept with the institution till completion of degree.</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">All candidates selected at the final interview will be examined for medical fitness.</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">Candidates medically unfit or of unsatisfactory conduct shall not be eligible for admission.</li>
                  <li className="mb-2 text-[#444] leading-[1.6] transition-transform duration-300 hover:translate-x-[5px] hover:text-[#8B0000]">The Health Department Govt. of Punjab, Degree Awarding Body and SMC reserve full rights to amend the rules & regulations during the course of study.</li>
                </ul>

                <p className="text-[#444] my-4">
                  <strong>Note:</strong> SMC reserves the right to amend/change the admission policy in accordance with University/HEC/Govt. of Pakistan/Punjab at any time without prior notice.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="mt-[30px] text-[0.9rem] text-[#555] border-t border-dashed border-[#ccc] pt-[15px] text-center animate-fadeInSlow">
          <i className="fas fa-info-circle mr-2"></i>
          Disclaimer: Criteria are based on affiliated university guidelines. Always confirm with
          the official prospectus.
        </p>
      </div>
    </div>
  );
}

export default ActualAdmissionInfo;