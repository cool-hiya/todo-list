import React from "react";
import { connect } from "react-redux";
import Filter from "../filter";
import { filterChanged } from "../../actions";

const Filters = ({ filters, activeFilter, onFilterChanged }) => {
  const { id: activeId } = activeFilter;

  const renderFilters = () => {
    return filters.map(filter => {
      const { name, id } = filter;
      const isActive = activeId === id;

      if (!name) {
        return null;
      }

      return (
        <span key={id} onClick={() => onFilterChanged(filter)}>
          <Filter name={name} active={isActive} />
        </span>
      );
    });
  };

  return <div>{renderFilters()}</div>;
};

const mapStateToProps = ({ taskList: { filters, activeFilter } }) => {
  return { filters, activeFilter };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterChanged: filter => dispatch(filterChanged(filter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
