class UniversityService {
    constructor() {
        this.attendedUsers = [];
    }

    attendUser(id, type) {
        this.attendedUsers.push({ id, type });
        console.log(`Atención registrada para ID: ${id} - Tipo: ${type}`);
    }

    getStatistics() {
        const stats = this.attendedUsers.reduce((acc, user) => {
            acc[user.type] = (acc[user.type] || 0) + 1;
            return acc;
        }, {});
        console.log('Estadísticas de atención: ', stats);
    }
}

// Uso:
const service = new UniversityService();
service.attendUser('123456', 'Llamada');
service.attendUser('654321', 'Asesoría Estudiante');
service.getStatistics();
