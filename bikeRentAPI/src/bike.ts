import axios from 'axios';

export class Bike {
  public available = true;
  constructor(
    public name: string,
    public type: string,
    public bodysize: number,
    public maxLoad: number,
    public rate: number,
    public description: string,
    public ratings: number,
    public imageUrls: string[],
    public location: {
      latitude: number;
      longitude: number;
    },
    public id?: string
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.bodysize = bodysize;
    this.maxLoad = maxLoad;
    this.rate = rate;
    this.description = description;
    this.ratings = ratings;
    this.imageUrls = imageUrls;
    this.location = location;
  }

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
      console.error('Error during reverse geocoding:', error);
      return null;
    }
  }

  async updateLocation(newLatitude: number, newLongitude: number): Promise<boolean> {
    try {
      this.location.latitude = newLatitude;
      this.location.longitude = newLongitude;

      const updatedAddress = await this.getLocation();

      if (updatedAddress) {
        console.log(`Bike location updated to: ${updatedAddress}`);
      } else {
        console.log('Bike location updated, but address retrieval failed.');
      }

      return true;
    } catch (error) {
      console.error('Error during location update:', error);
      return false;
    }
  }
  
}
