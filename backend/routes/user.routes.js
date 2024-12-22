import express, { Router } from 'express';
import { getUserProfileAndRepos } from '../controllers/user.controller.js';
import {ensureAuthenticated} from '../middleware/ensureAuthenticated.js'
import { likeProfile,getLikes } from '../controllers/user.controller.js';

const router = Router();

router.get('/profile/:username',getUserProfileAndRepos);

router.get('/likes',ensureAuthenticated,getLikes);

router.post("/like/:username",ensureAuthenticated,likeProfile);

export default router;