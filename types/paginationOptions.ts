export type PaginationOptionsType = {
  offset?: number;
  limit?: number;
  filter?: FilterType;
};

export type FilterType = {
  field: string;
  value: string;
};
