import SmallContainer from './SmallContainer';
import React, { useState } from 'react';
import './index.css';


function ProjectContainer(props) {
    // const [isLarge, setIsLarge] = useState(false);
    return (
        // <div id="MediumProjectContainer" onMouseEnter={() => setIsLarge(true)} onMouseLeave={() => setIsLarge(false)}>
        // onClick={() => setIsLarge(!isLarge)}
        <div id="ProjectContainer" >
            {/* {isLarge === true ? <LargeContainer /> : <SmallContainer />} */}
            <SmallContainer project={props.project} />
            {/* <PicNameTechContainer />
            <BriefDescriptionContainer /> */}
            {/* {isLarge && (
                <VideoContainer style={{ flex: 3 }} />
            )} */}
        </div>
    );
}

export default ProjectContainer;