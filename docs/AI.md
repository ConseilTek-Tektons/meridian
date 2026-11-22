# Service copilot and grounded retrieval

The assistant requires `assistant.ask`, validates and rate-limits questions, and retrieves only approved incident, CI, change, SLA, and knowledge context visible to the user. Local retrieval works without an external provider. Optional OpenAI Responses mode sets `store: false`; optional `file_search` uses the configured vector store.

Recommendations are advisory. The assistant cannot change priority, approve changes, manipulate CMDB relationships, pause SLA clocks, or close records. Every answer should cite the supporting service record or approved article.
