export interface Pagination {
  count: number;
  currentOffset: number;
  currentPage: number;
  nextOffset?: number | null;
  prevOffset?: number | null;
  totalPages: number;
}
