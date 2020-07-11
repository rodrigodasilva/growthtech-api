import { jsonPlaceholderApi } from '../services/externalApi';

class CommentsController {
  async index(request, response) {
    const { id } = request.params;

    const responseComments = await jsonPlaceholderApi.get(
      `/posts/${id}/comments`
    );

    return response.json(responseComments.data);
  }
}

export default new CommentsController();
