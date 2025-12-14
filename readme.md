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
- **file path**: [./projects2.jsonc](./projects2.jsonc)
- **note**: 项目描述可以使用[LateMarked](./late-marked.md)\(实验性\)
- **format**:
  ```ts
  [
    // ...,
    {
      /**
       * 项目状态
       * 可选值：'unknown' | 'wip' | 'normal' | 'archived' | 'deprecated'
       * @default 'unknown'
       */
      "_status"?: string,
      /** 可见性 */
      "_show"?: boolean,
      /** 项目名称 */
      "name": string | {
        /** 项目现称 */
        "current": string,
        /** 项目前称 */
        "previous"?: string
      },
      /** 项目描述 */
      "desc": string,
      /** 项目链接 */
      "link"?: string,
      /**
       * 项目仓库
       * @example 'username/repo' // 视为 github
       * @example 'https://gitlab.com/username/repo'
       */
      "repo"?: string,
      /**
       * 许可证
       * @default 'ARR'
       */
      "license"?: string,
      /** 项目目标 */
      "target": string,
      /** 项目负责人 */
      "leader": {
        /** 项目负责人名称 */
        "name": string,
        "email"?: string,
        "url"?: string,
        "qq"?: number,
      },
      /** 项目下次发布时间 */
      "next_release_at": string
    },
    // ...
  ]
  ```

## member
see [v1 edit manual](./edit_manual.md#--membersjson)
