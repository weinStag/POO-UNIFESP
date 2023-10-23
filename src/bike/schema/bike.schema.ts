import { Field, Float, ObjectType } from '@nestjs/graphql';
import { MaintenanceSchema } from 'src/maintenance/schema/maintenance.schema';
import { ModelSchema } from 'src/model/schema/model.schema';

@ObjectType()
export class BikeSchema {
  @Field({ description: 'Bike ID' })
  id: string;

  @Field({ description: 'Bike Location' })
  location: string;

  @Field(() => Float, { description: 'Bike max weight' })
  maxWeight: number;

  @Field({ description: 'Bike description' })
  description: string;

  @Field(() => Boolean, { description: 'Bike availability' })
  available: boolean;

  @Field(() => Boolean, { description: 'Bike is active' })
  active: boolean;

  @Field(() => Float, { description: 'Bike value per hour' })
  valuePerHour: number;

  @Field(() => [ModelSchema], { description: 'Bike model' })
  model?: ModelSchema[];

  @Field(() => String, { description: 'Bike model' })
  modelId: string;

  @Field(() => [MaintenanceSchema], { description: 'Bike maintenances' })
  maintenances?: MaintenanceSchema[];
}
