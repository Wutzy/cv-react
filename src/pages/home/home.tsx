import { FunctionComponent } from 'react';
import myCV from '../../medias/CV.pdf';
import DownloadButton from '../../components/download-button/downloadButton';
import profileImg from '../../medias/randy.jpg';
import './home.css';


const Home: FunctionComponent = () => {
    return (
        <div>
            <div className="row">
                <div className="col s12 home-box">
                    <div className="description">
                        <p>Bonjour à tous, moi c'est Anis ! </p>
                        <p> Je suis un jeune homme passioné par le web et ses différents languages.</p>
                        <p>Suite à une formation en Javascript, je suis depuis apprennant
                            autodidacte en recherche d'une première entreprise avec laquelle je pourrai m'épanouir et consolider
                            mon savoir-faire et apporter ma bonne humeur à ma future équipe !</p>
                        <p>Etant junior j'ai hâte de pouvoir apprendre des developpeurs expérimentés/seniors et en apprendre plus.</p>
                        <p className='center'>Pour télécharger mon CV en format PDF, c'est par ici :</p>
                        <DownloadButton selectedFile = {myCV} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;