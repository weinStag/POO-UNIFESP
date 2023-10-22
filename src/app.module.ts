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
import { ModelModule } from './model/model.module';
import { ModelProviderModule } from './model-provider/model-provider.module';
import { ProviderModule } from './provider/provider.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      include: [BikeModule, UserModule, DatabaseModule, RentModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // typePaths: ['./**/*.graphql'],
    }),
    BikeModule,
    UserModule,
    DatabaseModule,
    RentModule,
    ModelModule,
    ModelProviderModule,
    ProviderModule,
  ],
  controllers: [],
  providers: [BikeResolver, UserResolver, BikeRepository, PrismaService, UserRepository, RentResolver, RentRepository],
})
export class AppModule {}
