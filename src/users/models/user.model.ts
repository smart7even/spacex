import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user ' })
export class User {
    @Field(type => ID)
    id: number;

    @Field()
    email: string;

    @Field()
    name: string;
}
