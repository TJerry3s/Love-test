# 恋爱测试网站 - 国内访问部署指南

本文档介绍如何将恋爱测试网站部署到可通过国内网络访问的服务器。

---

## 方案选择

根据需求，推荐以下部署方案：

| 方案 | 访问速度 | 费用 | 难度 | 推荐度 |
|------|---------|------|------|--------|
| Cloudflare Pages | ⭐⭐⭐⭐ | 免费 | 简单 | ⭐⭐⭐⭐⭐ |
| Vercel + Cloudflare CDN | ⭐⭐⭐ | 免费 | 中等 | ⭐⭐⭐⭐ |
| 阿里云 OSS + CDN | ⭐⭐⭐⭐⭐ | 少量 | 中等 | ⭐⭐⭐ |
| 腾讯云 COS + CDN | ⭐⭐⭐⭐⭐ | 少量 | 中等 | ⭐⭐⭐ |

---

## 推荐方案：Cloudflare Pages

### 第一步：安装 Wrangler CLI

```bash
npm install -g wrangler
```

### 第二步：登录 Cloudflare

```bash
wrangler login
```

浏览器会打开，登录你的 Cloudflare 账号并授权。

### 第三步：部署到 Cloudflare Pages

```bash
cd D:\ClaudeFile\Love-test
wrangler pages publish . --project-name=love-test
```

部署成功后，你会获得一个类似 `https://love-test.pages.dev` 的链接。

### 第四步：绑定自定义域名

1. 访问 Cloudflare Dashboard: https://dash.cloudflare.com/
2. 进入 **Pages** 项目
3. 点击 **Custom domains**
4. 添加域名：`love.tjerry.top` 或直接 `tjerry.top`
5. Cloudflare 会自动配置 DNS

### 第五步：配置域名 DNS（如果域名在其他注册商）

如果你的域名 `tjerry.top` 在其他注册商（如阿里云、腾讯云）：

1. 在 Cloudflare 添加站点 `tjerry.top`
2. Cloudflare 会提供两个 NS 服务器地址
3. 到域名注册商修改 NS 服务器为 Cloudflare 提供的地址
4. 等待 DNS 生效（通常 2-24 小时）

---

## 方案二：Vercel + Cloudflare 代理

如果你想继续使用 Vercel，但通过 Cloudflare 加速：

### 第一步：获取 Vercel 域名

从 Vercel 部署后获得域名，如：`love-test.vercel.app`

### 第二步：在 Cloudflare 添加 DNS 记录

1. 在 Cloudflare DNS 设置中添加：

| 类型 | 名称 | 目标 | 代理状态 |
|------|------|------|----------|
| CNAME | love | love-test.vercel.app | 已代理（橙色云朵） |

或者直接添加到根域名：

| 类型 | 名称 | 目标 | 代理状态 |
|------|------|------|----------|
| CNAME | @ | love-test.vercel.app | 已代理（橙色云朵） |

### 第三步：等待生效

访问 `love.tjerry.top`（或 `tjerry.top`）测试是否正常。

---

## 方案三：阿里云 OSS + CDN

### 第一步：创建 OSS Bucket

1. 登录阿里云控制台
2. 进入 **对象存储 OSS**
3. 创建 Bucket：
   - Bucket 名称：`love-test`
   - 地域：选择国内节点（如华东1-杭州）
   - 存储类型：标准存储
   - 读写权限：公共读

### 第二步：上传文件

方式1：通过控制台上传
方式2：使用 ossutil 工具

```bash
# 安装 ossutil
wget http://gosspublic.alicdn.com/ossutil/1.7.15/ossutil64
chmod 755 ossutil64

# 配置
./ossutil64 config

# 上传
./ossutil64 cp -r D:/ClaudeFile/Love-test/ oss://love-test/ -f
```

### 第三步：配置静态网站托管

1. 在 Bucket 设置中找到 **静态页面**
2. 设置：
   - 默认首页：`index.html`
   - 默认 404 页：`index.html`

### 第四步：配置 CDN

1. 进入 **CDN 控制台**
2. 添加域名：`love.tjerry.top`
3. 源站信息：OSS 域名
4. 加速区域：中国大陆
5. 配置 HTTPS 证书

---

## 测试链接

部署完成后，可以通过以下链接测试：

- Cloudflare Pages: `https://love-test.pages.dev`
- 自定义域名: `https://love.tjerry.top` 或 `https://tjerry.top`

---

## 性能对比

| 部署方式 | 国内访问延迟 | 海外访问延迟 | HTTPS |
|----------|-------------|-------------|-------|
| Cloudflare Pages | 100-300ms | 50-100ms | ✅ 免费 |
| Vercel 直接访问 | 500-2000ms | 50-100ms | ✅ 免费 |
| 阿里云 CDN | 20-100ms | 100-300ms | ✅ 需配置 |
| Vercel + Cloudflare | 100-300ms | 50-100ms | ✅ 免费 |

---

## 常见问题

### Q1: Cloudflare Pages 在国内速度如何？
A: Cloudflare 在国内有节点，访问速度通常在 100-300ms，可以接受。

### Q2: Vercel 在国内能访问吗？
A: Vercel 在国内可能速度较慢或偶尔无法访问，建议配合 Cloudflare 使用。

### Q3: 哪个方案最稳定？
A: 阿里云 CDN 最稳定但需要费用，Cloudflare 免费且稳定性较好。

---

## 推荐配置

**个人推荐**：使用 **Cloudflare Pages**

理由：
- 完全免费
- 国内访问速度可接受
- 配置简单，一键部署
- 自动 HTTPS
- 全球 CDN 加速

**如果追求最快速度**：使用 **阿里云 OSS + CDN**

理由：
- 国内节点最多，速度最快
- 但需要一定费用（通常每月几块钱）
