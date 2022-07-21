import CONFIG from '../../globals/config'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const createRestaurantDetailTemplate = (resto) => {
  const reviews = resto.customerReviews
  let reviewsList = ''
  reviews.forEach(rev => {
    reviewsList += `
      
        <div class="customer-reviews">
          <div class="name-date">
            <strong>${rev.name}</strong>
            <span>${rev.date}</span>
          </div>
          <div class="customer-review">
            <p>${rev.review}</p>
          </div>
        </div>
      
    `
  })

  const foods = resto.menus.foods
  let foodsList = ''
  foods.forEach(food => {
    foodsList += `
    <ul>
      <li>${food.name}</li>
    </ul>
    `
  })

  const drinks = resto.menus.drinks
  let drinksList = ''
  drinks.forEach(drink => {
    drinksList += `
    <ul>
      <li>${drink.name}</li>
    </ul>
    `
  })
  return `
  <h2 class="restaurant-name">${resto.name}</h2>
  <img class="restaurant-poster" src="${CONFIG.BASE_IMAGE_URL}large/${resto.pictureId}" alt="${resto.name}" />
  <div class="restaurant-info">
    <h2>Information</h2>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Address</h4>
    <p>${resto.address}</p>
    <h4>Rating</h4>
    <p>${resto.rating}</p>
  </div>
  <div class="restaurant-overview">
    <h2>Description</h2>
    <p>${resto.description}</p>
  </div>
  <div class="restaurant-overview">
    <div class="restaurant-menus">
      <div class="restaurant-foods">
        <h2>Food List</h2>
        <div class="restaurant-food-list">
          ${foodsList}
        </div>
      </div>
      <div class="restaurant-drinks">
        <h2>Drink List</h2>
        <div class="restaurant-drink-list">
          ${drinksList}
      </div>
    </div>
  </div>
  <div class="restaurant-overview">
      <h2>Customer Reviews</h2>
      <div class="customer-reviews-container">
        ${reviewsList}
      </div>
  </div>
`
}

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurants-item">
    <div class="restaurants-item-header">
        <img class="restaurants-item-header-poster lazyload" alt="${restaurant.name || '-'}" data-src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}">
        <div class="restaurants-item-header-rating">
            <p>&#9733;<span class="restaurants-item-header-rating-score">${restaurant.rating || '-'}</span></p>
        </div>
    </div>
    <div class="restaurants-item-content">
        <h3 class="restaurant-name">${restaurant.name || '-'}</h3>
        <h4>${restaurant.city}</h4>
        <p>${restaurant.description || '-'}</p>
        <a href="${`/#/detail/${restaurant.id}`}" class="cta">See Details</a>
    </div>
  </div>
  `
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate }
