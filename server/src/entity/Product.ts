
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from "typeorm";

import * as bcrypt from "bcryptjs";
import { IsNotEmpty, Length } from "class-validator";

@Entity()
@Unique(["username"])

export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @Length(4, 20)
  public name: string;

  @Column()
  @Length(4, 100)
  public price: string;

  @Column()
  @IsNotEmpty()
  public qty: string;

  @Column()
  @CreateDateColumn()
  public createdAt: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt: Date;
}
