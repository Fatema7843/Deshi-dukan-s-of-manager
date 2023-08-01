import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagergirlController } from './managergirl/managergirl.controller';
import { ManagergirlModule } from './managergirl/managergirl.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [ManagergirlModule,PaymentModule, TypeOrmModule.forRoot({
      type: 'postgres',
        host: 'localhost',
        port: 5434,
        username: 'postgres',
        password: 'fatema',
        database: 'managergirl',
        autoLoadEntities:true,
        synchronize: true,
}),
],
  controllers:[],
  providers: [],
})
export class AppModule {}