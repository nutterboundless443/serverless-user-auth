# 无服务器用户认证系统

## 项目简介
这是一个基于AWS无服务器架构的用户认证系统，支持用户注册和登录功能。该系统使用AWS Lambda处理请求，DynamoDB作为数据库存储用户信息。 

## 功能
- 用户注册：用户可以创建一个新账户
- 用户登录：用户可以通过邮箱和密码登录
- JWT认证：使用JSON Web Token保护API

## 技术栈
- AWS Lambda
- AWS DynamoDB
- AWS API Gateway
- Node.js

## 安装和使用
1. 克隆项目：
   ```bash
   git clone https://github.com/你的用户名/serverless-user-auth.git
   cd serverless-user-auth
   ```
2. 配置AWS CLI并创建所需的DynamoDB表。
3. 部署Lambda函数。

## 贡献
欢迎任何形式的贡献！请查看`CONTRIBUTING.md`了解如何参与。

## License
[MIT](LICENSE)