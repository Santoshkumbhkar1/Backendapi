import express from 'express';
import {signup ,login, getuser} from '../Controller/authController.js';


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/getuser', getuser);

export default router;
