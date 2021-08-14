import config from '../../config';
import {esClient} from '../../loaders/database';

interface Post {
    creator: string;
    title: string;
    content: string;
}

const post = async (post: Post) => {

    try {

        const savedPost = await esClient.index({
            index: config.appIndex,
            body: {
                ...post,
                date: new Date()
            }
        });
        const {body: {_id, result}} = savedPost;

        return {_id, result, ...post};

    } catch (error) {

    }

};

export default {post};
