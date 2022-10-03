import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileKita } from './database.entity';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';

@Module({
    imports: [TypeOrmModule.forFeature([FileKita])],
    controllers: [DatabaseController],
    providers: [DatabaseService]
})
export class DatabaseModule {}
