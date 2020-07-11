import { jsonPlaceholderApi } from '../services/externalApi';

class UserPostsController {
  async index(request, response) {
    const { id } = request.params;
    const { search } = request.query;

    const responsePosts = await jsonPlaceholderApi.get(`/users/${id}/posts`, {
      params: {
        q: search,
        _expand: 'user',
      },
    });

    return response.json(responsePosts.data);
  }
}

export default new UserPostsController();
