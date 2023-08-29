import SKILLS from "../models/mocked-data/mock-skills";

const getSkills = (skillsType) => {
   return SKILLS.filter((skill) => skill.type === skillsType);
} 

export default getSkills;