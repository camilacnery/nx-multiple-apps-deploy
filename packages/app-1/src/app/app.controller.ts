import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/world')
  hello() {
    return this.appService.getData();
  }

  @Get('/world-2')
  hello2() {
    return this.appService.getData();
  }

  @Get('/world-3')
  hello3() {
    return this.appService.getData();
  }

  @Get('/world-4')
  hello4() {
    return this.appService.getData();
  }

  @Get('/world-5')
  hello5() {
    return this.appService.getData();
  }

  @Get('/world-6')
  hello6() {
    return this.appService.getData();
  }
}
