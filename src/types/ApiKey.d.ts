export interface ApiKey {
    name: string;
    apiKey: string;
    status: "Active" | "Inactive" | string;
    lastUsed: string;
    requests: string;
    avgResponse: string;
    errors: string;
    activity: string;
}

interface ApiKeysRowProps {
    keyData: ApiKey;
    userId? : string
}

type KeyValueType = "full_access" | "partial_access" | "no_access"

interface Key {
    title: string;
    value: KeyValueType
}