import CompanyContainer from './CompanyContainer';
import DatesContainer from './DatesContainer';
import RoleContainer from './RoleContainer';
import './index.css';

function RoleCompanyDatesContainer(props) {
    return (
        <div id="RoleCompanyDatesContainer">
            <RoleContainer role={props.role} />
            <CompanyContainer company={props.company} />
            <DatesContainer date={props.date} />
        </div>
    );
}

export default RoleCompanyDatesContainer;