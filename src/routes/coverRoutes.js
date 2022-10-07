import coverController from '../controllers/CoverController';
import loginRequired from '../middlewares/loginRequired';
import BaseRoute from '../routes/baseRoutes'

class CoverRoutes extends BaseRoute{
  setup(){
    this.routes.use(loginRequired)
    this.routes.post('/:movie_id', coverController.store)

    return this.routes
  }
}

export default new CoverRoutes();
