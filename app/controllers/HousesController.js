import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";

export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses);
    this.getHouses();
  }

  async getHouses() {
    await housesService.getHouses();
  }

  drawHouses() {
    const houseListingElem = document.getElementById('house-listings');
    let houseCont = '';

    AppState.houses.forEach(house => houseCont += house.listingHTMLTemplate);
    houseListingElem.innerHTML = houseCont;
  }
}