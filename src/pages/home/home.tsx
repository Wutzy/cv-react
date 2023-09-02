import { FunctionComponent } from 'react';
import myCV from '../../medias/CV.pdf';
import DownloadButton from '../../components/downloadButton';
import './home.css';


const Home: FunctionComponent = () => {
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <p>Quelques mots sur moi:</p>
                    <p>Bonjour à tous, je m'appelle Anis et je suis un jeune homme passioné par le web
                     et ses différents languages.</p>
                     <p>Suite à une formation en Javascript, je suis depuis apprennant 
                        autodidacte en recherche d'une première entreprise avec laquelle je pourrai m'épanouir et consolider
                        mon savoir-faire et ma bonne humeur à ma future équipe !</p>
                    <p>Etant junior j'ai hâte de pouvoir apprendre des developpeurs expérimentés/seniors et en apprendre plus.</p>
                    <DownloadButton selectedFile = {myCV} />
                </div>            
            </div>
        </div>
    );
};

export default Home;