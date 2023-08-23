import { FunctionComponent } from "react";
import React from 'react';
import Skill from "../../models/skill";
import './skill-bar.css'

type SkillProps = {
    skill: Skill;
}

const SkillBar: FunctionComponent<SkillProps> = ({skill}) => {

    return (
            <div className="skill-bar">
                <div className="skill-title">
                    {skill.name}
                </div>
                <div className="skill-progress-bar" style={{ width: skill.years + '%' }}>
                </div>
            </div>
    );
};

export default SkillBar;