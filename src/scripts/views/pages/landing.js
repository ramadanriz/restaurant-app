import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const LandingPage = {
  async render () {
    return `
        <div class="hero">
          <div class="hero-inner">
            <h1 class="hero-title">You don’t need a silver fork to eat good food.</h1>
            <p class="hero-tagline">Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.</p>
          </div>
        </div>
        <div class="content">
          <div id="restaurants" class="restaurants">

          </div>
        </div>
      `
  },

  async afterRender () {
    const restaurant = await RestaurantSource.landingPage()
    const moviesContainer = document.querySelector('#restaurants')
    restaurant.forEach((resto) => {
      moviesContainer.innerHTML += createRestaurantItemTemplate(resto)
    })
  }
}

export default LandingPage
