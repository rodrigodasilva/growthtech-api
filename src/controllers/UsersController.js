import { jsonPlaceholderApi } from '../services/externalApi';

import { getPaginationInfo } from '../helpers/paginate';

class UsersController {
  async index(request, response) {
    const {
      page = 1,
      per_page = 10,
      name = '',
      website = '',
      zipcode = '',
      company_name = '',
    } = request.query;

    const responseUsers = await jsonPlaceholderApi.get('/users', {
      params: {
        _page: page,
        _limit: per_page,
        _embed: 'posts',
        ...(name ? { name_like: name } : {}),
        ...(website ? { website_like: website } : {}),
        ...(zipcode ? { 'address.zipcode_like': zipcode } : {}),
        ...(company_name ? { 'company.name_like': company_name } : {}),
      },
    });

    const totalItems = responseUsers.headers['x-total-count'];

    const paginationInfo = getPaginationInfo({
      page,
      perPage: per_page,
      total: totalItems,
    });

    return response.json({ users: responseUsers.data, ...paginationInfo });
  }

  async show(request, response) {
    const userId = request.params.id;

    const responseUser = await jsonPlaceholderApi.get(`/users/${userId}`);

    return response.json(responseUser.data);
  }
}

export default new UsersController();
