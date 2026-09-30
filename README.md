# Facesome (facesome.com) 👑
> **The Executive Digital Portrait Atelier — Studio-Grade Portraits Without the Studio Fee.**

`facesome.com` 是一个专为职场人、创业者、求职者打造的数字化高端人像工坊。通过生物特征关键点锁定与神经光影重构，将普通手机自拍照转化为华尔街、硅谷高管、福布斯杂志级别的顶级职场职业形象照。

---

## 🏛️ 模块化功能矩阵（Modular Feature Matrix）

本项目采用“单核多业务插件”架构，一次搭建通用鉴权、代币钱包与任务队列，后续功能模块开箱即插：

1. **👑 旗舰功能：高定职业形象照 (`/headshots`) [已上线]**
   * **价值**：客单价最高（$19 ~ $59/单），毛利率 85%+，变现学费主力军。
   * **特色功能**：智能照片预审、5大行业专属风格（投行、硅谷、讲师、学术、自然光）、**独家 LinkedIn 圆形头像实时模拟预览器**、4K/8K 超分下载。
2. **🪪 矩阵二期：全球护照/签证证件照合规 (`/passport`) [预留接口]**
   * **价值**：常青长尾流量，针对美签、申根、英加护照等 130+ 国官方合规标准。
3. **✨ 矩阵三期：AI 颜值与发型风格诊断报告 (`/glowup`) [预留接口]**
   * **价值**：社媒病毒裂变传播入口，提升品牌曝光，反哺职业照转化。

---

## 🛠️ 技术架构（0 固定月租、极速响应）

| 层级 | 选用技术 | 说明 |
| :--- | :--- | :--- |
| **全栈框架** | **Next.js 15/16 (App Router) + TypeScript** | 兼顾极致 SEO 与全栈 API 能力 |
| **UI 与质感** | **TailwindCSS + Framer Motion + Obsidian Dark UI** | 摒弃廉价发光 AI 套壳感，营造高端工坊氛围 |
| **算力引擎** | **Fal.ai (Flux LoRA / InstantID / PuLID)** | Serverless 按次计费（单次仅几分钱，有单才扣费） |
| **数据与鉴权** | **Supabase (PostgreSQL + Auth + Storage)** | 免费额度海量，自带 RLS 安全规则 |
| **全球支付** | **Lemon Squeezy** 或 **Stripe** | 支持 Apple Pay/全球信用卡，代扣海外消费税 |

---

## 🚀 本地开发启动

1. **安装依赖**：
   ```bash
   npm install
   ```

2. **配置环境变量**：
   参考 `.env.example`，创建 `.env.local`：
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   FAL_KEY=your_fal_ai_key_here
   ```

3. **启动开发服务器**：
   ```bash
   npm run dev
   ```
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)。

---

## 💰 商业变现与定价模型

* **入门版 ($19)**：40 Credits（生成约 40 张精修照片，解锁 2 种风格，4K 交付）。
* **旗舰版 ($35，推荐)**：100 Credits（生成约 100 张精修照片，解锁全部 5 种风格，优先 GPU，商用授权）。
* **创始人尊享版 ($59)**：200 Credits（生成约 200 张照片，无限风格重抽，终身商用授权）。

**单位经济学测算**：
* 用户支付：$35 美元（约 250 元人民币）
* 算力与存储成本：约 $1.5 美元（约 11 元人民币）
* 净利润：**~$33.5 美元 / 单**（毛利率 > 90%）
* **每月仅需 30~50 单，即可轻松全额覆盖一个大学学期的学费与生活费。**

---

## 📈 零广告费冷启动获客秘籍（Growth Playbook）

1. **视觉反差短视频（TikTok / Reels / 小红书）**：
   * 录制屏幕：“室友吐槽自己领英头像土得像刚睡醒，用 Facesome 10秒帮他爆改成高盛合伙人”。
   * 强烈的前后视觉反差自带极高完播率与转发率。
2. **Reddit 社区破冰（r/SideProject, r/resumes, r/LinkedIn）**：
   * 发帖：“I built an AI studio for LinkedIn headshots with an interactive circle previewer. Giving away 50 free credits for brutally honest feedback!”
   * 快速获得种子用户与真实评价背书。
3. **大学校园与毕业生求职季地推**：
   * 在秋招/春招季为本校求职社团、应届毕业生提供“校友专属折扣”，形成校园内部自发口碑裂变。

---

## 🌐 域名绑定与 Vercel 部署

1. 在 GitHub 创建私有仓库并推送代码。
2. 在 [Vercel](https://vercel.com) 导入该仓库，一键部署。
3. 在 Vercel Settings -> Domains 中添加 `facesome.com` 与 `www.facesome.com`。
4. 按照提示在域名服务商处添加两条 DNS 解析记录（A 记录指向 `76.76.21.21` 或 CNAME 指向 `cname.vercel-dns.com`），几分钟内自动签发免费 SSL 证书上线！
