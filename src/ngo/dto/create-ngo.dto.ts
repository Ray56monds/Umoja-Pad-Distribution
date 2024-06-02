import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateNgoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  schoolId: number;
}
