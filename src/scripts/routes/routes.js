import LandingPage from '../views/pages/landing'
import Detail from '../views/pages/detail'
import Favorit from '../views/pages/favorit'

const routes = {
  '/': LandingPage, // default page
  '/favorit': Favorit,
  '/detail/:id': Detail
}

export default routes
