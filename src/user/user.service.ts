import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
    private readonly userRecords = [];

    create(user:User){
        this.userRecords.push(user);
    }

    findAll(){
        return this.userRecords;
    }

    findOneByID(param){
        return this.userRecords.find(user => user.id === param);
    }

    findOneByName(param){
        return this.userRecords.find(user => user.name === param);
    }

    remove(id){
        let index = this.userRecords.findIndex((userRecord) => userRecord.id === id);
        this.userRecords.splice(index,1);
    }

    update(user:User){
        let index = this.userRecords.findIndex((userRecord) => userRecord.id === user.id);
        this.userRecords[index] = user;
    }
}
