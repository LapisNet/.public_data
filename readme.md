# .public_data

## on this page
- [project v1](#project-v1)
- [project v2](#project-v2)
- [member](#member)

---

## project v1
@deprecated  
see [v1 edit manual](./edit_manual.md#--projectsjson)

## project v2
- file path: [./projects2.jsonc](./projects2.jsonc)
- format:
  ```ts
  [
    // ...,
    {
      "_status"?: string,
      "_show"?: boolean,
      "name": string | {
        "current": string,
        "previous"?: string
      },
      "desc": string,
      "link"?: string,
      "repo"?: string,
      "license"?: string,
      "target": string,
      "leader": {
        "name": string,
        "email"?: string,
        "url"?: string,
        "qq"?: number,
      },
      "next_release_at": string
    },
    // ...
  ]
  ```

## member
see [v1 edit manual](./edit_manual.md#--membersjson)
