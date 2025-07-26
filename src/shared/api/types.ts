import type { paths, components, operations } from "../../__generated__/api";
import type { Client } from "openapi-fetch";

export type ApiClient = Client<paths>;

export type { paths, components, operations };

export type ApiComponent<T extends keyof components> = components[T];

export type ApiOperation<T extends keyof operations> = operations[T];