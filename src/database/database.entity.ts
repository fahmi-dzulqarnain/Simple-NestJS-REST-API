import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FileKita {
    @PrimaryGeneratedColumn()
    id : number

    @Column({length : 500})
    nama : string

    @Column('text')
    deskripsi : string

    @Column()
    isPublik : boolean
}

export class FileKitaDTO {
    nama: string
    deskripsi: string
    isPublik: boolean
}