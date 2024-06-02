import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateBeneficiaryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  needs: string;

  @IsInt()
  @IsNotEmpty()
  schoolId: number;
}
