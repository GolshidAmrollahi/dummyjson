export interface IResDto {
  total: number,
  skip: number,
  limit: number
}

export interface IPagination {
  skip?: number;
  limit?: number;
}