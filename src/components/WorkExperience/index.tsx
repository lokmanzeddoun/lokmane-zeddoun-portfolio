// import { FC } from "react";

// import Badge from "../Badge";

// interface WorkExperienceProps {
//     title: string;
//     workExperience: {
//         role: string;
//         company: string;
//         period: string;
//         description: string;
//         technologies: string[];
//     }[];
// }

// const WorkExperience: FC<WorkExperienceProps> = ({ workExperience, title }) => {
//     return (
//         <div id="experience">
//             <h1 className="pt-20 text-2xl font-base tracking-tight text-cyan-200">
//                 {title}
//             </h1>
//             <div className="flex flex-wrap justify-start mt-4">
//                 {
//                     workExperience.map((experience, index) => {
//                         return (
//                             <div key={index} className="flex flex-col justify-center w-full p-4 rounded-lg hover:bg-[#1e2d414d] mt-2 cursor-default">
//                                 <h3 className="text-lg font-light text-slate-200">
//                                     {experience.role} @ <span className="text-cyan-500">{experience.company}</span>
//                                 </h3>
//                                 <p className="mt-2 text-sm text-slate-300 font-extralight">
//                                     {experience.period}
//                                 </p>
//                                 <div className="mt-3 text-sm text-slate-400 leading-6">
//                                     {experience.description}
//                                 </div>
//                                 <div className="flex flex-wrap justify-start mt-3">
//                                     {
//                                         experience.technologies.map((tech, index) => {
//                                             return (
//                                                 <Badge key={index} text={tech} />
//                                             );
//                                         })
//                                     }
//                                 </div>
//                             </div>
//                         );
//                     })
//                 }
//             </div>
//         </div>
//     );
// }

// export default WorkExperience;