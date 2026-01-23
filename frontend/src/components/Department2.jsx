import React, { useState } from "react";

function Department2() {
  const [openSemester, setOpenSemester] = useState(null);

  const toggleSemester = (id) => {
    setOpenSemester(openSemester === id ? null : id);
  };

  const programs = [
    {
      id: "mlt",
      name: "BS MLT Medical Laboratory Technology",
      semesters: [
        {
          id: "mlt-s1",
          title: "Semester 1",
          lines: [
            "Basic & Applied Anatomy 4(3-1)",
            "Basic & Applied Physiology 4(3-1)",
            "Social Psychology 3(3-0)",
            "English for Academic Purpose 3(3-0)",
            "Islamic Studies/ Ethics 2(2-0)",
          ],
        },
        {
          id: "mlt-s2",
          title: "Semester 2",
          lines: [
            "General Pathology 4(3-1)",
            "Introductory Pharmacology 2(2-0)",
            "Introductory Biochemistry 4(3-1)",
            "Introduction to computing Application 3(3-0)",
            "Pakistan Studies 2(2-0)",
          ],
        },
        {
          id: "mlt-s3",
          title: "Semester 3",
          lines: [
            "Community Medicine/ Public Health 3(2-1)",
            "General Microbiology & Sterilization 3(2-1)",
            "General Hematology 4(3-1)",
            "Clinical Pathology 3(2-1)",
            "Clinical Lab Practice I 3(0-3)",
          ],
        },
        {
          id: "mlt-s4",
          title: "Semester 4",
          lines: [
            "Scientific Writing 2(2-0)",
            "Clinical Biochemistry (I & II) 4(3-1)",
            "Immunology & Serology 4(3-1)",
            "Histopathology & Histotechnology 4(3-1)",
            "Clinical Lab Practice II 3(0-3",
          ],
        },
        {
          id: "mlt-s5",
          title: "Semester 5",
          lines: [
            "Clinical Parasitology 3(2-1)",
            "Immunohematology & Transfusion Medicine 3(2-1)",
            "Clinical Bacteriology 4(3-1)",
            "Bio-safety and Hazards 2(2-0)",
            "Medical Instrumentations & software Applications 3(3-0)",
            "Clinical Lab Practice III 3(0-3)",
          ],
        },
        {
          id: "mlt-s6",
          title: "Semester 6",
          lines: [
            "Cytology & Cytotechnology 3(2-1)",
            "Molecular Biology 3(2-1)",
            "Clinical Virology & Mycology 3(2-1)",
            "Advanced Hematology 3(2-1)",
            "Advanced Immunology 3(2-1)",
            "Clinical Lab Practice IV 3(0-3)",
          ],
        },
        {
          id: "mlt-s7",
          title: "Semester 7",
          lines: [
            "Epidemiology 3(3-0)",
            "Bioinformatics I 3(2-1)",
            "Endocrinology 3(2-1)",
            "Clinical Laboratory Management 3(3-0)",
            "Research Project / Term Paper 3(0-3)",
          ],
        },
        {
          id: "mlt-s8",
          title: "Semester 8",
          lines: [
            "Forensic Medicine 3(3-0)",
            "Biostatistics 3(3-0)",
            "Advanced Clinical Biochemistry 4(3-1)",
            "Advanced Microbiology OR",
            "Advanced Molecular Biology OR",
            "Advanced Diagnostic & Biomedical Techniques 3(2-1)",
            "Quality Assurance Management 2(2-0)",
            "Clinical Genetics 3(2-1)",
          ],
        },
      ],
    },

    {
      id: "rit",
      name: "BS Radiography and Imaging Technology",
      semesters: [
        {
          id: "rit-s1",
          title: "Semester 1",
          lines: [
            "Basic & Applied Anatomy 4(3-1)",
            "Basic & Applied Physiology 4(3-1)",
            "Social Psychology 3(3-0)",
            "English for Academic Purpose 3(3-0)",
            "Islamic Studies/ Ethics 2(2-0)",
          ],
        },
        {
          id: "rit-s2",
          title: "Semester 2",
          lines: [
            "General Pathology 4(3-1)",
            "Introductory Pharmacology 2(2-0)",
            "Introductory Biochemistry 4(3-1)",
            "Introduction to computing Application 3(3-0)",
            "Pakistan Studies 2(2-0)",
            "Fundamentals of Radiography & Imaging Technology 2(2-0)",
          ],
        },
        {
          id: "rit-s3",
          title: "Semester 3",
          lines: [
            "Community Medicine/ Public Health 3(2-1)",
            "General Microbiology & Sterilization 3(2-1)",
            "Regional & Imaging Anatomy I 4(3-1)",
            "Radiation Science & Technology I 4(3-1)",
            "Medicine I 3(2-1)",
          ],
        },
        {
          id: "rit-s4",
          title: "Semester 4",
          lines: [
            "Scientific Writing 2(2-0)",
            "General Radiology 4(3-1)",
            "Medicine II 4(3-1)",
            "Radiation Science & Technology II 4(3-1)",
            "Neuro anatomy 4(3-1)",
          ],
        },
        {
          id: "rit-s5",
          title: "Semester 5",
          lines: [
            "Clinical Pharmacology 4(3-1)",
            "CT SCAN 4(3-1)",
            "Regional & Imaging Anatomy II 4(3-1)",
            "Mammography 3(2-1)",
            "Diagnostic Imaging Skills 2(0-2)",
          ],
        },
        {
          id: "rit-s6",
          title: "Semester 6",
          lines: [
            "Surgery I 4(3-1)",
            "Nuclear Medicine I 4(3-1)",
            "Special Radiological Techniques 3(2-1)",
            "Ultrasound/Doppler 4(3-1)",
            "Fluoroscopy 2(0-2)",
          ],
        },
        {
          id: "rit-s7",
          title: "Semester 7",
          lines: [
            "Forensic Medicine 3(3-0)",
            "Biostatistics 3(3-0)",
            "MRI-I 4(3-1)",
            "Angiography & Cardiac Imaging I 4(3-1)",
            "Echocardiography 3(2-1)",
          ],
        },
        {
          id: "rit-s8",
          title: "Semester 8",
          lines: [
            "Angiography & Cardiac Imaging II 3(2-1)",
            "Nuclear Medicine II 3(2-1)",
            "MRI-II 3(2-1)",
            "Surgery II 3(2-1)",
            "Research Project/Term Paper 3(0-3)",
          ],
        },
      ],
    },

    {
      id: "ott",
      name: "BS Operation Theater Technology",
      semesters: [
        {
          id: "ott-s1",
          title: "Semester 1",
          lines: [
            "Basic & Applied Anatomy 4(3-1)",
            "Basic & Applied Physiology 4(3-1)",
            "Social Psychology 3(3-0)",
            "English for Academic Purpose 3(3-0)",
            "Islamic Studies/ Ethics 2(2-0)",
          ],
        },
        {
          id: "ott-s2",
          title: "Semester 2",
          lines: [
            "General Pathology 4(3-1)",
            "Introductory Pharmacology 2(2-0)",
            "Introductory Biochemistry 4(3-1)",
            "Introduction to computing Application 3(3-0)",
            "Pakistan Studies 2(2-0)",
            "Fundamentals of Operation Technology 2(2-0)",
          ],
        },
        {
          id: "ott-s3",
          title: "Semester 3",
          lines: [
            "Community Medicine/ Public Health 3(2-1)",
            "General Microbiology & Sterilization 3(2-1)",
            "Basic of General Surgery 4(3-1)",
            "Operation Theatre Instruments & Techniques I 3(2-1)",
            "Surgical Pharmacology I 3(2-1)",
            "Operating Room Skills I 2(0-2)",
          ],
        },
        {
          id: "ott-s4",
          title: "Semester 4",
          lines: [
            "Scientific Writing 2(2-0)",
            "Surgical Procedures & Skills I 4(3-1)",
            "Basic Anesthesia & Techniques 3(2-1)",
            "Surgical Pharmacology II 3(2-1)",
            "Operation Theatre Instruments & Techniques II 3(2-1)",
            "Operating Room Skill II 2(0-2)",
          ],
        },
        {
          id: "ott-s5",
          title: "Semester 5",
          lines: [
            "Surgical Anatomy I 4(3-1)",
            "Clinical Pathology 3(2-1)",
            "Medical Physics 4(3-1)",
            "Operation Theater Technology I 4(3-1)",
            "Operating Room Skills III 2(0-2)",
          ],
        },
        {
          id: "ott-s6",
          title: "Semester 6",
          lines: [
            "Operation Theater Technology II 4(3-1)",
            "Sterilization and Disinfection 4(3-1)",
            "Surgical Anatomy II 3(2-1)",
            "Advanced Diagnostic Techniques 4(3-1)",
            "Critical Care 3(3-0)",
          ],
        },
        {
          id: "ott-s7",
          title: "Semester 7",
          lines: [
            "Forensic Medicine 3(3-0)",
            "Biostatistics 3(3-0)",
            "Operation Theater Management 3(2-1)",
            "Clinical & Applied Microbiology 3(2-1)",
            "Surgical Procedure & Skills II 3(2-1)",
            "Advanced Anesthesia & Techniques 3(2-1)",
          ],
        },
        {
          id: "ott-s8",
          title: "Semester 8",
          lines: [
            "Epidemiology 3(2-1)",
            "Bioinformatics I 3(2-1)",
            "Biomaterials & Surgical Implants 3(2-1)",
            "Operation Theater Design & Re-construction 3(2-1)",
            "Research Project 3(0-3)",
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-[90%] max-w-[1100px] mx-auto font-['Poppins',_Arial,_sans-serif] text-[#333] p-[40px_20px] rounded-[15px] relative -bottom-[30px] shadow-[0_6px_18px_rgba(0,0,0,0.4)] bg-white animate-fadeUp">
      <h2 className="text-[1.8rem] font-bold text-[#8B0000] mt-[30px] mb-[15px] border-l-[5px] border-[#8B0000] pl-[12px] animate-slideInLeft">
        Department of Allied Health Sciences
      </h2>

      <h3 className="text-[1.3rem] font-semibold text-[#222] mt-[20px] mb-[10px]">PROGRAMS</h3>
      <ul className="list-none p-0 m-[0_0_20px_20px] font-semibold text-[#8B0000]">
        <li>1. BS-MLT (Medical Laboratory Technology)</li>
        <li>2. BS-RIT (Radiography and Imaging Technology)</li>
        <li>3. BS-OTT (Operation Theater Technology)</li>
      </ul>

      <h3 className="text-[1.3rem] font-semibold text-[#222] mt-[20px] mb-[10px]">INTRODUCTION</h3>
      <p className="text-[1rem] leading-[1.7] mb-[30px] text-[#444] text-justify animate-fadeInUp">
        Department of Allied Health Sciences Offered 4-Year degree programs in the field of Medical Laboratory Technology (MLT), Radiography and Imaging Technology (RIT) and Operation Theatre Technology (OTT). The Department of Allied Health Sciences continues to maintain and cultivate its links with the hospitals and health care settings within the country. Our vision is to provide the advancement in Medical Sciences through provision of skillful, ethical, and compassionate Allied health Professionals. The College is committed to produce the leading allied health experts dedicated to provide the best health care services for the patient and able to focus on highly quality research that extends beyond allied health sciences to all scientific disciplines that impact the health of patients as well as wider community.
      </p>
      <div className="flex flex-row flex-wrap gap-[80px] justify-center items-center mt-[40px]">
        {programs.map((prog) => (
          <section key={prog.id} className="w-[100%] max-w-[500px] mb-[18px]">
            <h2 className="text-[1.25rem] font-black text-[#191b1d] mb-[14px] border-b-2 border-[#8B0000] pb-1">{prog.name}</h2>

            {prog.semesters.map((sem) => (
              <div key={sem.id} className="mb-[6px]">
                <button
                  className="w-full text-left p-[12px_18px] bg-[#8B0000] text-white text-[1rem] font-semibold rounded-[8px] cursor-pointer flex justify-between items-center transition-all duration-300 hover:bg-[#002244]"
                  onClick={() => toggleSemester(`${prog.id}-${sem.id}`)}
                >
                  {sem.title}
                  <span>
                    {openSemester === `${prog.id}-${sem.id}` ? "▲" : "▼"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 bg-[#f9f9f9] rounded-[8px] mt-[6px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)] ${openSemester === `${prog.id}-${sem.id}` ? "max-h-[1000px] p-3 animate-fadeUp" : "max-h-0"
                    }`}
                >
                  <table className="w-full border-collapse">
                    <tbody>
                      {sem.lines.map((line, idx) => (
                        <tr key={idx} className="hover:bg-[#f1f7ff] transition-colors">
                          <td className="p-[10px_14px] border-b border-[#ddd] text-[0.95rem] text-[#333]">{line}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Department2;
