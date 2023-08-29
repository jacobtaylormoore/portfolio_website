import './index.css';

function CompanyContainer(props) {
    return (
        <div id="CompanyContainer">
            <p>{props.company}</p>
        </div>
    );
}

export default CompanyContainer;