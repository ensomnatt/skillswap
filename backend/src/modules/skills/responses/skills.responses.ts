import { Skill } from "@prisma/client"

export interface GetAllResponse {
  skills: Skill[];
}
