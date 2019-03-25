import Head from 'next/head';
import Header from '../../component/Header';
import Button from '../../component/Button';
import { Layout } from 'antd';
const { Content } = Layout;

export default ({ data }) => (
  <>
    <Head>
      <title>Home | HKstore</title>
    </Head>
    <Header
      centerColumn={<h4>Hankang Store</h4>}
      rightColumn={
        <Button href="/cart" text="장바구니" btnIcon={'shopping-cart'} />
      }
      leftColumn={<Button href="/search" text="검색" btnIcon={'search'} />}
    />
    <Content style={{ padding: '0 50px' }}>
      <div
        style={{
          display: 'grid',
          gridGap: '10px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px,1fr))',
          width: '100%'
        }}>
        {data &&
          data.categories &&
          data.categories.map(category => (
            <Button
              key={category.id}
              href={`/category?name=${category.name.toLowerCase()}`}
              hrefAs={`/category/${category.name.toLowerCase()}`}
              text={category.name}
            />
          ))}
      </div>
    </Content>
  </>
);
