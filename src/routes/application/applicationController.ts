import {Request, Response, NextFunction} from 'express';
import applicationService from './applicationService';

const post = async (req: Request, res: Response, next: NextFunction) => {

    const {creator, title, content} = req.body;
    if (!creator || !title || !content) {
        const error = new Error('Please include the following params in the body of the request: creator, title, content.');
        return next(error);
    }

    try {
        const response = await applicationService.post(creator, title, content);
        res.json(response);
    } catch (error) {
        next(error);
    }
};

const getPosts = async (req: Request, res: Response, next: NextFunction) => {

    const {start, postsNumber} = req.query;
    const startParsed = Number(start);
    const postsNumberParsed = Number(postsNumber);

    if (!start || !postsNumber) {
        const error = new Error('Please include the following params in the body of the request: start, postsNumber.');
        return next(error);
    } else if (Number.isNaN(startParsed) || Number.isNaN(postsNumberParsed)) {
        const error = new Error('Please provide only numbers.');
        return next(error);
    }

    try {
        const response = await applicationService.getPosts(startParsed, postsNumberParsed);
        res.json(response);
    } catch (error) {
        next(error);
    }
};

const getPostNumber = async (req: Request, res: Response) => {

};

export default {
    post,
    getPosts,
    getPostNumber
};
