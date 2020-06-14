export default class DateButton {
  constructor(id, label, value, hasCalendar = false) {
    this.id = id;
    this.label = label;
    this.value = value;
    this.hasCalendar = hasCalendar;
  }
}
