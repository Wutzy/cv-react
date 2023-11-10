import { FunctionComponent } from 'react';
import myCV from '../../medias/CV.pdf';
import DownloadButton from '../../components/download-button/downloadButton';
import './home.css';


const Home: FunctionComponent = () => {
    return (
        <div>
            <div className="row">
                <div className="col s12 home-box">
                    <div className="description">
                        <p>Bonjour à tous, moi c'est Anis ! </p>
                        <p> Je suis un jeune homme passionné par le web et ses différents langages et outils.</p>
                        <p>Suite à une formation en JavaScript, je suis depuis apprennant
                            autodidacte toujours prêt à apprendre de nouvelles choses.</p>
                        <p>Durant mon parcours, j'ai pu compter sur mes qualités d'organisation, mon sens de l'analyse et ma rigueur pour accomplir mes objectifs avec efficacité.
                            Les différents échanges entretenus m'ont appris à traiter les objections avec diplomatie et rigueur.
                        </p>
                        <p>
                        Actuellement en recherche d'une entreprise avec laquelle je pourrai m'épanouir, consolider
                        mon savoir-faire et apporter ma bonne humeur à ma future équipe !
                        </p>
                        <p className='center'>Pour télécharger mon CV en format PDF interactif, c'est par ici :</p>
                        <p className='center'>(cliquez sur un projet pour le voir)</p>
                        <DownloadButton selectedFile = {myCV} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;