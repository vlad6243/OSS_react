import React from 'react';
import PropTypes from 'prop-types';
import data from './data.json';

const PersonalInfo = ({ data }) => (
  <div className="personalInfo">
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

PersonalInfo.propTypes = {
    data:PropTypes.shape({
        _id:PropTypes.string.isRequired,
        guid:PropTypes.string.isRequired,
        isActive:PropTypes.bool.isRequired,
        balance:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        age:PropTypes.number,
        name:PropTypes.shape({
            first:PropTypes.string.isRequired,
            last:PropTypes.string.isRequired,
        }).isRequired,
        company:PropTypes.string.isRequired,
        email:PropTypes.string.isRequired,
        latitude:PropTypes.string,
        longitude:PropTypes.string,
        tags:PropTypes.arrayOf(
            PropTypes.node
        ).isRequired,
        range:PropTypes.arrayOf(PropTypes.number),
        friends:PropTypes.arrayOf(
            PropTypes.shape({
                id:PropTypes.number,
                name:PropTypes.string,
            })
        )
    })
}

class ShowPersonalInfo extends React.Component {
  state = { selectedCompanyId: 'disabled' };

  onSelect = (e) => {
    const selectedCompanyId = e.target.value;
    this.setState({ selectedCompanyId });
  };

  render() {
    const { companies } = this.props;
    const { selectedCompanyId } = this.state;
    const companyData = companies.find((i) => selectedCompanyId === i._id);
    return (
      <>
        <h3>Select person dossier</h3>
        <select value={selectedCompanyId} onChange={this.onSelect}>
          <option key="disabled" disabled value="disabled"></option>
          {companies.map((i) => (
            <option key={i._id} value={i._id}>
              {i._id}
            </option>
          ))}
        </select>
        {companyData && <PersonalInfo data={companyData} />}
      </>
    );
  }
}

const Task = () => {
  return (
    <div>
      <ShowPersonalInfo companies={data} />
    </div>
  );
};

export default Task;
