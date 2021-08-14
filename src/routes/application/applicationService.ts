import applicationDAL from './applicationDAL';

const post = async (creator: string, title: string, content: string) => {

    const post = await applicationDAL.post({creator, title, content});
    return post;
};

const getPosts = async (start: number, postsNumber: number) => {

    const post = await applicationDAL.getPosts(start, postsNumber);
    return post;
};

const getPostsNumber = async () => {

    const postsNumber = await applicationDAL.getPostsNumber();
    return postsNumber;
};

export default {
    post,
    getPosts,
    getPostsNumber
};
