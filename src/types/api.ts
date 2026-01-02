export type HttpMethod = "GET";

export type ApiParam = {
    key: string;
    label: string;
    required: boolean;
    example?: string;
    description?: string;
    defaultValue?: string;
}

export type ApiEndpoint = {
  id: string;
  name: string;
  description: string;
  method: HttpMethod;
  baseUrl: string;
  path: string;
  params: ApiParam[];
    examples?: EndpointExample[];

};

export type ApiRequestState<T = unknown> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export type ApiResponseMetadata = {
  status: number;
  durationMs: number;
  url: string;
};

export type EndpointExample = {
  title: string;
  params: Record<string, string>;
};