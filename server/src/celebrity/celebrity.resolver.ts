import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CelebrityResolverBase } from "./base/celebrity.resolver.base";
import { Celebrity } from "./base/Celebrity";
import { CelebrityService } from "./celebrity.service";

@graphql.Resolver(() => Celebrity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CelebrityResolver extends CelebrityResolverBase {
  constructor(
    protected readonly service: CelebrityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
