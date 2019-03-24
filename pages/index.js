import Head from 'next/head';
import Header from '../component/Header';
import Button from '../component/Button';
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
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={'남성'}
        />
        <Button
          href={`/category?name=women`}
          hrefAs={`/category/women`}
          text={'여성'}
        />
        <Button
          href={`/category?name=shoes`}
          hrefAs={`/category/shoes`}
          text={'신발'}
        />
        <Button
          href={`/category?name=shirts`}
          hrefAs={`/category/shirts`}
          text={'셔츠'}
        />
        <Button
          href={`/category?name=dresses`}
          hrefAs={`/category/dresses`}
          text={'옷'}
        />
      </div>
    </Content>
  </>
);
