// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContentBox from "@/components/ContentBox";
// import PageBanner from "@/components/PageBanner";

// const OrganisingCommittee = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-background">
//       <Navbar />
      
//       <main className="flex-1">
//         <PageBanner />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//           <div className="text-center mb-6 sm:mb-8">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">ORGANISING COMMITTEE</h1>
//           </div>

//           <ContentBox>
//             <div className="space-y-4 sm:space-y-6 text-left">
//               {/* Chief Patrons */}
//               {/* <div>
//                 <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Chief Patron(s):</h2>
//                 <div className="ml-4 sm:ml-8 space-y-1">
//                   <p className="text-sm sm:text-base text-foreground">Dr. C. Gangi Reddy, Chancellor, Annamacharya University, Rajampet</p>
//                   <p className="text-sm sm:text-base text-foreground">Sri. C. Abhishek Reddy, Pro-chancellors, Annamacharya University, Rajampet</p>
//                 </div>
//               </div> */}

//               <div className="flex flex-col items-center justify-center text-center my-6">
//   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">
//     Chief Patron(s):
//   </h2>
//   <div className="space-y-1">
//     <p className="text-sm sm:text-base text-foreground">
//       Dr. C. Gangi Reddy, Chancellor, Annamacharya University, Rajampet
//     </p>
//     <p className="text-sm sm:text-base text-foreground">
//       Sri. C. Abhishek Reddy, Pro-chancellors, Annamacharya University, Rajampet
//     </p>
//   </div>
// </div>


//               {/* Patrons */}
//               {/* <div>
//                 <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Patron(s):</h2>
//                 <div className="ml-4 sm:ml-8 space-y-1">
//                   <p className="text-sm sm:text-base text-foreground">Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University, Rajampet</p>
//                   <p className="text-sm sm:text-base text-foreground">Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University, Rajampet</p>
//                 </div>
//               </div> */}

//               {/* Patrons */}
// <div className="flex flex-col items-center justify-center text-center my-6">
//   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">
//     Patron(s):
//   </h2>
//   <div className="space-y-1">
//     <p className="text-sm sm:text-base text-foreground">
//       Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University, Rajampet
//     </p>
//     <p className="text-sm sm:text-base text-foreground">
//       Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University, Rajampet
//     </p>
//   </div>
// </div>


//               {/* General Chairs */}
//               <div>
//                 <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">General Chair(s):</h2>
//                 <div className="ml-4 sm:ml-8 space-y-1">
//                   <p className="text-sm sm:text-base text-foreground">Dr. S. M.V. Narayana, Principal, AITS, Rajampet</p>
//                   <p className="text-sm sm:text-base text-foreground">Dr. Nalin Behari Dev Choudhury, Professor, NIT, Silchar</p>
//                 </div>
//               </div>

//               {/* Program Chairs */}
//               <div>
//                 <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Program Chair(s):</h2>
//                 <div className="ml-4 sm:ml-8 space-y-1">
//                   <p className="text-sm sm:text-base text-foreground">Dr. P. Balachennaiah, HoD- EEE, Annamacharya University, Rajampet</p>
//                   <p className="text-sm sm:text-base text-foreground">Dr. S. Albert Alexander, Professor, EEE, VIT, Vellore</p>
//                 </div>
//               </div>

//               {/* Organizing Convenors */}
//               <div>
//                 <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Organizing Convenor(s):</h2>
//                 <div className="ml-4 sm:ml-8 space-y-1">
//                   <p className="text-sm sm:text-base text-foreground">Dr. M. Padma Lalitha, Professor, EEE, Annamacharya University, Rajampet</p>
//                   <p className="text-sm sm:text-base text-foreground">Dr. O. Hemakesavulu, Professor, EEE, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Coordinators */}
//               <div>
//                 <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Coordinator(s):</h2>
//                 <div className="ml-4 sm:ml-8 space-y-1">
//                   <p className="text-sm sm:text-base text-foreground">Dr. P. Bhaskara Prasad, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                   <p className="text-sm sm:text-base text-foreground">Dr. S. Sarada, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Conference Secretary */}
//               <div>
//                 <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Conference Secretary:</h2>
//                 <div className="ml-4 sm:ml-8">
//                   <p className="text-sm sm:text-base text-foreground">Dr. S. Suresh, Associate Professor, EEE, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Advisors and Technical Program Chairs */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Advisor(s):</h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p className="text-sm sm:text-base text-foreground">Dr. A. Subbarami Reddy, Dean, Academics, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. N. Sivarami Reddy, Dean, R&D, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. M. Subba Rao, HOD-CSE, Dean of Student Affairs, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. D. Krishna Mohan Raju, Dean, Innovation and Incubation, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. B. Jayarami Reddy, Dy. Director Admissions, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. N. R. Gowthami, Assistant Professor & HOD Civil Engineering, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. G. Suresh Babu, Assistant Professor & HOD Mechanical Engineering, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. J. Chinna Babu, Associate Professor & HOD-ECE, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. P Phanindra Kumar Reddy, Associate Professor & HOD-AIDS, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. N. Penchalaiah, Associate Professor & HOD-AIML, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. L. Obulapathi, Associate Professor & HOD- H&S, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr T Navaneetha, Assistant Professor & HOD- MBA, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. C. Madana Kumar Reddy, Associate Professor & HOD-MCA, AU, Rajampet</p>
//                   </div>
//                 </div>
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Technical Program Chair(s):</h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p className="text-sm sm:text-base text-foreground">Dr. R. Gnanadass, PTU, Puducherry</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. V. Sandeep, NIT AP</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. K. Harinath Reddy, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. C. Ganesh AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. N. Chinna Alluraiah, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. K. Vijaya Bhaskar AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Mr. R. Madhan Mohan, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Mr. M. Ramesh, AU, Rajampet</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Publication Chairs and Publicity Chairs */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Publication Chair(s):</h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p className="text-sm sm:text-base text-foreground">Dr. S. Ravi Prakash Reddy, IIT, Mumbai</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. S. Jeevananthan, PTU, Puducherry</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. M. Venkatesan, NIT, Puducherry</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. P. Gopi, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. Dhanunjaya Babu, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Dr. S. Venkateswarlu Reddy, AU, Rajampet</p>
//                   </div>
//                 </div>
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Publicity and Website Chair(s):</h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p className="text-sm sm:text-base text-foreground">Dr. S. Muqthiar Ali, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Mr. N. Sreeramula Reddy, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Mr. Sai Sandeep, AU, Rajampet</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Registration Chairs and Finance Chairs */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Registration Chair(s):</h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p className="text-sm sm:text-base text-foreground">Mr. T. Penchalaiah, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Mrs. A. Hima Bindu, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Ms. S. Rubeena Bi, AU, Rajampet</p>
//                   </div>
//                 </div>
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Finance Chair(s):</h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p className="text-sm sm:text-base text-foreground">Dr. J. Sri Ranganayakulu, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Mr. L. Baya Reddy, AU, Rajampet</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Accommodation and Reception Chairs */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Accommodation Committee Chair(s):</h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p className="text-sm sm:text-base text-foreground">Dr. P. Suresh Babu, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Mr. M. Mahesh, AU, Rajampet</p>
//                   </div>
//                 </div>
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Reception Chair(s):</h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p className="text-sm sm:text-base text-foreground">Mrs. M. Swathi, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Mrs. M. Swetha, AU, Rajampet</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Transport and Feedback Chairs */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Transport Committee Chair(s):</h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p className="text-sm sm:text-base text-foreground">Dr. P. Bhakara Prasad, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Mr. G. Mahaboob Subhan, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Mr. B. Murali Mohan, AU, Rajampet</p>
//                   </div>
//                 </div>
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Feedback and Certification Committee Chair(s):</h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p className="text-sm sm:text-base text-foreground">Mr. T. Arun Kumar, AU, Rajampet</p>
//                     <p className="text-sm sm:text-base text-foreground">Mr. B. Anil Kumar, AU, Rajampet</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </ContentBox>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default OrganisingCommittee;












// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContentBox from "@/components/ContentBox";
// import PageBanner from "@/components/PageBanner";

// const OrganisingCommittee = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-background text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
//       <Navbar />

//       <main className="flex-1">
//         <PageBanner />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
//           <div className="text-center mb-8 sm:mb-10">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
//               ORGANIZING COMMITTEE
//             </h1>
//           </div>

//           <ContentBox>
//             <div className="space-y-8 sm:space-y-10 text-left">

//               {/* Chief Patrons */}
//               <div className="flex flex-col items-center justify-center text-center my-6">
//                 <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                   Chief Patron(s):
//                 </h2>
//                 <div className="space-y-1">
//                   <p>Dr. C. Gangi Reddy, Chancellor, Annamacharya University, Rajampet</p>
//                   <p>Sri. C. Abhishek Reddy, Pro-chancellor, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Patrons */}
//               <div className="flex flex-col items-center justify-center text-center my-6">
//                 <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                   Patron(s):
//                 </h2>
//                 <div className="space-y-1">
//                   <p>Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University, Rajampet</p>
//                   <p>Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Side by side layout starts here */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">

//                 {/* General Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     General Chair(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Dr. S. M.V. Narayana, Principal, AITS, Rajampet</p>
//                     <p>Dr. Nalin Behari Dev Choudhury, Professor, NIT, Silchar</p>
//                   </div>
//                 </div>

//                 {/* Program Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Program Chair(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Dr. P. Balachennaiah, HoD- EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. S. Albert Alexander, Professor, EEE, VIT, Vellore</p>
//                   </div>
//                 </div>

//                 {/* Organizing Convenors */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Organizing Convenor(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Dr. M. Padma Lalitha, Professor, EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. O. Hemakesavulu, Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Coordinators */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Coordinator(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Dr. P. Bhaskara Prasad, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. S. Sarada, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Conference Secretary */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Conference Secretary:
//                   </h2>
//                   <div className="ml-4 sm:ml-8">
//                     <p>Dr. S. Suresh, Associate Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Advisors */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Advisor(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Dr. A. Subbarami Reddy, Dean, Academics, AU, Rajampet</p>
//                     <p>Dr. N. Sivarami Reddy, Dean, R&D, AU, Rajampet</p>
//                     <p>Dr. M. Subba Rao, HOD-CSE, Dean of Student Affairs, AU, Rajampet</p>
//                     <p>Dr. D. Krishna Mohan Raju, Dean, Innovation and Incubation, AU, Rajampet</p>
//                     <p>Dr. B. Jayarami Reddy, Dy. Director Admissions, AU, Rajampet</p>
//                     <p>Dr. N. R. Gowthami, Assistant Professor & HOD Civil Engineering, AU, Rajampet</p>
//                     <p>Dr. G. Suresh Babu, Assistant Professor & HOD Mechanical Engineering, AU, Rajampet</p>
//                     <p>Dr. J. Chinna Babu, Associate Professor & HOD-ECE, AU, Rajampet</p>
//                     <p>Dr. P Phanindra Kumar Reddy, Associate Professor & HOD-AIDS, AU, Rajampet</p>
//                     <p>Dr. N. Penchalaiah, Associate Professor & HOD-AIML, AU, Rajampet</p>
//                     <p>Dr. L. Obulapathi, Associate Professor & HOD- H&S, AU, Rajampet</p>
//                     <p>Dr T Navaneetha, Assistant Professor & HOD- MBA, AU, Rajampet</p>
//                     <p>Dr. C. Madana Kumar Reddy, Associate Professor & HOD-MCA, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Technical Program Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Technical Program Chair(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Dr. R. Gnanadass, PTU, Puducherry</p>
//                     <p>Dr. V. Sandeep, NIT AP</p>
//                     <p>Dr. K. Harinath Reddy, AU, Rajampet</p>
//                     <p>Dr. C. Ganesh AU, Rajampet</p>
//                     <p>Dr. N. Chinna Alluraiah, AU, Rajampet</p>
//                     <p>Dr. K. Vijaya Bhaskar AU, Rajampet</p>
//                     <p>Mr. R. Madhan Mohan, AU, Rajampet</p>
//                     <p>Mr. M. Ramesh, AU, Rajampet</p>
//                     <p>Dr. P. Suresh Babu, Au, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Publication Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Publication Chair(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Dr. S. Ravi Prakash Reddy, IIT, Mumbai</p>
//                     <p>Dr. S. Jeevananthan, PTU, Puducherry</p>
//                     <p>Dr. M. Venkatesan, NIT, Puducherry</p>
//                     <p>Dr. P. Gopi, AU, Rajampet</p>
//                     <p>Dr. Dhanunjaya Babu, AU, Rajampet</p>
//                     <p>Dr. S. Venkateswarlu Reddy, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Publicity and Website Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Publicity and Website Chair(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Dr. S. Muqthiar Ali, AU, Rajampet</p>
//                     <p>Mr. N. Sreeramula Reddy, AU, Rajampet</p>
//                     <p>Mr. Sai Sandeep, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Registration Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Registration Chair(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Mr. T. Penchalaiah, AU, Rajampet</p>
//                     <p>Mrs. A. Hima Bindu, AU, Rajampet</p>
//                     <p>Ms. S. Rubeena Bi, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Finance Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Finance Chair(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Dr. J. Sri Ranganayakulu, AU, Rajampet</p>
//                     <p>Mr. L. Baya Reddy, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Accommodation Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Accommodation Committee Chair(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Dr. P. Suresh Babu, AU, Rajampet</p>
//                     <p>Mr. M. Mahesh, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Reception Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Reception Chair(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Mrs. M. Swathi, AU, Rajampet</p>
//                     <p>Mrs. M. Swetha, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Transport Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Transport Committee Chair(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Dr. P. Bhakara Prasad, AU, Rajampet</p>
//                     <p>Mr. G. Mahaboob Subhan, AU, Rajampet</p>
//                     <p>Mr. B. Murali Mohan, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Feedback and Certification Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Feedback and Certification Committee Chair(s):
//                   </h2>
//                   <div className="ml-4 sm:ml-8 space-y-1">
//                     <p>Mr. T. Arun Kumar, AU, Rajampet</p>
//                     <p>Mr. B. Anil Kumar, AU, Rajampet</p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </ContentBox>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default OrganisingCommittee;









// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContentBox from "@/components/ContentBox";
// import PageBanner from "@/components/PageBanner";

// const OrganisingCommittee = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-background text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
//       <Navbar />

//       <main className="flex-1">
//         <PageBanner />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
//           <div className="text-center mb-8 sm:mb-10">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
//               ORGANIZING COMMITTEE
//             </h1>
//           </div>

//           <ContentBox>
//             <div className="space-y-8 sm:space-y-10 text-left">

//               {/* Chief Patrons */}
//               <div className="flex flex-col items-center justify-center text-center my-6">
//                 <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                   Chief Patron(s):
//                 </h2>
//                 <div className="space-y-1">
//                   <p>Dr. C. Gangi Reddy, Chancellor, Annamacharya University, Rajampet</p>
//                   <p>Sri. C. Abhishek Reddy, Pro-chancellor, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Patrons */}
//               <div className="flex flex-col items-center justify-center text-center my-6">
//                 <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                   Patron(s):
//                 </h2>
//                 <div className="space-y-1">
//                   <p>Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University, Rajampet</p>
//                   <p>Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Side-by-side layout */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"> {/* 🔧 Reduced spacing */}

//                 {/* General Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     General Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. S. M.V. Narayana, Principal, AITS, Rajampet</p>
//                     <p>Dr. Nalin Behari Dev Choudhury, Professor, NIT, Silchar</p>
//                   </div>
//                 </div>

//                 {/* Program Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Program Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Balachennaiah, HoD- EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. S. Albert Alexander, Professor, EEE, VIT, Vellore</p>
//                   </div>
//                 </div>

//                 {/* Organizing Convenors */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Organizing Convenor(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. M. Padma Lalitha, Professor, EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. O. Hemakesavulu, Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Coordinators */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Coordinator(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Bhaskara Prasad, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. S. Sarada, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Conference Secretary */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Conference Secretary:
//                   </h2>
//                   <div className="ml-3 sm:ml-6">
//                     <p>Dr. S. Suresh, Associate Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Advisors */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Advisor(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. A. Subbarami Reddy, Dean, Academics, AU, Rajampet</p>
//                     <p>Dr. N. Sivarami Reddy, Dean, R&D, AU, Rajampet</p>
//                     <p>Dr. M. Subba Rao, HOD-CSE, Dean of Student Affairs, AU, Rajampet</p>
//                     <p>Dr. D. Krishna Mohan Raju, Dean, Innovation and Incubation, AU, Rajampet</p>
//                     <p>Dr. B. Jayarami Reddy, Dy. Director Admissions, AU, Rajampet</p>
//                     <p>Dr. N. R. Gowthami, Assistant Professor & HOD Civil Engineering, AU, Rajampet</p>
//                     <p>Dr. G. Suresh Babu, Assistant Professor & HOD Mechanical Engineering, AU, Rajampet</p>
//                     <p>Dr. J. Chinna Babu, Associate Professor & HOD-ECE, AU, Rajampet</p>
//                     <p>Dr. P Phanindra Kumar Reddy, Associate Professor & HOD-AIDS, AU, Rajampet</p>
//                     <p>Dr. N. Penchalaiah, Associate Professor & HOD-AIML, AU, Rajampet</p>
//                     <p>Dr. L. Obulapathi, Associate Professor & HOD- H&S, AU, Rajampet</p>
//                     <p>Dr T Navaneetha, Assistant Professor & HOD- MBA, AU, Rajampet</p>
//                     <p>Dr. C. Madana Kumar Reddy, Associate Professor & HOD-MCA, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Technical Program Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Technical Program Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. R. Gnanadass, PTU, Puducherry</p>
//                     <p>Dr. V. Sandeep, NIT AP</p>
//                     <p>Dr. K. Harinath Reddy, AU, Rajampet</p>
//                     <p>Dr. C. Ganesh, AU, Rajampet</p>
//                     <p>Dr. N. Chinna Alluraiah, AU, Rajampet</p>
//                     <p>Dr. K. Vijaya Bhaskar, AU, Rajampet</p>
//                     <p>Mr. R. Madhan Mohan, AU, Rajampet</p>
//                     <p>Mr. M. Ramesh, AU, Rajampet</p>
//                     <p>Dr. P. Suresh Babu, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Publication Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Publication Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. S. Ravi Prakash Reddy, IIT, Mumbai</p>
//                     <p>Dr. S. Jeevananthan, PTU, Puducherry</p>
//                     <p>Dr. M. Venkatesan, NIT, Puducherry</p>
//                     <p>Dr. P. Gopi, AU, Rajampet</p>
//                     <p>Dr. Dhanunjaya Babu, AU, Rajampet</p>
//                     <p>Dr. S. Venkateswarlu Reddy, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Publicity and Website Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Publicity and Website Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. S. Muqthiar Ali, AU, Rajampet</p>
//                     <p>Mr. N. Sreeramula Reddy, AU, Rajampet</p>
//                     <p>Mr. Sai Sandeep, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Registration Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Registration Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Mr. T. Penchalaiah, AU, Rajampet</p>
//                     <p>Mrs. A. Hima Bindu, AU, Rajampet</p>
//                     <p>Ms. S. Rubeena Bi, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Finance Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Finance Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. J. Sri Ranganayakulu, AU, Rajampet</p>
//                     <p>Mr. L. Baya Reddy, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Accommodation Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Accommodation Committee Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Suresh Babu, AU, Rajampet</p>
//                     <p>Mr. M. Mahesh, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Reception Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Reception Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Mrs. M. Swathi, AU, Rajampet</p>
//                     <p>Mrs. M. Swetha, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Transport Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Transport Committee Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Bhakara Prasad, AU, Rajampet</p>
//                     <p>Mr. G. Mahaboob Subhan, AU, Rajampet</p>
//                     <p>Mr. B. Murali Mohan, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Feedback and Certification Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Feedback and Certification Committee Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Mr. T. Arun Kumar, AU, Rajampet</p>
//                     <p>Mr. B. Anil Kumar, AU, Rajampet</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </ContentBox>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default OrganisingCommittee;

























// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContentBox from "@/components/ContentBox";
// import PageBanner from "@/components/PageBanner";

// const OrganisingCommittee = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-background text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
//       <Navbar />

//       <main className="flex-1">
//         <PageBanner />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
//           <div className="text-center mb-8 sm:mb-10">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
//               ORGANIZING COMMITTEE
//             </h1>
//           </div>

//           <ContentBox>
//             <div className="space-y-8 sm:space-y-10 text-left">

//               {/* Chief Patrons */}
//               <div className="flex flex-col items-center justify-center text-center my-6">
//                 <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                   Chief Patron(s):
//                 </h2>
//                 <div className="space-y-1">
//                   <p>Dr. C. Gangi Reddy, Chancellor, Annamacharya University, Rajampet</p>
//                   <p>Sri. C. Abhishek Reddy, Pro-chancellor, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Patrons */}
//               <div className="flex flex-col items-center justify-center text-center my-6">
//                 <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                   Patron(s):
//                 </h2>
//                 <div className="space-y-1">
//                   <p>Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University, Rajampet</p>
//                   <p>Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Side-by-side layout */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

//                 {/* General Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     General Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. S. M.V. Narayana, Principal, AITS, Rajampet</p>
//                     <p>Dr. Nalin Behari Dev Choudhury, Professor, NIT, Silchar</p>
//                   </div>
//                 </div>

//                 {/* Program Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Program Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Balachennaiah, HoD- EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. S. Albert Alexander, Professor, EEE, VIT, Vellore</p>
//                   </div>
//                 </div>

