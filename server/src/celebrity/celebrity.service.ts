import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CelebrityServiceBase } from "./base/celebrity.service.base";

@Injectable()
export class CelebrityService extends CelebrityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
