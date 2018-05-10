# hongbao/server

服务端 https://hongbao.xxooweb.com/

## 开发与部署

建议安装 Node.js 9.x 以上

安装依赖

```bash
npm i
```

开发环境运行

```bash
npm run dev
```

生产环境首次运行

```bash
npm i -g pm2
npm start
```

生产环境代码更新

```bash
npm run reload
```

> 查看日志、内存等更多信息，请参考 https://www.npmjs.com/package/pm2
