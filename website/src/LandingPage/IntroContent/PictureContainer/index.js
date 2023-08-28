import './index.css';
import Image from '../../../images/headshot.jpg';

function PictureContainer() {
    return (
        <div className='PictureContainer' id='PictureContainer'>
            <img id="Picture" src={Image} alt="headshot" />
        </div>
    )
}

export default PictureContainer;