export interface HttpResponse<Data> {
  message: string;
  success: boolean;
  statusCode: number;
  data: Data;
}
