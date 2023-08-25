import { FunctionComponent } from "react";
import './skill-bar.css';
import Skill from "../../../models/skill";

type SkillProps = {
    skill: Skill;
}

const SkillBar: FunctionComponent<SkillProps> = ({skill}) => {

    return (
            <div className="skill-bar">
                <div className="skill-title">
                    {skill.name}
                </div>
                <div className="skill-progress-bar">
                    <div className="bla" style={{ width: skill.xp + '%' }}>
                        <div className="progress-bar-animated">
                        </div>                    
                    </div>
                </div>
            </div>
    );
};

export default SkillBar;