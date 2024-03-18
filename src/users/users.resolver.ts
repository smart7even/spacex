import { AppService } from "src/app.service";
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { User } from "./models/user.model";
import { UsersArgs } from "./dto/users.args";

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly appService: AppService) { }

  @Query(returns => [User])
  async users(@Args() recipesArgs: UsersArgs): Promise<User[]> {
    let users = await this.appService.getUsers()

    return users;
  }
}