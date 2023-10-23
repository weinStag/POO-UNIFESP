import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { BikeModule } from './bike/bike.module';
import { UserModule } from './user/user.module';
import { BikeResolver } from './bike/bike.resolver';
import { UserResolver } from './user/user.resolver';
import { DatabaseModule } from './database/database.module';
import { BikeRepository } from './bike/repository/bike.repository';
import { PrismaService } from './database/service/prisma.service';
import { RentModule } from './rent/rent.module';
import { UserRepository } from './user/repository/user.repository';
import { RentResolver } from './rent/rent.resolver';
import { RentRepository } from './rent/repository/rent.repository';
import { BikeImagesModule } from './bike-images/bike-images.module';
import { ModelModule } from './model/model.module';
import { ModelProviderModule } from './model-provider/model-provider.module';
import { ProviderModule } from './provider/provider.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { CryptService } from './crypt/crypt.service';
import { CryptModule } from './crypt/crypt.module';
import { BikeImagesRepository } from './bike-images/repository/bike-images.repository';
import { BikeImagesResolver } from './bike-images/bike-images.resolver';
import { MaintenanceRepository } from './maintenance/repository/maintenance.repository';
import { MaintenanceResolver } from './maintenance/maintenance.resolver';
import { ModelRepository } from './model/repository/model.repository';
import { ModelResolver } from './model/model.resolver';
import { ModelProviderRepository } from './model-provider/repository/model-provider.repository';
import { ModelProviderResolver } from './model-provider/model-provider.resolver';
import { ProviderRepository } from './provider/repository/provider.repository';
import { ProviderResolver } from './provider/provider.resolver';
import { StationRepository } from './station/repository/station.repository';
import { StationResolver } from './station/station.resolver';
import { StationTypeRepository } from './station-type/repository/station-type.repository';
import { StationTypeResolver } from './station-type/station-type.resolver';
import { TypeRepository } from './type/repository/type.repository';
import { TypeResolver } from './type/type.resolver';
import { StationModule } from './station/station.module';
import { StationTypeModule } from './station-type/station-type.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      include: [
        BikeModule,
        UserModule,
        DatabaseModule,
        RentModule,
        BikeImagesModule,
        ModelModule,
        ModelProviderModule,
        ProviderModule,
        MaintenanceModule,
        StationModule,
        StationTypeModule,
        TypeModule,
      ],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // typePaths: ['./**/*.graphql'],
    }),
    BikeModule,
    UserModule,
    DatabaseModule,
    RentModule,
    BikeImagesModule,
    ModelModule,
    ModelProviderModule,
    ProviderModule,
    MaintenanceModule,
    StationModule,
    StationTypeModule,
    TypeModule,
    CryptModule,
  ],
  controllers: [],
  providers: [
    BikeResolver,
    UserResolver,
    BikeRepository,
    PrismaService,
    UserRepository,
    RentResolver,
    RentRepository,
    CryptService,
    BikeImagesRepository,
    BikeImagesResolver,
    MaintenanceRepository,
    MaintenanceResolver,
    ModelRepository,
    ModelResolver,
    ModelProviderRepository,
    ModelProviderResolver,
    ProviderRepository,
    ProviderResolver,
    StationRepository,
    StationResolver,
    StationTypeRepository,
    StationTypeResolver,
    TypeRepository,
    TypeResolver,
  ],
})
export class AppModule {}
