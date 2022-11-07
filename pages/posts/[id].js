import Head from 'next/head';

import Layout, { siteTitle } from '../../components/Layout';
import { getAllPostIds, getPostsDataById } from '../../lib/post';
import utilStyles from '../../styles/utils.module.css';

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths, // ここの内容がgetStaticPropsの引数に設定される
    fallback: false,
  };
};

// getStaticPathsによって取得された内容が引数に設定される
export const getStaticProps = async ({ params }) => {
  const postData = await getPostsDataById(params.id);
  // ここの内容がコンポーネントに渡される
  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
}
