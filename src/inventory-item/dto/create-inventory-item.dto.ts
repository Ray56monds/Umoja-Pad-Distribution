import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateInventoryItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @IsInt()
  @IsNotEmpty()
  distributionEventId: number;
}
