import {Body,Controller,Get,Post,Param,ValidationPipe,ParseIntPipe,UsePipes,Put,Delete,Session,Req,UseGuards,HttpException,HttpStatus} from "@nestjs/common";
import {ManagergirlDto} from "src/managergirl/managergirl.dto";
import {ManagergirlLoginDto} from "src/managergirl/managergirllogin.dto";
import {ManagergirlService} from 'src/managergirl/managergirl.service';
import {ManagergirlEntity} from "src/managergirl/managergirl.entity";
import * as session from 'express-session';
import {Request,Response} from 'express';
import { SessionGuard } from 'src/guards/session.guards';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('/managergirl')
export class ManagergirlController {
	constructor(private readonly managergirlService:ManagergirlService){}

	@Post('/insertManagergirl')
	@UseGuards(SessionGuard)
	@UsePipes(new ValidationPipe())
	insertAdmin (@Body() admindto:ManagergirlDto){
		return this.managergirlService.insertManagergirl(managergirldto);
	}

	@Get('/getManagergirl/:id')
	@UseGuards(SessionGuard)
	getManagergirl(@Param('id',ParseIntPipe)id:number):any
	{
      return this.managergirlService.getManagergirl(id);
	}
	
	@Delete('/deleteManagergirl/:id')
	@UseGuards(SessionGuard)
	deleteManagergirl(@Param('id',ParseIntPipe)id:number):any
	{
      return this.managergirlService.deleteManagergirl(id);
	}

	@Put('/updateManagergirl/:id')
	@UseGuards(SessionGuard)
	updateManagergirl(@Param('id',ParseIntPipe)
		id:number,@Body('name') name:string):any
	{
      return this.managergirlService.updateManagergirl(id,name);
	}
	
	@Get('/allManagergirl')
	@UseGuards(SessionGuard)
	allManagergirl():any
	{
      return this.managergirlService.allManagergirl();
	}


    @Post('/login')
    async login(@Body()user:ManagergirlLoginDto, @Session() session: Record<string,any>):Promise<any>
    {
    	const managergirl = await this.managergirlService.findOneByEmail(user.email);

    	if(managergirl && managergirl.password === user.password && managergirl.contact == user.contact)
    	{
    		session.adminid = managergirl.id;
    		return 'Login Successfully' ;
    	}

    	return 'Please Try Again' ;
    }



    @Post('/logout')
    @UseGuards(SessionGuard)
    async logout(@Session() session:Record<string,any>){
    	session.destroy();
    	return 'Logout Success' ;
    }


    @Post('/send-email')
    @UseGuards(SessionGuard)
    async sendEmail(@Body() emailData: { to: string; subject: string; text: string }) {
        try {
            await this.adminService.sendEmail(emailData.to, emailData.subject, emailData.text);
            return { message: 'Email sent successfully!' };
            } catch (error) {
                return { error: 'Failed to send email.' };
                }
               }

               
}