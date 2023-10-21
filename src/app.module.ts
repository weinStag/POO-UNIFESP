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

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      include: [BikeModule, UserModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // typePaths: ['./**/*.graphql'],
    }),
    BikeModule,
    UserModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [BikeResolver, UserResolver],
})
export class AppModule {}
