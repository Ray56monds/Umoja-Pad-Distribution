import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateBeneficiaryDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsInt()
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  needs?: string;

  @IsInt()
  @IsOptional()
  schoolId?: number;
}
