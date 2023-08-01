import { Controller, Get, Post,Req,Res, Body, Param, Delete, UsePipes, ValidationPipe  } from '@nestjs/common';
import { AppService } from './app.service';
import { AssignDto } from './dto/assign.dto';
import { ValidationDto } from './dto/validation.dto';
import * as session from 'express-session';
import {Request,Response} from 'express';

let Payment=[];
@Controller() 
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('payment')
  getUsers() {
    return Payment;
  }

  @Post('add')
  addUser(@Body() nayeemdto:AssignDto ){
    Payment.push(fatemadto);
    return 'Payment added';
  }

  @Get('payment/:id')
  getpayment(@Param('id')id:number)
  {
    return Payment.find((Payment)=>Payment.id==id);
  }

  @Delete(':id')
  remove(@Param('id')id){
    Payment = Payment.filter((payment)=>payment.id !== id);
    return 'Delete Success';
  }


  @Post('login')
  login(@Req() req: Request & { session: any }) {
  req.session.paymentname = 'abd';
  return req.session.paymentname;
  }

  @Get('profile')
  profile(@Req() req: Request & { session: any })  {
    return req.session.paymentname;
  }
  @Post('logout')
  logout(@Req() req: Request & { session: any }) {
  req.session.destroy();
  return 'The session is Empty';
  }

  
}