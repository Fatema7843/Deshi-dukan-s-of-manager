import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ManagergirlEntity } from "./managergirl.entity";
import { ManagergirlController } from "src/managergirl/managergirl.controller";
import { ManagergirlService } from "src/managergirl/managergirl.service";
import { MailerModule } from '@nestjs-modules/mailer'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([ManagergirlEntity]),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'sellerbuddycc@gmail.com',
          pass: 'yrirwkvmsfqjkqnc',
        },
      }
    })
  ],
  controllers: [ManagergirlController],
  providers: [ManagergirlService],
})
export class AdminModule {}