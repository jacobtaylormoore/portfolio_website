import ProjectsTitleContainer from './ProjectsTitle';
import './index.css';
import ProjectContainer from './ProjectContainer';

function Projects() {

    let entries = [
        [
            "Levrum's Code3 Coverage Cloud App",
            ["React", "C#", "AWS"],
            "A previous group of interns had begun to build a cloud application for Levrum’s Code3 Coverage tool, which provides counties and fire stations essential data about travel times within their jurisdiction. Our group took the minor existing codebase, restructured the API to adhere to SOLID principles, modularized the design, and deployed a full minimum viable product which is now in use."
        ],
        [
            "Wasteagram Mobile App",
            ["Flutter", "Dart", "Google Firebase"],
            "A full stack Flutter mobile app clone of Instagram designed for small business owners to keep track of inventory. The app works with iOS and Android, accessing camera roll and photo library resources and connects to Google Firebase database, storing photos on Firestore."
        ],
        [
            "NBA Quiz React App (Hackathon Submission)",
            ["JavaScript", "React", "Material UI"],
            "An NBA quiz game created for a hackathon, built from scratch within the allotted 72-hour time frame. A user selects a date and the application calls the NBA api to collect data on every game from that date. The user then selects which game they would like to be quizzed on and the app presents 5 pseudo-random questions regarding various aspects of the box score."
        ],
        [
            "Audio Cat Streaming Service",
            ["Python", "Flask", "MySQL"],
            "A full-stack audio streaming website built with Python and Flask that stores information about artists, songs, albums, users, and playlists on a MySQL relational database. The website is designed with Jinja2 and demonstrates proficiency with full stack web design as well as database design and management."
        ]
    ];

    return (



        <div id="Projects">
            <ProjectsTitleContainer />
            <ProjectContainer project={entries[0]} />
            <ProjectContainer project={entries[1]} />
            <ProjectContainer project={entries[2]} />
            <ProjectContainer project={entries[3]} />
        </div>
    );
}

export default Projects;