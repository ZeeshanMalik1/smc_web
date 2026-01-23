import React, { useState } from "react";

function DepartmentFoodNutrition() {
  const [openSemester, setOpenSemester] = useState(null);

  const toggleSemester = (id) => {
    setOpenSemester(openSemester === id ? null : id);
  };

  const semesters = [
    {
      id: 1,
      title: "Semester 1",
      courses: [
        "Introduction to Food Science & Technology 3(2-1)",
        "Principles of Human Nutrition 3(3-0)",
        "Functional English 3(3-0)",
        "Introduction to Computing Applications 3(3-0)",
        "Pakistan Studies 2(2-0)",
        "Introduction to Psychology 3(3-0)",
        "Essentials of Biochemistry 3(3-0)",
      ],
    },
    {
      id: 2,
      title: "Semester 2",
      courses: [
        "Community Nutrition 3(2-1)",
        "Food Processing & Preservation 3(2-1)",
        "Fundamentals of Halal Foods 3(3-0)",
        "Food Microbiology 3(2-1)",
        "English Composition & Comprehension 3(3-0)",
        "Islamic Studies/ Ethics 2(2-0)",
      ],
    },
    {
      id: 3,
      title: "Semester 3",
      courses: [
        "Dietetics I 3(2-1)",
        "Contemporary Nutrition 2(0-2)",
        "Metabolism of Nutrients 3(3-0)",
        "Analytical Tools in Food & Nutrition 3(1-2)",
        "General Human Anatomy 3(2-1)",
        "General Pathology 3(2-1)",
        "Introduction to Biotechnology 3(2-1)",
      ],
    },
    {
      id: 4,
      title: "Semester 4",
      courses: [
        "Dietetics II 3(2-1)",
        "Life Cycle Nutrition 3(3-0)",
        "Food Safety & Toxicology 3(3-0)",
        "Assessment of Nutritional status 3(2-1)",
        "Applied Anatomy 3(2-1)",
        "Introduction to Statistical Theory 3(3-0)",
      ],
    },
    {
      id: 5,
      title: "Semester 5",
      courses: [
        "Nutrients Drugs Interaction 3(3-0)",
        "Functional Foods & Nutraceuticals 3(3-0)",
        "Meal Planning & Management 3(2-1)",
        "Nutrition in Emergency 3(3-0)",
        "Nutritional Biochemistry 3(3-0)",
        "Functional Anatomy and Physiology-I 3(2-1)",
      ],
    },
    {
      id: 6,
      title: "Semester 6",
      courses: [
        "Clinical and Therapeutic Nutrition 3(2-1)",
        "Diet Modeling and Counseling 3(1-2)",
        "Vitamins & Minerals in Nutrition 3(3-0)",
        "Biochemistry of Diseases 3(1-2)",
        "Functional Anatomy and Physiology-II 3(2-1)",
        "General Pharmacology 3(3-0)",
      ],
    },
    {
      id: 7,
      title: "Semester 7",
      courses: [
        "Medical Nutrition Therapy 3(2-1)",
        "Nutrition in Exercise & Sports 3(3-0)",
        "Nutritional Deficiency Disorders 3(2-1)",
        "Infant and Young Child Feeding 3(2-1)",
        "Research Projects and Scientific Writing 2(1-1)",
        "Nutrition Policy and Public Health 3(3-0)",
      ],
    },
    {
      id: 8,
      title: "Semester 8",
      courses: ["Internship (Six Month) & Report Writing 10(0-10)"],
    },
  ];

  return (
    <div className="w-[80%] max-w-[1200px] mx-auto font-['Poppins',_Arial,_sans-serif] text-[#333] p-[32px] rounded-[14px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] my-[30px] animate-fadeUp md:w-[96%] md:p-[18px]">
      <h2 className="text-[1.9rem] font-bold text-[#8B0000] mb-[14px] border-l-[6px] border-[#8B0000] pl-[12px] animate-slideInLeft md:text-[1.6rem]">
        Department of Food & Nutrition
      </h2>

      <h3 className="text-[1.25rem] text-[#191b1d] font-black my-[20px] mb-[12px] md:text-[1.1rem]">BS-Human Nutrition & Dietetics</h3>

      <h4 className="text-[1.2rem] font-semibold text-[#222] mt-[18px] mb-[8px]">Objectives</h4>
      <ul className="text-[1rem] leading-[1.7] text-[#444] mb-[22px] text-justify list-none p-0">
        <li>
          1. To produce competent Nutritionists and Dieticians with adequate
          scientific background to meet the needs of public and private sector,
          organization/industries
        </li>
        <li>
          2.  To provide professional leadership, services and outreach activities
          in the major areas of nutrition and dietetics.
        </li>
        <li>
          3. To develop a diet effective appropriate control of diseases, and
          helpful to boost the human body by natural way through nutrition.
        </li>
        <li>4. To meet the training needs of public and private sector.</li>
        <li>
          5. To produce competent nutritionists and dietitians for different
          organizations in the country.
        </li>
        <li>
          6. To address the issues in different sectors of Food Science, Nutrition
          and Home Economics.
        </li>
      </ul>

      <h4 className="text-[1.2rem] font-semibold text-[#222] mt-[18px] mb-[8px]">Introduction</h4>
      <p className="text-[1rem] leading-[1.7] text-[#444] mb-[22px] text-justify">
        Under Sargodha Institute of Health Sciences, the Department of Food &
        Nutrition is one of the best in country. The outstanding faculty,
        state-of-the-art building and laboratory facilities, and friendly and
        dedicated staff members make the Department a pleasant place to study
        and conduct research.
      </p>
      <p className="text-[1rem] leading-[1.7] text-[#444] mb-[22px] text-justify">
        <strong>World Class internship experiences in collaboration with:</strong>
        <br />• Punjab Food Authority, Lahore
        <br />• Engro Foods Limited, Karachi
        <br />• Halal Research Council, Pakistan
      </p>
      <p className="text-[1rem] leading-[1.7] text-[#444] mb-[22px] text-justify">
        Our graduate programs offer study leading to Masters of Science and
        Doctor of Philosophy degrees. Graduate students receive in-depth
        training in the core disciplines of food & nutrition, food chemistry,
        food microbiology, food engineering & processing, food safety, food
        service management, human nutrition & textile & clothing.
      </p>

      <h3 className="text-[1.2rem] font-semibold text-[#222] mt-[18px] mb-[8px]">BS-Human Nutrition & Dietetics
        (4 Years)</h3>

      {semesters.map((semester) => (
        <div key={semester.id} className="mb-[12px]">
          <button
            className="w-[50%] flex justify-between items-center bg-gradient-to-r from-[#8B0000] to-[#660000] text-white p-[12px_16px] text-[1rem] font-bold rounded-[8px] cursor-pointer transition-all hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(0,0,0,0.12)] md:w-full md:text-[0.98rem] md:p-[10px_14px]"
            onClick={() => toggleSemester(semester.id)}
          >
            <span>{semester.title}</span>
            <span className="ml-[12px] text-[0.95rem]">
              {openSemester === semester.id ? "▲" : "▼"}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 bg-[#f8fbff] rounded-[8px] w-[50%] mt-[8px] shadow-[inset_0_2px_6px_rgba(0,0,0,0.03)] md:w-full ${openSemester === semester.id ? "max-h-[1200px] opacity-100 p-[12px]" : "max-h-0 opacity-0"
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

export default DepartmentFoodNutrition;
