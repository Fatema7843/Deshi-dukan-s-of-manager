import {Injectable,CanActivate, ExecutionContext, UnauthorizedException} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SessionGuard implements CanActivate {
	canActivate(context: ExecutionContext) : boolean | Promise<boolean> | Observable<boolean>{
		const request = context.switchToHttp().getRequest();
		if(!!request.session.adminid){
			return true;
		}
		else{
			throw new UnauthorizedException({message:'Oho! please Login first'}) ;
		}
		
	}
}