import './index.css';
import Image from '../../../images/headshot.jpg';

function PictureContainer() {
    return (
        <div className='PictureContainer' id='PictureContainer'>
            <div id="PictureHeader">
                <h1>Pictures</h1>
            </div>
            <div id="PictureWrap">
                <div id="EmptySpace"></div>
                <img id="Picture" src={Image} alt="headshot" />
                <div id="EmptySpace"></div>
            </div>
        </div>
    )
}

export default PictureContainer;