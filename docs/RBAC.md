# Meridian role-based access control

Server-side permissions cover `records.manage`, `changes.manage`, `changes.approve`, `cmdb.manage`, `catalog.manage`, `sla.manage`, `knowledge.manage`, `assistant.ask`, `audit.view`, and tenant administration.

Service managers operate processes and SLAs; agents work assigned records; change managers run CAB; approvers approve only assigned decisions; requesters have free self-service access; auditors read immutable evidence. Group mappings in `src/config/rbac.ts` support Okta, Entra ID, Duo, and brokered SAML claims. Unknown groups receive the least-privileged `requester` role.