//                 {/* Organizing Convenors */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Organizing Convenor(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. M. Padma Lalitha, Professor, EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. O. Hemakesavulu, Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Coordinators */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Coordinator(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Bhaskara Prasad, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. S. Sarada, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Conference Secretary */}
//                 <div className="self-start">
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Conference Secretary:
//                   </h2>
//                   <div className="ml-3 sm:ml-6">
//                     <p>Dr. S. Suresh, Associate Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Advisors */}
//                 <div className="self-start">
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Advisor(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. A. Subbarami Reddy, Dean, Academics, AU, Rajampet</p>
//                     <p>Dr. N. Sivarami Reddy, Dean, R&D, AU, Rajampet</p>
//                     <p>Dr. M. Subba Rao, HOD-CSE, Dean of Student Affairs, AU, Rajampet</p>
//                     <p>Dr. D. Krishna Mohan Raju, Dean, Innovation and Incubation, AU, Rajampet</p>
//                     <p>Dr. B. Jayarami Reddy, Dy. Director Admissions, AU, Rajampet</p>
//                     <p>Dr. N. R. Gowthami, Assistant Professor & HOD Civil Engineering, AU, Rajampet</p>
//                     <p>Dr. G. Suresh Babu, Assistant Professor & HOD Mechanical Engineering, AU, Rajampet</p>
//                     <p>Dr. J. Chinna Babu, Associate Professor & HOD-ECE, AU, Rajampet</p>
//                     <p>Dr. P Phanindra Kumar Reddy, Associate Professor & HOD-AIDS, AU, Rajampet</p>
//                     <p>Dr. N. Penchalaiah, Associate Professor & HOD-AIML, AU, Rajampet</p>
//                     <p>Dr. L. Obulapathi, Associate Professor & HOD- H&S, AU, Rajampet</p>
//                     <p>Dr T Navaneetha, Assistant Professor & HOD- MBA, AU, Rajampet</p>
//                     <p>Dr. C. Madana Kumar Reddy, Associate Professor & HOD-MCA, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Technical Program Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Technical Program Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. R. Gnanadass, PTU, Puducherry</p>
//                     <p>Dr. V. Sandeep, NIT AP</p>
//                     <p>Dr. K. Harinath Reddy, AU, Rajampet</p>
//                     <p>Dr. C. Ganesh, AU, Rajampet</p>
//                     <p>Dr. N. Chinna Alluraiah, AU, Rajampet</p>
//                     <p>Dr. K. Vijaya Bhaskar, AU, Rajampet</p>
//                     <p>Mr. R. Madhan Mohan, AU, Rajampet</p>
//                     <p>Mr. M. Ramesh, AU, Rajampet</p>
//                     <p>Dr. P. Suresh Babu, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Publication Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Publication Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. S. Ravi Prakash Reddy, IIT, Mumbai</p>
//                     <p>Dr. S. Jeevananthan, PTU, Puducherry</p>
//                     <p>Dr. M. Venkatesan, NIT, Puducherry</p>
//                     <p>Dr. P. Gopi, AU, Rajampet</p>
//                     <p>Dr. Dhanunjaya Babu, AU, Rajampet</p>
//                     <p>Dr. S. Venkateswarlu Reddy, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Publicity and Website Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Publicity and Website Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. S. Muqthiar Ali, AU, Rajampet</p>
//                     <p>Mr. N. Sreeramula Reddy, AU, Rajampet</p>
//                     <p>Mr. Sai Sandeep, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Registration Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Registration Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Mr. T. Penchalaiah, AU, Rajampet</p>
//                     <p>Mrs. A. Hima Bindu, AU, Rajampet</p>
//                     <p>Ms. S. Rubeena Bi, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Finance Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Finance Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. J. Sri Ranganayakulu, AU, Rajampet</p>
//                     <p>Mr. L. Baya Reddy, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Accommodation Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Accommodation Committee Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Suresh Babu, AU, Rajampet</p>
//                     <p>Mr. M. Mahesh, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Reception Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Reception Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Mrs. M. Swathi, AU, Rajampet</p>
//                     <p>Mrs. M. Swetha, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Transport Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Transport Committee Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Bhakara Prasad, AU, Rajampet</p>
//                     <p>Mr. G. Mahaboob Subhan, AU, Rajampet</p>
//                     <p>Mr. B. Murali Mohan, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Feedback and Certification Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Feedback and Certification Committee Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Mr. T. Arun Kumar, AU, Rajampet</p>
//                     <p>Mr. B. Anil Kumar, AU, Rajampet</p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </ContentBox>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default OrganisingCommittee;















// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContentBox from "@/components/ContentBox";
// import PageBanner from "@/components/PageBanner";

// const OrganisingCommittee = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-background text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
//       <Navbar />

//       <main className="flex-1">
//         <PageBanner />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
//           <div className="text-center mb-8 sm:mb-10">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
//               ORGANIZING COMMITTEE
//             </h1>
//           </div>

//           <ContentBox>
//             <div className="space-y-8 sm:space-y-10 text-left">

//               {/* Chief Patrons */}
//               <div className="flex flex-col items-center justify-center text-center my-4">
//                 <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                   Chief Patron(s):
//                 </h2>
//                 <div className="space-y-1">
//                   <p>Dr. C. Gangi Reddy, Chancellor, Annamacharya University, Rajampet</p>
//                   <p>Sri. C. Abhishek Reddy, Pro-chancellor, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Patrons */}
//               <div className="flex flex-col items-center justify-center text-center my-4">
//                 <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                   Patron(s):
//                 </h2>
//                 <div className="space-y-1">
//                   <p>Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University, Rajampet</p>
//                   <p>Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Two-column layout for all remaining */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-4">

//                 {/* General Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     General Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. S. M.V. Narayana, Principal, AITS, Rajampet</p>
//                     <p>Dr. Nalin Behari Dev Choudhury, Professor, NIT, Silchar</p>
//                   </div>
//                 </div>

//                 {/* Program Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Program Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Balachennaiah, HoD- EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. S. Albert Alexander, Professor, EEE, VIT, Vellore</p>
//                   </div>
//                 </div>

//                 {/* Organizing Convenors */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Organizing Convenor(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. M. Padma Lalitha, Professor, EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. O. Hemakesavulu, Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Coordinators */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Coordinator(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Bhaskara Prasad, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. S. Sarada, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Conference Secretary */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Conference Secretary:
//                   </h2>
//                   <div className="ml-3 sm:ml-6">
//                     <p>Dr. S. Suresh, Associate Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Advisors */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Advisor(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. A. Subbarami Reddy, Dean, Academics, AU, Rajampet</p>
//                     <p>Dr. N. Sivarami Reddy, Dean, R&D, AU, Rajampet</p>
//                     <p>Dr. M. Subba Rao, HOD-CSE, Dean of Student Affairs, AU, Rajampet</p>
//                     <p>Dr. D. Krishna Mohan Raju, Dean, Innovation and Incubation, AU, Rajampet</p>
//                     <p>Dr. B. Jayarami Reddy, Dy. Director Admissions, AU, Rajampet</p>
//                     <p>Dr. N. R. Gowthami, Assistant Professor & HOD Civil Engineering, AU, Rajampet</p>
//                     <p>Dr. G. Suresh Babu, Assistant Professor & HOD Mechanical Engineering, AU, Rajampet</p>
//                     <p>Dr. J. Chinna Babu, Associate Professor & HOD-ECE, AU, Rajampet</p>
//                     <p>Dr. P Phanindra Kumar Reddy, Associate Professor & HOD-AIDS, AU, Rajampet</p>
//                     <p>Dr. N. Penchalaiah, Associate Professor & HOD-AIML, AU, Rajampet</p>
//                     <p>Dr. L. Obulapathi, Associate Professor & HOD- H&S, AU, Rajampet</p>
//                     <p>Dr T Navaneetha, Assistant Professor & HOD- MBA, AU, Rajampet</p>
//                     <p>Dr. C. Madana Kumar Reddy, Associate Professor & HOD-MCA, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Technical Program Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Technical Program Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. R. Gnanadass, PTU, Puducherry</p>
//                     <p>Dr. V. Sandeep, NIT AP</p>
//                     <p>Dr. K. Harinath Reddy, AU, Rajampet</p>
//                     <p>Dr. C. Ganesh, AU, Rajampet</p>
//                     <p>Dr. N. Chinna Alluraiah, AU, Rajampet</p>
//                     <p>Dr. K. Vijaya Bhaskar, AU, Rajampet</p>
//                     <p>Mr. R. Madhan Mohan, AU, Rajampet</p>
//                     <p>Mr. M. Ramesh, AU, Rajampet</p>
//                     <p>Dr. P. Suresh Babu, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Publication Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Publication Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. S. Ravi Prakash Reddy, IIT, Mumbai</p>
//                     <p>Dr. S. Jeevananthan, PTU, Puducherry</p>
//                     <p>Dr. M. Venkatesan, NIT, Puducherry</p>
//                     <p>Dr. P. Gopi, AU, Rajampet</p>
//                     <p>Dr. Dhanunjaya Babu, AU, Rajampet</p>
//                     <p>Dr. S. Venkateswarlu Reddy, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Publicity and Website Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Publicity and Website Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. S. Muqthiar Ali, AU, Rajampet</p>
//                     <p>Mr. N. Sreeramula Reddy, AU, Rajampet</p>
//                     <p>Mr. Sai Sandeep, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Registration Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Registration Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Mr. T. Penchalaiah, AU, Rajampet</p>
//                     <p>Mrs. A. Hima Bindu, AU, Rajampet</p>
//                     <p>Ms. S. Rubeena Bi, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Finance Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Finance Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. J. Sri Ranganayakulu, AU, Rajampet</p>
//                     <p>Mr. L. Baya Reddy, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Accommodation Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Accommodation Committee Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Suresh Babu, AU, Rajampet</p>
//                     <p>Mr. M. Mahesh, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Reception Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Reception Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Mrs. M. Swathi, AU, Rajampet</p>
//                     <p>Mrs. M. Swetha, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Transport Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Transport Committee Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Bhakara Prasad, AU, Rajampet</p>
//                     <p>Mr. G. Mahaboob Subhan, AU, Rajampet</p>
//                     <p>Mr. B. Murali Mohan, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Feedback and Certification Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Feedback and Certification Committee Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Mr. T. Arun Kumar, AU, Rajampet</p>
//                     <p>Mr. B. Anil Kumar, AU, Rajampet</p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </ContentBox>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default OrganisingCommittee;












// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContentBox from "@/components/ContentBox";
// import PageBanner from "@/components/PageBanner";

// const OrganisingCommittee = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-background text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
//       <Navbar />

//       <main className="flex-1">
//         <PageBanner />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
//           <div className="text-center mb-8 sm:mb-10">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
//               ORGANIZING COMMITTEE
//             </h1>
//           </div>

//           <ContentBox>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              
//               {/* Chief Patrons */}
//               <CommitteeCard
//                 title="Chief Patron(s):"
//                 members={[
//                   "Dr. C. Gangi Reddy, Chancellor, Annamacharya University, Rajampet",
//                   "Sri. C. Abhishek Reddy, Pro-chancellor, Annamacharya University, Rajampet",
//                 ]}
//               />

//               {/* Patrons */}
//               <CommitteeCard
//                 title="Patron(s):"
//                 members={[
//                   "Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University, Rajampet",
//                   "Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University, Rajampet",
//                 ]}
//               />

//               {/* General Chairs */}
//               <CommitteeCard
//                 title="General Chair(s):"
//                 members={[
//                   "Dr. S. M.V. Narayana, Principal, AITS, Rajampet",
//                   "Dr. Nalin Behari Dev Choudhury, Professor, NIT, Silchar",
//                 ]}
//               />

//               {/* Program Chairs */}
//               <CommitteeCard
//                 title="Program Chair(s):"
//                 members={[
//                   "Dr. P. Balachennaiah, HoD- EEE, Annamacharya University, Rajampet",
//                   "Dr. S. Albert Alexander, Professor, EEE, VIT, Vellore",
//                 ]}
//               />

//               {/* Organizing Convenors */}
//               <CommitteeCard
//                 title="Organizing Convenor(s):"
//                 members={[
//                   "Dr. M. Padma Lalitha, Professor, EEE, Annamacharya University, Rajampet",
//                   "Dr. O. Hemakesavulu, Professor, EEE, Annamacharya University, Rajampet",
//                 ]}
//               />

//               {/* Coordinators */}
//               <CommitteeCard
//                 title="Coordinator(s):"
//                 members={[
//                   "Dr. P. Bhaskara Prasad, Assistant Professor, EEE, Annamacharya University, Rajampet",
//                   "Dr. S. Sarada, Assistant Professor, EEE, Annamacharya University, Rajampet",
//                 ]}
//               />

//               {/* Conference Secretary */}
//               <CommitteeCard
//                 title="Conference Secretary:"
//                 members={[
//                   "Dr. S. Suresh, Associate Professor, EEE, Annamacharya University, Rajampet",
//                 ]}
//               />

//               {/* Advisors */}
//               <CommitteeCard
//                 title="Advisor(s):"
//                 members={[
//                   "Dr. A. Subbarami Reddy, Dean, Academics, AU, Rajampet",
//                   "Dr. N. Sivarami Reddy, Dean, R&D, AU, Rajampet",
//                   "Dr. M. Subba Rao, HOD-CSE, Dean of Student Affairs, AU, Rajampet",
//                   "Dr. D. Krishna Mohan Raju, Dean, Innovation and Incubation, AU, Rajampet",
//                   "Dr. B. Jayarami Reddy, Dy. Director Admissions, AU, Rajampet",
//                   "Dr. N. R. Gowthami, Assistant Professor & HOD Civil Engineering, AU, Rajampet",
//                   "Dr. G. Suresh Babu, Assistant Professor & HOD Mechanical Engineering, AU, Rajampet",
//                   "Dr. J. Chinna Babu, Associate Professor & HOD-ECE, AU, Rajampet",
//                   "Dr. P Phanindra Kumar Reddy, Associate Professor & HOD-AIDS, AU, Rajampet",
//                   "Dr. N. Penchalaiah, Associate Professor & HOD-AIML, AU, Rajampet",
//                   "Dr. L. Obulapathi, Associate Professor & HOD- H&S, AU, Rajampet",
//                   "Dr T Navaneetha, Assistant Professor & HOD- MBA, AU, Rajampet",
//                   "Dr. C. Madana Kumar Reddy, Associate Professor & HOD-MCA, AU, Rajampet",
//                 ]}
//               />

//               {/* Technical Program Chairs */}
//               <CommitteeCard
//                 title="Technical Program Chair(s):"
//                 members={[
//                   "Dr. R. Gnanadass, PTU, Puducherry",
//                   "Dr. V. Sandeep, NIT AP",
//                   "Dr. K. Harinath Reddy, AU, Rajampet",
//                   "Dr. C. Ganesh, AU, Rajampet",
//                   "Dr. N. Chinna Alluraiah, AU, Rajampet",
//                   "Dr. K. Vijaya Bhaskar, AU, Rajampet",
//                   "Mr. R. Madhan Mohan, AU, Rajampet",
//                   "Mr. M. Ramesh, AU, Rajampet",
//                   "Dr. P. Suresh Babu, AU, Rajampet",
//                 ]}
//               />

//               {/* Publication Chairs */}
//               <CommitteeCard
//                 title="Publication Chair(s):"
//                 members={[
//                   "Dr. S. Ravi Prakash Reddy, IIT, Mumbai",
//                   "Dr. S. Jeevananthan, PTU, Puducherry",
//                   "Dr. M. Venkatesan, NIT, Puducherry",
//                   "Dr. P. Gopi, AU, Rajampet",
//                   "Dr. Dhanunjaya Babu, AU, Rajampet",
//                   "Dr. S. Venkateswarlu Reddy, AU, Rajampet",
//                 ]}
//               />

//               {/* Publicity and Website Chairs */}
//               <CommitteeCard
//                 title="Publicity and Website Chair(s):"
//                 members={[
//                   "Dr. S. Muqthiar Ali, AU, Rajampet",
//                   "Mr. N. Sreeramula Reddy, AU, Rajampet",
//                   "Mr. Sai Sandeep, AU, Rajampet",
//                 ]}
//               />

//               {/* Registration Chairs */}
//               <CommitteeCard
//                 title="Registration Chair(s):"
//                 members={[
//                   "Mr. T. Penchalaiah, AU, Rajampet",
//                   "Mrs. A. Hima Bindu, AU, Rajampet",
//                   "Ms. S. Rubeena Bi, AU, Rajampet",
//                 ]}
//               />

//               {/* Finance Chairs */}
//               <CommitteeCard
//                 title="Finance Chair(s):"
//                 members={[
//                   "Dr. J. Sri Ranganayakulu, AU, Rajampet",
//                   "Mr. L. Baya Reddy, AU, Rajampet",
//                 ]}
//               />

//               {/* Accommodation Chairs */}
//               <CommitteeCard
//                 title="Accommodation Committee Chair(s):"
//                 members={[
//                   "Dr. P. Suresh Babu, AU, Rajampet",
//                   "Mr. M. Mahesh, AU, Rajampet",
//                 ]}
//               />

//               {/* Reception Chairs */}
//               <CommitteeCard
//                 title="Reception Chair(s):"
//                 members={[
//                   "Mrs. M. Swathi, AU, Rajampet",
//                   "Mrs. M. Swetha, AU, Rajampet",
//                 ]}
//               />

//               {/* Transport Chairs */}
//               <CommitteeCard
//                 title="Transport Committee Chair(s):"
//                 members={[
//                   "Dr. P. Bhakara Prasad, AU, Rajampet",
//                   "Mr. G. Mahaboob Subhan, AU, Rajampet",
//                   "Mr. B. Murali Mohan, AU, Rajampet",
//                 ]}
//               />

//               {/* Feedback and Certification Chairs */}
//               <CommitteeCard
//                 title="Feedback and Certification Committee Chair(s):"
//                 members={[
//                   "Mr. T. Arun Kumar, AU, Rajampet",
//                   "Mr. B. Anil Kumar, AU, Rajampet",
//                 ]}
//               />
//             </div>
//           </ContentBox>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// const CommitteeCard = ({ title, members }: { title: string; members: string[] }) => (
//   <div className="bg-white/80 border border-gray-200 shadow-sm rounded-2xl p-5 sm:p-6 hover:shadow-md transition-all duration-300">
//     <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 border-b border-primary/30 pb-1">
//       {title}
//     </h2>
//     <ul className="space-y-1 text-gray-800">
//       {members.map((m, i) => (
//         <li key={i}>{m}</li>
//       ))}
//     </ul>
//   </div>
// );

// export default OrganisingCommittee;


















// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContentBox from "@/components/ContentBox";
// import PageBanner from "@/components/PageBanner";

// const OrganisingCommittee = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-background text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
//       <Navbar />

//       <main className="flex-1">
//         <PageBanner />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
//           <div className="text-center mb-8 sm:mb-10">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
//               ORGANIZING COMMITTEE
//             </h1>
//           </div>

//           <ContentBox>
//             <div className="space-y-8 sm:space-y-10 text-left">

//               {/* Chief Patrons */}
//               <div className="flex flex-col items-center justify-center text-center my-4">
//                 <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                   Chief Patron(s):
//                 </h2>
//                 <div className="space-y-1">
//                   <p>Dr. C. Gangi Reddy, Chancellor, Annamacharya University, Rajampet</p>
//                   <p>Sri. C. Abhishek Reddy, Pro-chancellor, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Patrons */}
//               <div className="flex flex-col items-center justify-center text-center my-4">
//                 <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                   Patron(s):
//                 </h2>
//                 <div className="space-y-1">
//                   <p>Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University, Rajampet</p>
//                   <p>Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University, Rajampet</p>
//                 </div>
//               </div>

//               {/* Two-column layout */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">

//                 {/* General Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     General Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. S. M.V. Narayana, Principal, AITS, Rajampet</p>
//                     <p>Dr. Nalin Behari Dev Choudhury, Professor, NIT, Silchar</p>
//                   </div>
//                 </div>

//                 {/* Program Chairs */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Program Chair(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Balachennaiah, HoD- EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. S. Albert Alexander, Professor, EEE, VIT, Vellore</p>
//                   </div>
//                 </div>

//                 {/* Organizing Convenors */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Organizing Convenor(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. M. Padma Lalitha, Professor, EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. O. Hemakesavulu, Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Coordinators */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Coordinator(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. P. Bhaskara Prasad, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                     <p>Dr. S. Sarada, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Conference Secretary + Technical Program Chair(s) on same row */}
//                 <div className="flex flex-col justify-start space-y-4">
//                   <div>
//                     <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                       Conference Secretary:
//                     </h2>
//                     <p className="ml-3 sm:ml-6">
//                       Dr. S. Suresh, Associate Professor, EEE, Annamacharya University, Rajampet
//                     </p>
//                   </div>

//                   <div>
//                     <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                       Technical Program Chair(s):
//                     </h2>
//                     <div className="ml-3 sm:ml-6 space-y-1">
//                       <p>Dr. R. Gnanadass, PTU, Puducherry</p>
//                       <p>Dr. V. Sandeep, NIT AP</p>
//                       <p>Dr. K. Harinath Reddy, AU, Rajampet</p>
//                       <p>Dr. C. Ganesh, AU, Rajampet</p>
//                       <p>Dr. N. Chinna Alluraiah, AU, Rajampet</p>
//                       <p>Dr. K. Vijaya Bhaskar, AU, Rajampet</p>
//                       <p>Mr. R. Madhan Mohan, AU, Rajampet</p>
//                       <p>Mr. M. Ramesh, AU, Rajampet</p>
//                       <p>Dr. P. Suresh Babu, AU, Rajampet</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Advisor(s) */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
//                     Advisor(s):
//                   </h2>
//                   <div className="ml-3 sm:ml-6 space-y-1">
//                     <p>Dr. A. Subbarami Reddy, Dean, Academics, AU, Rajampet</p>
//                     <p>Dr. N. Sivarami Reddy, Dean, R&D, AU, Rajampet</p>
//                     <p>Dr. M. Subba Rao, HOD-CSE, Dean of Student Affairs, AU, Rajampet</p>
//                     <p>Dr. D. Krishna Mohan Raju, Dean, Innovation and Incubation, AU, Rajampet</p>
//                     <p>Dr. B. Jayarami Reddy, Dy. Director Admissions, AU, Rajampet</p>
//                     <p>Dr. N. R. Gowthami, Assistant Professor & HOD Civil Engineering, AU, Rajampet</p>
//                     <p>Dr. G. Suresh Babu, Assistant Professor & HOD Mechanical Engineering, AU, Rajampet</p>
//                     <p>Dr. J. Chinna Babu, Associate Professor & HOD-ECE, AU, Rajampet</p>
//                     <p>Dr. P Phanindra Kumar Reddy, Associate Professor & HOD-AIDS, AU, Rajampet</p>
//                     <p>Dr. N. Penchalaiah, Associate Professor & HOD-AIML, AU, Rajampet</p>
//                     <p>Dr. L. Obulapathi, Associate Professor & HOD- H&S, AU, Rajampet</p>
//                     <p>Dr T Navaneetha, Assistant Professor & HOD- MBA, AU, Rajampet</p>
//                     <p>Dr. C. Madana Kumar Reddy, Associate Professor & HOD-MCA, AU, Rajampet</p>
//                   </div>
//                 </div>

//                 {/* Remaining sections (Publication, Publicity, etc.) remain unchanged */}
//                 {/* ... keep all your remaining blocks below exactly as before ... */}
//               </div>
//             </div>
//           </ContentBox>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default OrganisingCommittee;



















import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";

const OrganisingCommittee = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
      <Navbar />

      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              ORGANIZING COMMITTEE
            </h1>
          </div>

          <ContentBox>
            <div className="space-y-8 sm:space-y-10 text-left">

              {/* Chief Patrons */}
              <div className="flex flex-col items-center justify-center text-center my-6">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                  Chief Patron(s):
                </h2>
                <div className="space-y-1">
                  <p>Dr. C. Gangi Reddy, Chancellor, Annamacharya University, Rajampet</p>
                  <p>Sri. C. Abhishek Reddy, Pro-chancellor, Annamacharya University, Rajampet</p>
                </div>
              </div>

              {/* Patrons */}
              <div className="flex flex-col items-center justify-center text-center my-6">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                  Patron(s):
                </h2>
                <div className="space-y-1">
                  <p>Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University, Rajampet</p>
                  <p>Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University, Rajampet</p>
                </div>
              </div>

              {/* Two-column layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

                {/* General Chairs */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    General Chair(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. S. M.V. Narayana, Principal, AITS, Rajampet</p>
                    <p>Dr. Nalin Behari Dev Choudhury, Professor, NIT, Silchar</p>
                  </div>
                </div>

                {/* Program Chairs */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Program Chair(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. P. Balachennaiah, HoD- EEE, Annamacharya University, Rajampet</p>
                    <p>Dr. S. Albert Alexander, Professor, EEE, VIT, Vellore</p>
                  </div>
                </div>

                {/* Organizing Convenors */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Organizing Convenor(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. M. Padma Lalitha, Professor, EEE, Annamacharya University, Rajampet</p>
                    <p>Dr. O. Hemakesavulu, Professor, EEE, Annamacharya University, Rajampet</p>
                  </div>
                </div>

                {/* Coordinators */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Coordinator(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. P. Bhaskara Prasad, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
                    <p>Dr. S. Sarada, Assistant Professor, EEE, Annamacharya University, Rajampet</p>
                  </div>
                </div>

                {/* Conference Secretary + Technical Program Chairs combined in one row */}
                <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                      Conference Secretary:
                    </h2>
                    <div className="ml-3 sm:ml-6">
                      <p>Dr. S. Suresh, Associate Professor, EEE, Annamacharya University, Rajampet</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                      Technical Program Chair(s):
                    </h2>
                    <div className="ml-3 sm:ml-6 space-y-1">
                      <p>Dr. R. Gnanadass, PTU, Puducherry</p>
                      <p>Dr. V. Sandeep, NIT AP</p>
                      <p>Dr. K. Harinath Reddy, AU, Rajampet</p>
                      <p>Dr. C. Ganesh, AU, Rajampet</p>
                      <p>Dr. N. Chinna Alluraiah, AU, Rajampet</p>
                      <p>Dr. K. Vijaya Bhaskar, AU, Rajampet</p>
                      <p>Mr. R. Madhan Mohan, AU, Rajampet</p>
                      <p>Mr. M. Ramesh, AU, Rajampet</p>
                      <p>Dr. P. Suresh Babu, AU, Rajampet</p>
                    </div>
                  </div>
                </div>

                {/* Advisors */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Advisor(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. A. Subbarami Reddy, Dean, Academics, AU, Rajampet</p>
                    <p>Dr. N. Sivarami Reddy, Dean, R&D, AU, Rajampet</p>
                    <p>Dr. M. Subba Rao, HOD-CSE, Dean of Student Affairs, AU, Rajampet</p>
                    <p>Dr. D. Krishna Mohan Raju, Dean, Innovation and Incubation, AU, Rajampet</p>
                    <p>Dr. B. Jayarami Reddy, Dy. Director Admissions, AU, Rajampet</p>
                    <p>Dr. N. R. Gowthami, Assistant Professor & HOD Civil Engineering, AU, Rajampet</p>
                    <p>Dr. G. Suresh Babu, Assistant Professor & HOD Mechanical Engineering, AU, Rajampet</p>
                    <p>Dr. J. Chinna Babu, Associate Professor & HOD-ECE, AU, Rajampet</p>
                    <p>Dr. P Phanindra Kumar Reddy, Associate Professor & HOD-AIDS, AU, Rajampet</p>
                    <p>Dr. N. Penchalaiah, Associate Professor & HOD-AIML, AU, Rajampet</p>
                    <p>Dr. L. Obulapathi, Associate Professor & HOD- H&S, AU, Rajampet</p>
                    <p>Dr T Navaneetha, Assistant Professor & HOD- MBA, AU, Rajampet</p>
                    <p>Dr. C. Madana Kumar Reddy, Associate Professor & HOD-MCA, AU, Rajampet</p>
                  </div>
                </div>

                {/* Publication Chairs */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Publication Chair(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. S. Ravi Prakash Reddy, IIT, Mumbai</p>
                    <p>Dr. S. Jeevananthan, PTU, Puducherry</p>
                    <p>Dr. M. Venkatesan, NIT, Puducherry</p>
                    <p>Dr. P. Gopi, AU, Rajampet</p>
                    <p>Dr. Dhanunjaya Babu, AU, Rajampet</p>
                    <p>Dr. S. Venkateswarlu Reddy, AU, Rajampet</p>
                  </div>
                </div>

                {/* Publicity and Website Chairs */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Publicity and Website Chair(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. S. Muqthiar Ali, AU, Rajampet</p>
                    <p>Mr. N. Sreeramula Reddy, AU, Rajampet</p>
                    <p>Mr. Sai Sandeep, AU, Rajampet</p>
                  </div>
                </div>

                {/* Registration Chairs */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Registration Chair(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Mr. T. Penchalaiah, AU, Rajampet</p>
                    <p>Mrs. A. Hima Bindu, AU, Rajampet</p>
                    <p>Ms. S. Rubeena Bi, AU, Rajampet</p>
                  </div>
                </div>

                {/* Finance Chairs */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Finance Chair(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. J. Sri Ranganayakulu, AU, Rajampet</p>
                    <p>Mr. L. Baya Reddy, AU, Rajampet</p>
                  </div>
                </div>

                {/* Accommodation Chairs */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Accommodation Committee Chair(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. P. Suresh Babu, AU, Rajampet</p>
                    <p>Mr. M. Mahesh, AU, Rajampet</p>
                  </div>
                </div>

                {/* Reception Chairs */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Reception Chair(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Mrs. M. Swathi, AU, Rajampet</p>
                    <p>Mrs. M. Swetha, AU, Rajampet</p>
                  </div>
                </div>

                {/* Transport Chairs */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Transport Committee Chair(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. P. Bhakara Prasad, AU, Rajampet</p>
                    <p>Mr. G. Mahaboob Subhan, AU, Rajampet</p>
                    <p>Mr. B. Murali Mohan, AU, Rajampet</p>
                  </div>
                </div>

                {/* Feedback and Certification Chairs */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Feedback and Certification Committee Chair(s):
                  </h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Mr. T. Arun Kumar, AU, Rajampet</p>
                    <p>Mr. B. Anil Kumar, AU, Rajampet</p>
                  </div>
                </div>
              </div>
            </div>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrganisingCommittee;
