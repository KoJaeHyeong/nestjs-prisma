import { Controller, Get, HttpStatus, Res, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedParam, TypedRoute } from '@nestia/core';
import { TestDto } from './test.dto';
import { tags } from 'typia';
import { Response } from 'express';
import { ResponseInterceptor } from './response.interceptor';

export interface ITest {
  /**
   * @
   */

  email: string;
  name: 'sdsd';
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * 테스트용 API
   *
   * @tag API_RESULT
   * @returns ITest
   * @param reqDto
   * @summary API IS GOOD
   * @version 23232232
   */
  @TypedRoute.Get('nestia/:email')
  async getHello(
    @TypedParam('email') reqDto: string,
  ): Promise<any> {
    // const dto:ITest = {email: reqDto, name : 'sdsd'};
    const result: any = await this.appService.test2();
    console.log(typeof result);
    return result;
  }
}
