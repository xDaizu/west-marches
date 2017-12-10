import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import events from './dummy_events';

export default class LetsMeetCalendar extends Component {
  formats = {
    dateFormat: 'dd',

    dayFormat: (date, culture, localizer) =>
      localizer.format(date, 'DDD', culture),

    dayRangeHeaderFormat: ({ start, end }, culture, local) =>
      local.format(start, { date: 'short' }, culture) + ' — ' +
      local.format(end, { date: 'short' }, culture)
  }
  render() {
    return (
      <div {...this.props}>
        <h3 className="callout">
          Click an event to see more info, or
          drag the mouse over the calendar to select a date/time range.
        </h3>
        <BigCalendar
          formats={this.formats}
          selectable
          events={events}
          views={['month', 'agenda']}
          defaultView='month'
          defaultDate={new Date()}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
          )}
        />
      </div>
    )
  }
}