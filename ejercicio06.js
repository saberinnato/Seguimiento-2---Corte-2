class AppointmentSystem {
    constructor() {
        this.appointments = [];
    }

    scheduleAppointment(name, date, time, doctor) {
        this.appointments.push({ name, date, time, doctor });
        console.log(`Cita programada para ${name} con el Dr. ${doctor} el ${date} a las ${time}`);
    }

    showAppointments() {
        this.appointments.sort((a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`));
        console.log('Citas programadas: ', this.appointments);
    }

    cancelAppointment(name) {
        this.appointments = this.appointments.filter(appointment => appointment.name !== name);
        console.log(`Cita cancelada para ${name}`);
    }
}

// Uso:
const system = new AppointmentSystem();
system.scheduleAppointment('Maria', '2024-10-10', '10:00', 'Perez');
system.scheduleAppointment('Juan', '2024-10-11', '11:00', 'Gomez');
system.showAppointments();
system.cancelAppointment('Juan');
system.showAppointments();
