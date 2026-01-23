import React, { useState } from "react";

function Department4() {
  const [openSemester, setOpenSemester] = useState(null);

  const toggleSemester = (id) => {
    setOpenSemester(openSemester === id ? null : id);
  };

  const semesters = [
    {
      id: 1,
      title: "Semester 1",
      courses: [
        "Introductory Biochemistry 4(3-1)",
        "Functional English 3(3-0)",
        "Islamic Studies/ Ethics 2(2-0)",
        "Mathematics-l 3(3-0)",
        "Fundamentals of Inorganic Chemistry 3(2-1)",
        "Introduction to Sociology 3(3-0)",
      ],
    },
    {
      id: 2,
      title: "Semester 2",
      courses: [
        "Biochemistry of Carbohydrates 4(3-1)",
        "Biophysics 3(3-0)",
        "English Comprehension and Composition 3(3-0)",
        "Pakistan Studies 2(2-0)",
        "Introduction to Statistical Theory 3(3-0)",
        "Introduction to Psychology 3(3-0)",
      ],
    },
    {
      id: 3,
      title: "Semester 3",
      courses: [
        "Cell Biology 3(2-1)",
        "Genetics 3(3-0)",
        "Communication Skills 3(3-0)",
        "Introduction to Computing Applications 3(3-0)",
        "Fundamentals of Organic Chemistry 3(2-1)",
      ],
    },
    {
      id: 4,
      title: "Semester 4",
      courses: [
        "Human Physiology 3(3-0)",
        "Biochemistry of Lipids 4(3-1)",
        "Molecular Biology 3(3-0)",
        "Fundamental of Physical Chemistry 3(2-1)",
        "General Microbiology-I 3(2-1)",
      ],
    },
    {
      id: 5,
      title: "Semester 5",
      courses: [
        "Amino Acids and Proteins 4(3-1)",
        "Enzymology 3(2-1)",
        "Biosafety & Ethics 2(2-0)",
        "Biochemical Techniques 3(2-1)",
        "Plant Biochemistry 3(2-1)",
      ],
    },
    {
      id: 6,
      title: "Semester 6",
      courses: [
        "Nutritional Biochemistry 3(2-1)",
        "Biochemistry of Nucleic Acid 3(3-0)",
        "Proteomics (Elective I) 3(2-1)",
        "Biomembranes & Cell Signaling 3(3-0)",
        "Bioenergetics 2(2-0)",
        "Industrial Biochemistry 3(2-1)",
      ],
    },
    {
      id: 7,
      title: "Semester 7",
      courses: [
        "Biological Metabolism 4(4-0)",
        "Bioinformatics-I 3(2-1)",
        "Genomics (Elective II) 3(3-0)",
        "Fermentation Biotechnology (Elective III) 3(3-0)",
        "Current Trends in Biochemistry 3(3-0)",
      ],
    },
    {
      id: 8,
      title: "Semester 8",
      courses: [
        "Biotechnology 3(3-0)",
        "Immunochemistry 3(2-1)",
        "Antimicrobials & Chemotherapy (Elective IV) 3(3-0)",
        "Research Planning & Report Writing 3(3-0)",
        "Seminar (Research) 1(0-1)",
        "Research Project/Review Article/Internship 3(0-3)",
      ],
    },
  ];

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto font-['Poppins',_Arial,_sans-serif] text-[#333] p-[32px] rounded-[14px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] my-[30px] animate-fadeUp md:w-full md:p-[20px]">
      <h2 className="text-[1.9rem] font-bold text-[#8B0000] mb-[14px] border-l-[6px] border-[#8B0000] pl-[12px] animate-slideInLeft md:text-[1.6rem]">
        Department of Applied Sciences
      </h2>

      <h3 className="text-[1.2rem] font-semibold text-[#222] mt-[18px] mb-[8px]">BS-Biochemistry</h3>
      <h4 className="text-[1.2rem] font-semibold text-[#222] mt-[18px] mb-[8px]">INTRODUCTION</h4>
      <p className="text-[1rem] leading-[1.7] text-[#444] mb-[22px] text-justify animate-fadeInUp">
        Biochemistry is the science concerned with the chemical basis of life. Biochemistry incorporates everything in size between a molecule and a cell and all the interactions between them. The aim of biochemists is to describe in molecular terms the structures, mechanisms and chemical processes shared by all organisms, providing organizing principles that underlie life in all its diverse forms. So a biochemist would study about these molecules namely carbohydrates, lipids, proteins and nucleic acids. Biochemist also studies their reactions and what affects them and in what ways. Biochemistry is thus a study of the compounds found inside living beings, the processes involved with the focus on the role, function and structure of these molecules.
      </p>
      <p className="text-[1rem] leading-[1.7] text-[#444] mb-[22px] text-justify animate-fadeInUp">
        Biochemistry now encompasses all of the molecular and cellular life sciences. Scientific topics falling under the broad description of biochemistry include genetics, immunology, virology, developmental biology, neuro biology, cell biology and structural biology. A recent milestone in biochemistry was the completion of the Human Genome Project and stem cell therapy. There has never been a better time to study biochemistry. With the introduction of newer methods in science and technology, the scope in biochemistry is much greater than before. In fact, biochemistry is one course that is selected by most of today‟s students. This is because of the challenging nature of the course and the lucrative jobs that can be got after the completion of studies in this field.
      </p>
      <p className="text-[1rem] leading-[1.7] text-[#444] mb-[22px] text-justify animate-fadeInUp">
        There are quite a few fields where Biochemists can find employment. These include: Biotechnology, Chemical manufacturing companies, Food and Drink (includes brewing), Health and Beauty Care, Medical Instrument companies, Research Companies and Laboratories Public Sectors, Agriculture and fisheries, Blood Service, Cancer research institutes, Environmental Pollution Control, Forensic Science, Hospitals, National Blood Services, Overseas Development, Public Health Entities, Public Health Laboratories, Pharmaceutical firms, Food industry and agrochemical companies.
      </p>

      <h3 className="text-[1.25rem] text-[#191b1d] font-black my-[20px] mb-[12px]">BS-Biochemistry – 4 Year Program</h3>

      {semesters.map((semester) => (
        <div key={semester.id} className="mb-[12px]">
          <button
            className="w-[50%] flex justify-between items-center bg-gradient-to-r from-[#8B0000] to-[#660000] text-white p-[12px_16px] text-[1rem] font-bold rounded-[8px] cursor-pointer transition-all hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(0,0,0,0.12)] md:w-full"
            onClick={() => toggleSemester(semester.id)}
          >
            <span>{semester.title}</span>
            <span className="ml-[12px] text-[0.95rem]">
              {openSemester === semester.id ? "▲" : "▼"}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 bg-[#f8fbff] rounded-[8px] w-[50%] mt-[8px] shadow-[inset_0_2px_6px_rgba(0,0,0,0.03)] md:w-full ${openSemester === semester.id ? "max-h-[1200px] opacity-100 p-3 animate-fadeUp" : "max-h-0 opacity-0"
              }`}
          >
            <table className="w-full border-collapse">
              <tbody>
                {semester.courses.map((course, index) => (
                  <tr key={index} className="border-b border-[#e6eef9] hover:bg-[#f1f7ff] transition-colors">
                    <td className="p-[10px_8px] text-[0.98rem] text-[#222] md:text-[0.92rem] md:p-[8px]">{course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Department4;
