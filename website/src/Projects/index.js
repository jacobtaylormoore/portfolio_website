import ProjectsTitleContainer from './ProjectsTitle';
import './index.css';
import ProjectContainer from './ProjectContainer';

function Projects() {

    let entries = [
        [
            "Levrum's Code3 Coverage Cloud App",
            ["React", "C#", "AWS"],
            "Our team embarked on enhancing Levrum's Code3 Coverage tool by revamping an existing cloud application. This tool is pivotal for counties and fire stations, offering crucial data on travel times within their jurisdiction. We took the pre-existing codebase and executed a comprehensive restructuring, aligning the API with SOLID principles, and implementing a modularized design. The result? A fully functional minimum viable product that is now actively in use."
        ],
        [
            "Wasteagram Mobile App",
            ["Flutter", "Dart", "Google Firebase"],
            "A robust Flutter mobile app, affectionately dubbed 'Wasteagram', mirrors the familiar Instagram functionality. This app caters to small business owners, empowering them to manage their inventory seamlessly. It operates on both iOS and Android, granting access to camera roll and photo library resources and connects to Google Firebase for database management, storing photos on Firestore."
        ],
        [
            "NBA Quiz React App (Hackathon Submission)",
            ["JavaScript", "React", "Material UI"],
            "Our whirlwind development journey led us to craft the NBA Quiz React App within the thrilling 72-hour time frame of a hackathon. This interactive quiz game lets users pick a date, prompting the application to fetch data from the NBA API for all games on that day. Users can then select their desired game and engage with 5 pseudo-random questions on various facets of the box score."
        ],
        [
            "'Audio Cat' Streaming Service",
            ["Python", "Flask", "MySQL"],
            "Delve into the world of music with our comprehensive 'Audio Cat' streaming service. This full-stack audio streaming website, developed using Python and Flask, securely stores information about artists, songs, albums, users, and playlists on a robust MySQL relational database. The website, aesthetically designed with Jinja2, is a testament to our proficiency in full-stack web design and database management."
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