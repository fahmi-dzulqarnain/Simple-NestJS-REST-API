import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileKita, FileKitaDTO } from './database.entity';

@Injectable()
export class DatabaseService {
    constructor(
        @InjectRepository(FileKita)
        private filekitaRepository: Repository<FileKita>
    ){ }

    async showAll() {
        return await this.filekitaRepository.find()
    }

    async createRecord(data: FileKitaDTO) {
        const newData = await this.filekitaRepository.create(data)
        await this.filekitaRepository.save(newData)
        return newData
    }

    async lihatSemua() {
        return 'ini di service'
    }

    async getRecordById(id: number) {
        return await this.filekitaRepository.findOne({
            where: {
                id
            }
        })
    }

    async updateRecord(id: number, data: Partial<FileKitaDTO>) {
        await this.filekitaRepository.update({id}, data)
        return this.filekitaRepository.findOne({
            where: {
                id
            }
        })
    }

    async deleteRecord(id: number) {
        await this.filekitaRepository.delete({id})
        return {
            deleted: true,
            message: `The data with id ${id} has been deleted`
        }
    }
}
