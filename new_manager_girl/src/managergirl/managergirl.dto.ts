import{IsNotEmpty,Length,IsEmail} from "class-validator";

export class ManagergirlDto{
	@IsNotEmpty({message:'Please enter name! Name can not be empty'})
	@Length(4,20)
	name:string;

	@IsEmail()
	email:string;

	@IsNotEmpty({message:'Please enterr password! Password can not be empty'})
	@Length(4,10)
	password:string;

	@IsNotEmpty({message:'Empty!'})
	@Length(4,10)
	contact:number;

	@IsNotEmpty({message:'Empty!'})
	gender:string;

}