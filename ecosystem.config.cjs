module.exports = {
  apps: [
    {
      name: 'YTT-DL',
      port: '8128',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
