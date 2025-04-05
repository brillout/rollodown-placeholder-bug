```bash
pnpm install
pnpm run build
```

Error is thrown:

```bash
Error during build:
The "paths[1]" argument must be of type string. Received undefined
    at resolve (node:path:1101:7)
    at writeOutputFile (file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/rollup@4.39.0/node_modules/rollup/dist/es/shared/node-entry.js:23189:22)
    at file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/rollup@4.39.0/node_modules/rollup/dist/es/shared/node-entry.js:23139:104
    at Queue.work (file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/rollup@4.39.0/node_modules/rollup/dist/es/shared/node-entry.js:22266:38)
    at file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/rollup@4.39.0/node_modules/rollup/dist/es/shared/node-entry.js:22255:18
    at new Promise (<anonymous>)
    at Queue.run (file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/rollup@4.39.0/node_modules/rollup/dist/es/shared/node-entry.js:22253:16)
    at file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/rollup@4.39.0/node_modules/rollup/dist/es/shared/node-entry.js:23139:94
    at Array.map (<anonymous>)
    at file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/rollup@4.39.0/node_modules/rollup/dist/es/shared/node-entry.js:23139:56
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at catchUnfinishedHookActions (file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/rollup@4.39.0/node_modules/rollup/dist/es/shared/node-entry.js:22508:16)
    at buildEnvironment (file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/vite@6.2.5_@types+node@22.14.0/node_modules/vite/dist/node/chunks/dep-Pj_jxEzN.js:51500:16)
    at Object.buildApp (file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/vike@0.4.228_vite@6.2.5_@types+node@22.14.0_/node_modules/vike/dist/esm/node/plugin/plugins/build/pluginBuildApp.js:23:29)
    at Module.build (file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/vike@0.4.228_vite@6.2.5_@types+node@22.14.0_/node_modules/vike/dist/esm/node/api/build.js:22:9)
    at cmdBuild (file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/vike@0.4.228_vite@6.2.5_@types+node@22.14.0_/node_modules/vike/dist/esm/node/cli/entry.js:51:9)
    at cli (file:///home/rom/tmp/template-vike-solid-daisyui-hono/node_modules/.pnpm/vike@0.4.228_vite@6.2.5_@types+node@22.14.0_/node_modules/vike/dist/esm/node/cli/entry.js:14:9) {
  code: 'ERR_INVALID_ARG_TYPE'
}
 ELIFECYCLE  Command failed with exit code 1.
```

`rollup@4.39.0` => error  
`rollup@4.38.0` => no error  
