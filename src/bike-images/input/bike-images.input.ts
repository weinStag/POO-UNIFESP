import { Field, InputType } from '@nestjs/graphql';

//   id     String @default(uuid())
//   url    String
//   bike   bike   @relation(fields: [bikeId], references: [id])
//   bikeId String

@InputType()
export class BikeImagesInput {
  @Field({ description: 'Bike image ID' })
  id: string;

  @Field({ description: 'Bike image URL' })
  url: string;

  @Field({ description: 'Bike image bike ID' })
  bikeId: string;
}
