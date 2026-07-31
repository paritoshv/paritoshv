## Paritosh Varshney

**Backend + LLM engineer** · <!-- yoe:start -->3.0 years<!-- yoe:end --> · Bangalore, India

I build the backend that keeps AI products running — orchestration, durability, and the cost tracking behind production LLM features.

Right now I'm at **Healthify**, on LLM orchestration pipelines and token/cost observability across 50+ features. Before that, **Metropolis Technologies** (reservation infra for 2.5M+ annual bookings, payments across four gateways) and **Texas Instruments** (APIs across two generations of FMCW radar).

[paritosh.space](https://paritosh.space) · [LinkedIn](https://www.linkedin.com/in/paritoshbitspilani) · [X](https://twitter.com/litemonke) · [varshneyparitosh7@gmail.com](mailto:varshneyparitosh7@gmail.com)

---

### What I'm building

**[django-admin-mcp](https://github.com/paritoshv/django-admin-mcp)** — read-only Django admin access for AI agents over MCP. Every read runs through `ModelAdmin` permissions, secret fields are redacted, queries hit read replicas with timeouts. Running in production: debugging sessions dropped from hours to minutes, and agents now triage customer support tickets.

**[faultline-orchestrator](https://github.com/paritoshv/faultline-orchestrator)** — durable multi-step LLM agent workflows. Validation gates, retries, and resume-after-failure so a long run survives a crash instead of starting over.

**[multi-llm-web-orchestrator](https://github.com/paritoshv/multi-llm-web-orchestrator)** — Chrome side panel that fans a single prompt across ChatGPT, Claude, Gemini, and Grok through authenticated sessions, and puts the answers side by side.

**[mikochan-the-mini-perplexity](https://github.com/paritoshv/mikochan-the-mini-perplexity)** — compact answer engine: live web search, grounded LLM answers, citations back to sources.

---

### Stack

- **Languages** — Python, TypeScript, JavaScript, C, C++
- **Backend** — Django, Node.js, Celery, event-driven services, AWS
- **Data** — MySQL, MongoDB, Redis, RabbitMQ, MQTT
- **AI** — LLM orchestration, MCP, agents, token & cost observability, RAG

B.E. (Hons.) Electronics & Instrumentation, BITS Pilani Goa.
