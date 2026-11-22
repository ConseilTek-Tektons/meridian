const weights = { low:1, medium:2, high:3, critical:4 } as const;
export function incidentPriority(impact:keyof typeof weights, urgency:keyof typeof weights) { const score=weights[impact]+weights[urgency]; return score>=7?"P1":score>=5?"P2":score>=3?"P3":"P4"; }
