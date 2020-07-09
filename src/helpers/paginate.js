export function getPaginationInfo({ total, page, perPage }) {
  const pageParsedInt = parseInt(page, 10);
  const perPageParsedInt = parseInt(perPage, 10);
  const totalParsedInt = parseInt(total, 10);

  const lastPage = Math.ceil(totalParsedInt / perPageParsedInt);

  return {
    total: totalParsedInt,
    page: pageParsedInt,
    next: pageParsedInt === lastPage ? false : pageParsedInt + 1,
    last: lastPage,
    prev: pageParsedInt > 1 ? pageParsedInt : false,
  };
}
