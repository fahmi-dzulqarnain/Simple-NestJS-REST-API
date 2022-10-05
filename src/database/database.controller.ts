import { Body, Controller, Delete, Get, Param, Post, Put, Render } from '@nestjs/common';
import { FileKitaDTO } from './database.entity';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
    constructor(private service: DatabaseService) { }

    @Get('jsonData')
    async lihatOutput() {
        return { data: await this.service.showAll() }
    }

    @Get()
    @Render('index')
    root() {
        return { title: "Tabel Data", message: "Hello World!" }
    }

    @Post()
    addRecord(@Body() data: FileKitaDTO) {
        return this.service.createRecord(data)
    }

    @Get(':id')
    lihatDetail(@Param('id') id: string) {
        return this.service.getRecordById(parseInt(id))
    }

    @Put(':id')
    updateRecord(@Param('id') id: string, @Body() data: Partial<FileKitaDTO>) {
        return this.service.updateRecord(parseInt(id), data)
    }

    @Delete(':id')
    deleteRecord(@Param('id') id: number) {
        return this.service.deleteRecord(id)
    }
}
