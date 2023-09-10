import exprees from 'express';
import { getMenu, getMenuById, createMenu, updateMenu, deleteMenu } from '../controllers/menuController.js';
const router = exprees.Router();

router.get('/menu', getMenu);
router.get('/menu/:id', getMenuById);
router.post('/menu', createMenu);
router.patch('/menu/:id', updateMenu);
router.delete('/menu/:id', deleteMenu);
export default router;
