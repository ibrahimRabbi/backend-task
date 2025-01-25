import { Router } from "express";
import { createProfile, getProfiles } from "./profile.controller";

export const profileRoute = Router()


profileRoute.post('/', createProfile)

profileRoute.get('/:id', getProfiles)