import { Router } from 'express';
import toolsController from './controllers/ToolsController';
import validators from './validators/RoutesValidators';

const routes = Router();

routes.get('/tools', toolsController.index);
routes.get('/tags', validators.searchTags,toolsController.show);
routes.post('/tools', validators.createTool,toolsController.create);
routes.delete('/tools/:id', validators.deleteTool, toolsController.delete);

export default routes;
