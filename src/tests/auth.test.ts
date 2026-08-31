import { describe, expect, it } from "vitest";
import type { IncomingHttpHeaders } from 'node:http';
import { getAPIKey } from "../api/auth.ts";


describe("getApiKey", () => {
    it("should return null if missing", () => {
        const headers: IncomingHttpHeaders = {
        };
        expect(getAPIKey(headers)).toBeNull();
    });
});
