import React, { FunctionComponent } from 'react';


const Home: FunctionComponent = () => {
    return (
        <div>
            <h2 className='center'>
                Ma page d'accueil
            </h2>
            <div className="row">
                <div className="col s12">
                    <p>Télécharger mon CV PDF</p>
                    <i className='material-icons download-icon'>download</i>
                </div>
                
            </div>
        </div>

    );
};

export default Home;