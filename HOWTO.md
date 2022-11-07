# Next.js(ページング遷移とスタイリング)

## 01. Next.js のセットアップ手順

```bash
# プロジェクトの作成
npm create-next-app <プロジェクト名>

# localhostに起動
npm run dev
```

## 02. ルーティング

pages ディレクトリにファイルを置くだけでルーティングが完成する。
pages/posts/firstPost.js というファイルを配置した場合：
http://xxx/posts/firstPage にアクセスするとページが表示される。

## Link

ページ遷移は Link コンポーネントを使用する

```js
import Link from "next/link"
︙
<Link href="/">
︙
```

## 静的な画像ファイル

public ディレクトリの中に配置する。
参照する際は以下のように相対パスで指定する。

```js
<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
```

## Head コンポーネントでメタデータを追記

```js
import Head from "next/head"
︙
<Head>
  <title>タイトル</title>
</Head>
︙
```

## css スタイリング

例）components/layout.module.css を作成

```js
import styles from "./layout.module.css"
︙
<div className={styles.container}>
  ︙
</div>
︙
```

## グローバルスタイリング

styles/globals.css にサイト全体で共通するスタイルを定義する

# Next.js(プリレンダリング)

## SSG(getStaticProps)

SSG: 静的なデータのやり取り

```js
// SSG
export async function getStaticProps() {
  return {
    props: {
      ...
    }
  }
}
```

## SSR(getServerSideProps)

SSR: 動的なデータのやり取り

```js
// SSR
export async function getServerSideProps(context) {
  return {
    props: {
      ...
    }
  }
}
```

## Next.js(動的ルーティング)

以下のように[]で囲んだファイルを作成することで動的なページ遷移が可能になる。
pages/posts/[id].js

ただしコンポーネント名は[]で囲むとエラーになるので適当な名前を付ける。

```js
//pages/posts/[id].js

export default function Post() {
  ︙
}
```

## getStaticPaths と getStaticProps

```js
export const getStaticPaths = () => {
  // 1.パスの内容をgetStaticPropsに渡す
  ︙
  return {
      params: {
        ︙,
      },
      fallback: false,
    };
}

export const getStaticProps = (params) => {
  // 2.１で受け取ったparamsを受け取る
  ︙
  // 3.コンポーネントにpropsを渡す
  return {
    props: {
      ︙
    }
  }
}
```

### innerHTML

html を埋め込む手法として、div タグの
dangerouslySetInnerHTML={{__html: xxx}}
という物がある(非推奨)。

```html
<div dangerouslySetInnerHTML="{{" __html: postData.blogContentHTML }} />
```

## 404 Not Found ページのカスタマイズ

pages/404.js という名前でファイルを作る

```js
// pages/404.js
export const Custom404 = () => {
  ︙
}
```
