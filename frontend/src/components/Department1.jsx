import React, { useState } from "react";

function Department1() {
  const [openSemester, setOpenSemester] = useState(null);

  const toggleSemester = (semester) => {
    setOpenSemester(openSemester === semester ? null : semester);
  };

  const semesters = [
    {
      id: 1,
      title: "Semester 1",
      courses: [
        "Upper Limb & General Anatomy 4(3-1)",
        "Cardiovascular & Neuromuscular Physiology 3(2-1)",
        "Introduction to Kinesiology 3(2-1)",
        "Functional English 3(3-0)",
        "Introduction to Statistical Theory-I 3(3-0)",
        "Pakistan Studies 2(2-0)",
      ],
    },
    {
      id: 2,
      title: "Semester 2",
      courses: [
        "Lower Limb Anatomy & General Histology 4(3-1)",
        "Visceral Physiology 3(2-1)",
        "Clinical Kinesiology 3(2-1)",
        "English Comprehension & Composition 3(3-0)",
        "Introduction to Statistical Theory-II 3(3-0)",
        "Islamic Studies / Ethics 2(2-0)",
      ],
    },
    {
      id: 3,
      title: "Semester 3",
      courses: [
        "Head and Neck Anatomy & Human Embryology 3(2-1)",
        "Physiology of Reproductive, Nervous & Renal System 3(2-1)",
        "Introduction to Biomechanics & Ergonomics 3(3-0)",
        "Biochemistry & Genetics I 2(2-0)",
        "Introduction to Exercise Physiology 3(3-0)",
        "Introduction to Computing Applications 3(2-1)",
      ],
    },
    {
      id: 4,
      title: "Semester 4",
      courses: [
        "Human Neuro Anatomy 3(2-1)",
        "Advance Techniques in Biomechanics & Ergonomics 3(2-1)",
        "Behavioral Sciences (Psychiatry & Psychology) 3(3-0)",
        "Biochemistry & Genetics II 2(2-0)",
        "Advance Clinical Exercise Physiology 3(3-0)",
        "Medical Physics in Rehabilitation 3(2-1)",
      ],
    },
    {
      id: 5,
      title: "Semester 5",
      courses: [
        "General Pathology 3(2-1)",
        "Microbiology & Applied Pathology 3(2-1)",
        "Introduction to Pharmacology 3(3-0)",
        "Physical Agents & Electrotherapy I 3(2-1)",
        "Therapeutic Exercises I 3(2-1)",
        "Musculoskeletal Physical Therapy I 3(2-1)",
      ],
    },
    {
      id: 6,
      title: "Semester 6",
      courses: [
        "Special Pathology 3(3-0)",
        "Applied Microbiology 3(2-1)",
        "Applied Pharmacology 3(3-0)",
        "Physical Agents & Electrotherapy II 3(2-1)",
        "Therapeutic Exercises II 3(2-1)",
        "Musculoskeletal Physical Therapy II 3(2-1)",
      ],
    },
    {
      id: 7,
      title: "Semester 7",
      courses: [
        "Medicine (Clinical) 3(3-0)",
        "Surgery (Clinical) 3(3-0)",
        "Community Medicine & Rehabilitation 3(3-0)",
        "Orthotics & Prosthetics 3(2-1)",
        "Neurological Physical Therapy I 3(2-1)",
        "Radiology & Diagnostic Imaging 3(2-1)",
      ],
    },
    {
      id: 8,
      title: "Semester 8",
      courses: [
        "Pediatrics (Clinical) 3(3-0)",
        "Gynecology & Obstetrics (Clinical) 3(3-0)",
        "Sports Physical Therapy 3(2-1)",
        "Neurological Physical Therapy II 3(2-1)",
        "Cardiopulmonary Physical Therapy 3(2-1)",
        "Research Methodology & Evidence Based Practice 3(3-0)",
      ],
    },
    {
      id: 9,
      title: "Semester 9",
      courses: [
        "Clinical Practice I (Medicine & Surgery) 6(0-6)",
        "Clinical Practice II (Neuro & Cardio) 6(0-6)",
        "Management Sciences in Rehabilitation 3(3-0)",
        "Emergency Procedures & First Aid 2(2-0)",
      ],
    },
    {
      id: 10,
      title: "Semester 10",
      courses: [
        "Clinical Practice III (Musculoskeletal & Sports PT) 6(0-6)",
        "Clinical Practice IV (Pediatrics & Gynae) 6(0-6)",
        "Professional Ethics & Law 2(2-0)",
        "Research Project / Thesis 6(0-6)",
      ],
    },
  ];

  return (
    <div className="w-[90%] max-w-[1100px] mx-auto font-['Poppins',_Arial,_sans-serif] text-[#333] p-[40px_20px] rounded-[15px] relative -bottom-[30px] shadow-[0_6px_18px_rgba(0,0,0,0.4)] bg-white animate-fadeUp">
      <h2 className="text-[1.8rem] font-bold text-[#8B0000] mt-[30px] mb-[15px] border-l-[5px] border-[#8B0000] pl-[12px] animate-slideInLeft">
        Department of Physical Therapy
      </h2>

      <h3 className="text-[1.3rem] mt-[25px] mb-[10px] font-semibold text-[#222]">Doctor of Physical Therapy</h3>
      <h4 className="text-[1.3rem] mt-[25px] mb-[10px] font-semibold text-[#222]">INTRODUCTION</h4>
      <p className="text-[1rem] leading-[1.7] mb-[30px] text-[#444] text-justify animate-fadeInUp">
        In keeping with recent growth and advancement of Physical Therapy profession worldwide,
        the Doctor of Physical Therapy (DPT) curriculum is developed to prepare Physical Therapists
        for independent practice in Pakistan. The program emphasizes differential diagnosis, applied
        pharmacology, diagnostic imaging, health care prevention and practice management. With the
        increasing recognition of Physical Therapists’ skills in diagnosing, treating, and preventing
        illness and injuries, the profession is moving toward greater autonomy in patient care.
      </p>

      <h3 className="text-[1.3rem] mt-[25px] mb-[10px] font-semibold text-[#222]">
        Doctor of Physical Therapy (DPT) – 5 Year Program
      </h3>

      {semesters.map((semester) => (
        <div key={semester.id} className="mb-[18px]">
          <button
            className="w-full text-left p-[12px_18px] bg-[#8B0000] text-white text-[1rem] font-semibold rounded-[8px] cursor-pointer flex justify-between items-center transition-colors duration-300 hover:bg-[#002244]"
            onClick={() => toggleSemester(semester.id)}
          >
            <span>{semester.title}</span><span>{openSemester === semester.id ? "▲" : "▼"}</span>
          </button>

          {openSemester === semester.id && (
            <div className="max-h-[1000px] overflow-hidden transition-all duration-500 bg-[#f9f9f9] rounded-[8px] mt-[6px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] p-3 animate-fadeUp">
              <table className="w-full border-collapse">
                <tbody>
                  {semester.courses.map((course, index) => (
                    <tr key={index} className="hover:bg-[#f1f7ff] transition-colors">
                      <td className="p-[10px_14px] border-b border-[#ddd] text-[0.95rem] text-[#333]">{course}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Department1;
