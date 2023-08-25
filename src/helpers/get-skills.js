import SKILLS from "../models/mock-skills";

const getSkills = (skillsType) => {
   return  SKILLS.filter((skill) => skill.type === skillsType);
} 

export default getSkills;