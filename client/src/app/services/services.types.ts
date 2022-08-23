export interface HttpResponse<Data> {
  message: string;
  success: boolean;
  data: Data;
}
