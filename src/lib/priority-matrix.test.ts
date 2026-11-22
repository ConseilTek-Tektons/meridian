import { describe, expect, it } from "vitest";
import { incidentPriority } from "./priority-matrix";
describe("incident priority",()=>{it("maps critical impact and urgency to P1",()=>expect(incidentPriority("critical","critical")).toBe("P1"));it("maps low impact and urgency to P4",()=>expect(incidentPriority("low","low")).toBe("P4"));});
