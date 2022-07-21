const assert = require('assert')
Feature('Liking Restaurants')

Before((I) => {
  I.amOnPage('/#/favorit')
})

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('#query')
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found')
})

Scenario('liking one restaurant', async (I) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found')

  I.amOnPage('/')

  I.seeElement('.restaurants-item-content a')

  const firstRestaurant = locate('.restaurants-item-content a').first()
  const firstRestaurantName = await I.grabTextFrom(locate('.restaurant-name').first())
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorit')
  I.seeElement('.restaurants-item')
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name')

  assert.strictEqual(firstRestaurantName, likedRestaurantName)
})

Scenario('unliking one restaurant', (I) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found')

  I.amOnPage('/')

  I.seeElement('.restaurants-item-content a')

  const firstRestaurant = locate('.restaurants-item-content a').first()
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorit')
  I.seeElement('.restaurants-item-content a')
  const firstRestaurantLiked = locate('.restaurants-item-content a').first()
  I.click(firstRestaurantLiked)

  I.seeElement('#likeButton')
  I.click('#likeButton')
})

Scenario('searching restaurants', async (I) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found')

  I.amOnPage('/')

  I.seeElement('.restaurants-item-content a')

  const names = []

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurants-item-content a').at(i))
    I.seeElement('#likeButton')
    I.click('#likeButton')
    names.push(await I.grabTextFrom('.restaurant-name'))
    I.amOnPage('/')
  }

  I.amOnPage('/#/favorit')
  I.seeElement('#query')

  const searchQuery = names[1].substring(1, 3)
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1)

  I.fillField('#query', searchQuery)
  I.pressKey('Enter')

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurants-item')
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants)

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant-name').at(index + 1))
    assert.strictEqual(name, visibleName)
  })
})
