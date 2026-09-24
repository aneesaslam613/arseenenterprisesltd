import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "stats": z.array(z.object({
        "value": z.string(),
        "label": z.string(),
        "id": z.string()
      })),
      "services": z.array(z.object({
        "title": z.string(),
        "desc": z.string(),
        "id": z.string()
      })),
      "steps": z.array(z.object({
        "num": z.string(),
        "title": z.string(),
        "desc": z.string(),
        "id": z.string()
      }))
    }),
    services: z.object({
      "services": z.array(z.object({
        "title": z.string(),
        "desc": z.string(),
        "href": z.string(),
        "id": z.string()
      }))
    }),
    how_it_works: z.object({
      "faqs": z.array(z.object({
        "q": z.string(),
        "a": z.string(),
        "id": z.string()
      }))
    }),
    shipping: z.object({
      "carriers": z.array(z.string())
    }),
    about: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "heading": z.string(),
        "intro": z.string()
      }),
      "whoWeAre": z.object({
        "heading": z.string(),
        "paragraphs": z.array(z.string())
      }),
      "companyDetails": z.object({
        "heading": z.string(),
        "note": z.string()
      }),
      "procurementScope": z.object({
        "heading": z.string(),
        "intro": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "label": z.string()
        })),
        "note": z.string()
      }),
      "coreValues": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "whyChooseUs": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "desc": z.string()
        }))
      }),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string()
      })
    }),
    refund_policy: z.object({
      "meta": z.object({
        "lastUpdated": z.string(),
        "heading": z.string()
      }),
      "intro": z.string(),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      }))
    })
  }
};
export type Schemas = typeof schemas;