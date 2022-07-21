import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantSource {
  static async landingPage () {
    const response = await fetch(API_ENDPOINT.LANDINGPAGE)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detail (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default RestaurantSource
