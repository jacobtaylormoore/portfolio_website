import SmallContainer from './SmallContainer';
import LargeContainer from './LargeContainer';
import React, { useState } from 'react';
import './index.css';


function ProjectContainer() {
    const [isLarge, setIsLarge] = useState(false);
    return (
        // <div id="MediumProjectContainer" onMouseEnter={() => setIsLarge(true)} onMouseLeave={() => setIsLarge(false)}>
        <div id="ProjectContainer" onClick={() => setIsLarge(!isLarge)}>
            {isLarge === true ? <LargeContainer /> : <SmallContainer />}
            {/* <PicNameTechContainer />
            <BriefDescriptionContainer /> */}
            {/* {isLarge && (
                <VideoContainer style={{ flex: 3 }} />
            )} */}
        </div>
    );
}

export default ProjectContainer;