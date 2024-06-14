import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DbModule } from './lib/resources/db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    DbModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
