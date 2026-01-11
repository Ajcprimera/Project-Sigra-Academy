export class NotificationController {
    constructor ({NotificationModel}){
        this.NotificationModel = NotificationModel;
    }
    // Metodo para obtener todas las notificaciones del sistema
    getAllNotifications = async (req, res) => {
        try {
            const result = await this.NotificationModel.getAllNotifications();
            if (result.error) return res.status(404).json({error: result.error});
            return res.status(200).json({ 
                message: result.message,
                notifications: result.notifications
            });
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }
}


