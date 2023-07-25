import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
    private users = []
    constructor(){
         this.users = [
            {
                name: 'zaenal m'
            },
            {
                name: 'sinta c'
            },
            {
                name: 'yoga'
            }
        ];
    }

    @Get("/list")
    findAll() : any {
        let userData = this.users;
        let res = this.formatResponse(userData,'Data successfully retrieve');
        return res;
    }

    @Get("/detail")
    findOne() : any {
        let name = 'zaenal m';
        let result = this.users.find(user => user.name === name);
        let message = '';

        if(result != null){
            message = 'Data found.';
        }else {
            message = 'Data not found.';
        }
        let res = this.formatResponse(result,message);
        return res;    
    }

    formatResponse(data,message){
        return {
            success: data != null ? true : false,
            message : message,
            response: data != null ? data : [],
        }
    }
}
