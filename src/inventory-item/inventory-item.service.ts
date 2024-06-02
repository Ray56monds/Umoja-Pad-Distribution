import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInventoryItemDto } from './dto/create-inventory-item.dto';
import { UpdateInventoryItemDto } from './dto/update-inventory-item.dto';
import { InventoryItem } from '@prisma/client';

@Injectable()
export class InventoryItemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createInventoryItemDto: CreateInventoryItemDto,
  ): Promise<InventoryItem> {
    return this.prisma.inventoryItem.create({
      data: createInventoryItemDto,
    });
  }

  async findAll(): Promise<InventoryItem[]> {
    return this.prisma.inventoryItem.findMany();
  }

  async findOne(id: number): Promise<InventoryItem> {
    const inventoryItem = await this.prisma.inventoryItem.findUnique({
      where: { id },
    });

    if (!inventoryItem) {
      throw new NotFoundException(`InventoryItem with ID ${id} not found`);
    }

    return inventoryItem;
  }

  async update(
    id: number,
    updateInventoryItemDto: UpdateInventoryItemDto,
  ): Promise<InventoryItem> {
    return this.prisma.inventoryItem.update({
      where: { id },
      data: updateInventoryItemDto,
    });
  }

  async remove(id: number): Promise<InventoryItem> {
    return this.prisma.inventoryItem.delete({
      where: { id },
    });
  }
}
