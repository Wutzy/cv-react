import { FunctionComponent, useState } from 'react';
import SoftSkill from '../../../models/soft-skill';
import SOFTSKILLS from '../../../models/mocked-data/mock-softs-skills';


const SoftSkillsPanel: FunctionComponent = () => {

    const [softSkills, setSoftSkills] = useState<SoftSkill[]>([]);

    setSoftSkills(SOFTSKILLS);

    return (
        <div>
            <ul>
                {softSkills.map(softSkill => (
                    <li>{softSkill.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SoftSkillsPanel;