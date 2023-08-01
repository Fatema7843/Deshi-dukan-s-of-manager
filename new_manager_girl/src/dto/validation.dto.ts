import { IsNotEmpty, Length} from "class-validator"

export class ValidationDto
{
	id:number
	
    @IsNotEmpty({message:'Empty!'})
	@Length(3,10)
	name:string

    @IsNotEmpty({message:'Empty!'})
    @Length(5,9)
    contact:number 
}