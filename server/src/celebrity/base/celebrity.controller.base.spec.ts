import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { CelebrityController } from "../celebrity.controller";
import { CelebrityService } from "../celebrity.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accepted: "true",
  bio: "exampleBio",
  createdAt: new Date(),
  id: "exampleId",
  provision: "exampleProvision",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  accepted: "true",
  bio: "exampleBio",
  createdAt: new Date(),
  id: "exampleId",
  provision: "exampleProvision",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    accepted: "true",
    bio: "exampleBio",
    createdAt: new Date(),
    id: "exampleId",
    provision: "exampleProvision",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  accepted: "true",
  bio: "exampleBio",
  createdAt: new Date(),
  id: "exampleId",
  provision: "exampleProvision",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Celebrity", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CelebrityService,
          useValue: service,
        },
      ],
      controllers: [CelebrityController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /celebrities", async () => {
    await request(app.getHttpServer())
      .post("/celebrities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /celebrities", async () => {
    await request(app.getHttpServer())
      .get("/celebrities")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /celebrities/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/celebrities"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /celebrities/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/celebrities"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
