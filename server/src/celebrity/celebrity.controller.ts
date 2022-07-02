import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CelebrityService } from "./celebrity.service";
import { CelebrityControllerBase } from "./base/celebrity.controller.base";

@swagger.ApiTags("celebrities")
@common.Controller("celebrities")
export class CelebrityController extends CelebrityControllerBase {
  constructor(
    protected readonly service: CelebrityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
