export const generatePaginationObject = (count, offset, limit) => {
  return {
    count,
    currentOffset: offset,
    currentPage: Math.floor(offset / limit) + 1,
    nextOffset: offset + limit < count ? offset + limit : null,
    prevOffset: offset - limit >= 0 ? offset - limit : null,
    totalPages: Math.ceil(count / limit),
  };
};
