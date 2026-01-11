import { Router} from "express";
import { NotificationController } from "./notification.controller.mjs";
import { NotificationModel } from "./notification.model.mjs";

const router = Router();
const notificationController = new NotificationController({NotificationModel: NotificationModel});

// Rutas relacionadas con las notificaciones 
//Rutas para obtener todas las notificaciones del sistema
router.get('/all', notificationController.getAllNotifications);

export const NotificationRoutes = router;
