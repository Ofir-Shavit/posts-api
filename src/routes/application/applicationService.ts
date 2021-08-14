import applicationDAL from './applicationDAL';

const post = async (creator: string, title: string, content: string) => {

    const post = await applicationDAL.post({creator, title, content});
    return post;
};

export default {post};
