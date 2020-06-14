import React, { useState } from "react";
import Calendar from "../calendar";
import "./add-filter.scss";
import { format } from "date-fns";
import { connect } from "react-redux";
import { optionalFilterAdded } from "../../actions";

const AddFilter = ({ onFilterAdded }) => {
  const [isCalendarOpen, setCalendarVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  const onDateChanged = date => {
    setDate(date);
    onFilterAdded({ value: date, name: format(date, "d MMMM") });
  };

  const renderCalendarModal = () => {
    if (!isCalendarOpen) {
      return null;
    }

    return (
      <div className="add-filter__calendar-modal">
        <button onClick={() => setCalendarVisibility(false)}>Close</button>
        <Calendar selected={date} onChange={onDateChanged} inline />
      </div>
    );
  };

  return (
    <div>
      <button type="button" onClick={() => setCalendarVisibility(true)}>
        Add filter
      </button>
      {renderCalendarModal()}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterAdded: data => dispatch(optionalFilterAdded(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddFilter);
