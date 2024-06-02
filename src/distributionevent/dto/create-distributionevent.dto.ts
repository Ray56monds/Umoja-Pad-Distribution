import { IsString, IsInt, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateDistributionEventDto {
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsInt()
  @IsNotEmpty()
  ngoId: number;

  @IsInt()
  @IsNotEmpty()
  schoolId: number;
}
