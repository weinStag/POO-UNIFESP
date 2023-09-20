import axios from 'axios';
import { Location } from "./location";

export class Bike {
    constructor(
        public name: string,
        public type: string,
        public bodySize: number,
        public maxLoad: number,
        public rate: number,
        public description: string,
        public ratings: number,
        public imageUrls: string[],
        public available: boolean = true,
        public location: Location = new Location(0.0, 0.0),
        public id?: string
    ) {}
    
  async getLocation(): Promise<string | null> {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
        params: {
          lat: this.location.latitude,
          lon: this.location.longitude,
          format: 'json',
        },
      });

      const address = response.data.display_name;
      return address;
    } catch (error) {
      throw new Error('Error during reverse geocoding:' + error);
    }
  }

  async updateLocation(newLocation: Location) {//Promise<boolean> {
    try {
      this.location = newLocation;

      // const updatedAddress = await this.getLocation();

      // if (updatedAddress) {
      //   console.log(`Bike location updated to: ${updatedAddress}`);
      // } else {
      //   console.log('Bike location updated, but address retrieval failed.');
      // }

      return true;
    } catch (error) {
      throw new Error('Error during location update:' + error);
    }
  }
  
}
