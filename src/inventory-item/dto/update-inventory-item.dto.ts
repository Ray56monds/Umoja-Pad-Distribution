import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateInventoryItemDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsOptional()
  quantity?: number;

  @IsInt()
  @IsOptional()
  distributionEventId?: number;
}
