/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb'
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view'
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter'
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter'

const view = new FavoriteRestaurantSearchView()

const Favorit = {
  async render () {
    return view.getTemplate()
  },

  async afterRender () {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb })
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb })
  }
}

export default Favorit
