
import React, { FunctionComponent, useEffect, useState } from 'react';
import Skill from '../../models/skill';
import SKILLS from '../../models/mock-skill';
import SkillBar from '../../components/knowledges/skill-bar';
import './knowledges.css'


const Knowledges: FunctionComponent = () => {

    const [skills, setSkill] = useState<Skill[]>([])

    useEffect(() => {
        setSkill(SKILLS);
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col s12 m6">
                    <div className='row'>
                        <div className='col s12'>
                            <h4>_Compétences</h4> 
                        </div>        
                    </div>
                    <div className='skill-box'>
                        <div className="row">
                            <div className="col s6 xp1">
                                1 an
                            </div>
                            <div className="col s6 xp2">
                                2 ans
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col s11">
                                {skills.map(skill => (
                                <SkillBar key={skill.id} skill={skill} /> 
                                ))}
                            </div>        
                        </div>
                    </div>
                    
                </div>
                <div className='col'>
                    weshu                
                </div>
            </div>
            
            
        </div>
    );
};

export default Knowledges;