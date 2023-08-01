import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ManagergirlEntity } from "src/managergirl/managergirl.entity";
import { ManagergirlDto } from "src/managergirl/managergirl.dto";
import { ManagergirlLoginDto } from "src/managergirl/managergirllogin.dto";
import { MailerService } from '@nestjs-modules/mailer';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(ManagergirlEntity)
    private managergirlRepository: Repository<ManagergirlEntity>,
    private mailerService: MailerService, 
  ) {}

  async sendEmail(to: string, subject: string, text: string) {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        text,
      });
    } catch (error) {
      throw new Error('Failed to send email.');
    }
  }

  
  insertManagergirl(mydto:ManagergirlDto):any{
    return this.managergirlRepository.save(mydto);
  }


  getManagergirl(id):any{
    return this.managergirlRepository.find({where:{id:id}},)
  }

  deleteManagergirl(id): any {
    return this.managergirlRepository.delete(id);
  }

  async updateManagergirl(id: number, name: string): Promise<string> {
    const result = await this.managergirlRepository.update(id, { name});

    if (result.affected > 0) {
      return 'Manager updated successfully done';
    } else {
      return 'Manager not found';
    }
  }

  allManagergirl(): any {
    return this.managergirlRepository.find();
  }


  async findOneByEmail(email:string):Promise<ManagergirlEntity | undefined> {
    return this.managergirlRepository.findOne({where: {email }});
  }



  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return hashedPassword;
  }



}
    
    