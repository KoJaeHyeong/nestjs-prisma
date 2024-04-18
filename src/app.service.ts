import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaClient) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  async test() {
    // const createUser = await this.prismaService.user.create({
    //   data: {
    //     name: "테스트 이름2",
    //     age: 32
    //   }
    // });

    // const findUser = await this.prismaService.user.findUnique({
    //   where: {id: 3}
    // });
    // console.log(findUser);
    //
    const result = await this.prismaService.post.create(
      {
        data: {
          title: "테스트용2sdfsdf",
          content: 1233323232,
          user: {
            connect: {
              id: 1

            }
          }
        },
      }
    )
    return result;
  }

  async test2() {
    // const result = await this.prismaService.post.findUnique({
    //   where: {id: 1, AND : {userId : 3}},
    //   include: {
    //     user: {
    //       select: {
    //         id: true,
    //         name: true
    //       }
    //     }
    //   }
      // select: {
      //   title:true,
      //   user: true,
      // },
    // });
    const result = await this.prismaService.user.findMany({
      where: {id: 1},
      include: {
        posts: {
          orderBy: {
            id: 'desc'
          }
        }
      }

    })


    return result;
  }
}
