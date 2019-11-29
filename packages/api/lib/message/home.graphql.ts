import { Query } from "@nestjs/graphql";
import {  Controller } from "@nestjs/common";


@Controller()
export class HomeGraphql {

    @Query()
    home(): string {
        return ``
    }
}