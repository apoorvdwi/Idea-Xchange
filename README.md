![IdeaXchange](https://socialify.git.ci/apoorvdwi/Idea-Xchange/image?description=1&descriptionEditable=Finding%20and%20Sharing%20Ideas%20Simplified.&font=Inter&language=1&name=1&owner=1&pattern=Plus&theme=Light)

<p align="center">
<img src="https://img.shields.io/github/license/apoorvdwi/EasyCall" />
<img src="https://img.shields.io/badge/Author-apoorvdwi-yellow" />
<img src="https://img.shields.io/badge/code%20style-airbnb-blue" />
</p>

## 💥 Introduction

Idea Exchange is a platform for people who have trouble finding ideas for their side projects or are finding a buisness problem to solve and build their startup. Alternatively, people can post their ideas/problem statements and let other users to interact with the idea in form of comments, upvotes, downvotes and if they would like to pay for the product around that problem/idea statement.

## 🛠️ Local development

That's pretty easy. To ensure that you are able to install everything properly, we would recommend you to have <b>Git</b>, <b>NPM</b> and <b>Node.js</b> installed.

We will first start with setting up the Local Project Environment:

```sh
git clone git@github.com:apoorvdwi/Idea-Xchange.git
cd Idea-Xchange/appwrite
docker-compose up -d --renew-anon-volumes
```

Create a account in the appwrite console and create a project inside it.

1. From Authentication, enable the google authentication.

2. Create a database with 2 collections, Ideas and Discussions.

Discussions Collection contains 2 fields:

| column name | type   | required | array |
| ----------- | ------ | -------- | ----- |
| ideaId      | string | true     | false |
| comments    | string | false    | true  |

Ideas Collection contains 9 fields:

| column name  | type    | required | array | default value |
| ------------ | ------- | -------- | ----- | :-----------: |
| title        | string  | true     | false |       -       |
| discussionId | string  | true     | false |       -       |
| userId       | string  | true     | false |       -       |
| category     | string  | true     | false |       -       |
| upvotes      | string  | false    | true  |       -       |
| pay          | string  | false    | true  |       -       |
| username     | string  | true     | false |       -       |
| likesCount   | integer | false    | false |       0       |
| payCount     | integer | false    | false |       0       |

Add the following permission settings in both the collections

![permissions](https://github.com/apoorvdwi/Idea-Xchange/assets/56197821/e3c0b42a-4c2d-403e-9674-bfaceee8862d)

Copy the .env.example content to .env.local and update the environment variables with corresponding Ids from appwrite console

Once you run the Commands and get environment variables and everything fine, we are all set to run the app ✔️

On the root level run the following command:

```sh
cd Idea-Xchange
npm run dev
```

## 🥁 Features

- IdeaXchange provides login through Google.
- You can browse through the ideas of different people and interact with them via reactions and comments
- You can post your idea and let people comment and react on it.

## 📜 LICENSE

[AGPL 3.0 License](https://github.com/apoorvdwi/EasyCall/blob/main/LICENSE)
