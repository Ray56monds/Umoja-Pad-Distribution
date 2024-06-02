import { IsString, IsInt, IsDateString, IsOptional } from 'class-validator';

export class UpdateDistributionEventDto {
  @IsDateString()
  @IsOptional()
  date?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsInt()
  @IsOptional()
  ngoId?: number;

  @IsInt()
  @IsOptional()
  schoolId?: number;
}
