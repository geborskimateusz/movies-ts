import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "Movie"})
export default class MovieEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('text')
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}