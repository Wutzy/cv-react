import { FunctionComponent } from "react";

interface Props  {
    selectedFile: string;
}

const DownloadButton:FunctionComponent<Props> = ({selectedFile}) => {
    return (
        <div className="center">
            <a href={selectedFile} target="_blank" rel="noreferrer">
                <i className='material-icons download-icon'>download</i>
            </a>    
        </div>
    );
};

export default DownloadButton;