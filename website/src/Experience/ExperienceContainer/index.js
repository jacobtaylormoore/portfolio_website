import BulletsContainer from './BulletsContainer';
import RoleCompanyDatesContainer from './RoleCompanyDatesContainer';
import './index.css';

function ExperienceContainer(props) {
    console.log(props.experience);
    return (
        <div id="ExperienceContainer">
            <RoleCompanyDatesContainer role={props.experience.role} company={props.experience.company} date={props.experience.date} />
            <BulletsContainer bullets={props.experience.bullets} />
        </div>
    );
}

export default ExperienceContainer;