import {db} from '../../../database/db.database.mjs';

export class NotificationModel {
    // Metodo para obtener todas las notificaciones del sistema
    static async getAllNotifications() {
        const [notifications] = await db.query ('SELECT * FROM notifications');
        if (notifications.length === 0) return {error: ' no hay notificaciones en el sistema'};
        return {
            message: 'notificaciones obtenidas exitosamente',
            notifications: notifications
        }
    }
}