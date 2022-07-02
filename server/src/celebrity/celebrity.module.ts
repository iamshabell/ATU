import { Module } from "@nestjs/common";
import { CelebrityModuleBase } from "./base/celebrity.module.base";
import { CelebrityService } from "./celebrity.service";
import { CelebrityController } from "./celebrity.controller";
import { CelebrityResolver } from "./celebrity.resolver";

@Module({
  imports: [CelebrityModuleBase],
  controllers: [CelebrityController],
  providers: [CelebrityService, CelebrityResolver],
  exports: [CelebrityService],
})
export class CelebrityModule {}
