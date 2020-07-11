import { jsonPlaceholderApi } from '../services/externalApi';

import { getPaginationInfo } from '../helpers/paginate';

class PostsController {
  async index(request, response) {
    const { page = 1, per_page = 10 } = request.query;

    const responsePosts = await jsonPlaceholderApi.get('/posts', {
      params: {
        _page: page,
        _limit: per_page,
        _expand: 'user',
      },
    });

    const totalItems = responsePosts.headers['x-total-count'];

    const paginationInfo = getPaginationInfo({
      page,
      perPage: per_page,
      total: totalItems,
    });

    return response.json({ posts: responsePosts.data, ...paginationInfo });
  }
}

export default new PostsController();
