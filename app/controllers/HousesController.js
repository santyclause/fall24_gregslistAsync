import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses);
    this.getHouses();
  }

  async getHouses() {
    try {
      await housesService.getHouses();
    } catch (error) {
      Pop.error(error);
      console.error(error);
    }
  }

  drawHouses() {
    const houseListingElem = document.getElementById('house-listings');
    let houseCont = '';

    AppState.houses.forEach(house => houseCont += house.listingHTMLTemplate);
    houseListingElem.innerHTML = houseCont;
  }
}