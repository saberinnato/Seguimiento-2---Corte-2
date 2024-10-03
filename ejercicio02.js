class Hotel {
    constructor() {
        this.reservations = [];
        this.roomsAvailable = { individual: 10, doble: 5, familiar: 3 };
    }

    reserveRoom(name, roomType, people, smoker, pet) {
        if (this.roomsAvailable[roomType] > 0) {
            this.reservations.push({ name, roomType, people, smoker, pet });
            this.roomsAvailable[roomType]--;
            console.log(`Reserva confirmada para ${name} en una habitación ${roomType}`);
        } else {
            console.log('No hay habitaciones disponibles');
        }
    }

    showReservations() {
        console.log('Reservas actuales: ', this.reservations);
    }
}

// Uso:
const hotel = new Hotel();
hotel.reserveRoom('Juan', 'familiar', 4, false, true);
hotel.showReservations();
