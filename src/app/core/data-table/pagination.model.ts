export interface Pagination {
  pageSize: number;
  pageNumber: number;
  totalElement: number;
  totalPages?: number;
}

export const initPagination = {
  pageSize: 10,
  pageNumber: 0,
  totalElement: undefined,
  totalPages: undefined
};
