import React from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

// Images
import Beach from '../../../../../images/beach.jpg';
import Baylor from '../../../../../images/baylor.png';
import ChildSnow from '../../../../../images/child_snow.jpg';
import Fair from '../../../../../images/fair.jpg';
// import FC from '../../../../../images/fc.jpg';
import Greece from '../../../../../images/greece.jpg';
import Luka from '../../../../../images/luka.jpg';
import OnSet from '../../../../../images/on_set.jpg';
import Skiing from '../../../../../images/skiing.jpg';
import Spurs from '../../../../../images/spurs.jpg';
import Sunset from '../../../../../images/sunset.jpg';
import Triathlon from '../../../../../images/triathlon.jpg';
import Wedding from '../../../../../images/wedding.jpg';

const images = [
    {
        original: Baylor,
        thumbnail: Baylor,
    },
    {
        original: Beach,
        thumbnail: Beach,
    },
    {
        original: ChildSnow,
        thumbnail: ChildSnow,
    },
    {
        original: Fair,
        thumbnail: Fair,
    },
    // {
    //     original: FC,
    //     thumbnail: FC,
    // },
    {
        original: Greece,
        thumbnail: Greece,
    },
    {
        original: Luka,
        thumbnail: Luka,
    },
    {
        original: OnSet,
        thumbnail: OnSet,
    },
    {
        original: Spurs,
        thumbnail: Spurs,
    },
    {
        original: Sunset,
        thumbnail: Sunset,
    },
    {
        original: Skiing,
        thumbnail: Skiing,
    },
    {
        original: Triathlon,
        thumbnail: Triathlon,
    },
    {
        original: Wedding,
        thumbnail: Wedding,
    },
];

class MyGallery extends React.Component {
    render() {
        return <ImageGallery items={images} />;
    }
}

export default MyGallery;