import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
async function ragCHat_1(question: string | undefined, init?: EndpointRequestInit_1): Promise<string | undefined> { return client_1.call("ChatAiService", "ragCHat", { question }, init); }
async function ragChat2_1(question: string | undefined, init?: EndpointRequestInit_1): Promise<string | undefined> { return client_1.call("ChatAiService", "ragChat2", { question }, init); }
export { ragCHat_1 as ragCHat, ragChat2_1 as ragChat2 };
