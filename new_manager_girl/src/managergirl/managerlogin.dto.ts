import { IsNotEmpty,Length } from "class-validator";

export class ManagergirlLoginDto{

    @IsNotEmpty({message: 'Please fill up.'})
    email:string;
    @IsNotEmpty()
    @Length(4,6)
    password:string;
    @IsNotEmpty({message: 'Please fill up.'})
    contact:number;
}