import { Field, ObjectType } from '@nestjs/graphql';
import { BikeSchema } from 'src/bike/schema/bike.schema';

//   id     String @default(uuid())
//   url    String
//   bike   bike   @relation(fields: [bikeId], references: [id])
//   bikeId String

@ObjectType()
export class BikeImagesSchema {
  @Field({ description: 'Bike image ID' })
  id: string;

  @Field({ description: 'Bike image URL' })
  url: string;

  @Field(() => BikeSchema, { description: 'Bike image bike' })
  bike?: BikeSchema;

  @Field({ description: 'Bike image bike ID' })
  bikeId: string;
}
