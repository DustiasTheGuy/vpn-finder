export interface HttpResponse<Data> {
  message: string | null;
  success: boolean;
  data: Data | null;
}
