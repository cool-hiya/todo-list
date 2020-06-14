import React, { useEffect } from "react";
import Calendar from "../calendar";
import "./date-selector.scss";

const DateSelector = ({
  date,
  buttons,
  selectedButton,
  onButtonSelected,
  onDateSelected
}) => {
  useEffect(() => {
    onDateSelected(selectedButton.value);
  }, [selectedButton, onDateSelected]);

  const renderCalendar = () => {
    if (selectedButton.hasCalendar) {
      return (
        <Calendar
          selected={date}
          onChange={date => onDateSelected(date)}
          inline
        />
      );
    }
  };

  const renderButtons = () => {
    return buttons.map(button => {
      const { id, label } = button;
      const className = selectedButton.id === id ? "_selected" : "";
      return (
        <button
          className={className}
          onClick={() => onButtonSelected(button)}
          key={id}
          type="button"
        >
          {label}
        </button>
      );
    });
  };

  return (
    <div>
      {renderButtons()}
      {renderCalendar()}
    </div>
  );
};

export default DateSelector;
