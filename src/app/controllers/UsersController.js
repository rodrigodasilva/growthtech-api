import { jsonPlaceholderApi } from '../../services/externalApi';

class UsersController {
  async index(request, response) {
    const { page = 1, per_page = 10 } = request.query;

    const responseUsers = await jsonPlaceholderApi.get('/users', {
      params: {
        _page: page,
        _limit: per_page,
      },
    });

    console.log(responseUsers.headers['x-total-count']);

    return response.json(responseUsers.data);
  }
}

export default new UsersController();
