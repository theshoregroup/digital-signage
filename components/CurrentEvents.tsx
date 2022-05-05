
// This isn't perfect, but this takes an 'event' - in the case that it is a birthday, the eventName should have the user name passed through.
interface Props {
    eventName: string
    eventType: 'birthday' | 'workAnniversary' | 'bankHoliday' | 'other';
    startsAt: Date;
    endsAt: Date;
}

// The starts/ends at props are used to display one of three states - today, upcoming or ongoing
// The actual selection of events happens in the backend, so this is just a placeholder

export default function CurrentEvents({eventName, eventType, startsAt, endsAt}: Props) {
    return (
        <div>
            current events
        </div>
    )
}