import { describe, expect, it } from "vitest";
import { hasPermission, resolveRolesFromClaims } from "./rbac";

describe("Meridian RBAC", () => {
  it("grants wildcard permissions to administrators", () => expect(hasPermission(["admin"], "cmdb.manage")).toBe(true));
  it("keeps access policy away from agents", () => expect(hasPermission(["agent"], "access.manage")).toBe(false));
  it("maps service groups", () => expect(resolveRolesFromClaims({ groups: ["service-managers"] })).toEqual(["service_manager"]));
});
