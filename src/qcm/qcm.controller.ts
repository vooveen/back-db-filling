import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  UseGuards,
  Query,
  ParseUUIDPipe,
  ValidationPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
  UsePipes,
} from '@nestjs/common';
import { QcmService } from './qcm.service';
@Controller('qcm')
export class QcmController {
  constructor(private qcmService: QcmService) {}

  @Post('/add')
  addQcm(@Body() createQcmDTO: any): Promise<any> {
    console.log(createQcmDTO);
    return this.qcmService.addQcm(createQcmDTO);
  }
}
