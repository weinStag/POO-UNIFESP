import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/service/prisma.service';
import { BikeImagesInput } from '../input/bike-images.input';
import { BikeImagesSchema } from '../schema/bike-images.schema';

@Injectable()
export class BikeImagesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async add(bikeImages: BikeImagesInput): Promise<void> {
    await this.prismaService.bike_images.create({ data: bikeImages });
  }

  public async find(id: string): Promise<BikeImagesSchema> {
    return await this.prismaService.bike_images.findUnique({ where: { id } });
  }

  public async list(): Promise<BikeImagesSchema[]> {
    return await this.prismaService.bike_images.findMany();
  }

  public async remove(id: string): Promise<void> {
    await this.prismaService.bike_images.delete({ where: { id } });
  }

  public async update(bikeImages: BikeImagesInput): Promise<void> {
    await this.prismaService.bike_images.update({
      where: { id: bikeImages.id },
      data: bikeImages,
    });
  }
}
