import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { House } from "../models/House.js";

class HousesService {


  async getHouses() {
    const response = await api.get('api/houses');
    const houses = response.data.map(house => new House(house));

    AppState.houses = houses;
  }
}

export const housesService = new HousesService();