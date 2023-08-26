import CompanyContainer from './CompanyContainer';
import DatesContainer from './DatesContainer';
import RoleContainer from './RoleContainer';
import './index.css';

function RoleCompanyDatesContainer() {
    return (
        <div id="RoleCompanyDatesContainer">
            <RoleContainer />
            <CompanyContainer />
            <DatesContainer />
        </div>
    );
}

export default RoleCompanyDatesContainer;