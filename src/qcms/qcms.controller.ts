import { Controller, Post, Injectable, Body } from '@nestjs/common';


@Controller('qcms')
export class QcmsController {
    

  @Post()
  fillQcm(@Body() qcm:any): string {
    console.log(qcm);
    return null;
  }
}
