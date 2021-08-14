import config from '../../config';
import {esClient} from '../../loaders/database';
import {SearchInnerHits} from '@elastic/elasticsearch/api/types';

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

const getPosts = async (start: number, postsNumber: number) => {
    try {
        const response = await esClient.search({
            index: config.appIndex,
            from: start,
            size: postsNumber,
        });
        const posts = response.body.hits.hits.map((doc: SearchInnerHits) => doc._source);
        return posts;
    } catch (error) {
    }
};

export default {
    post, getPosts
};
