import Head from "next/head";
import { Button as AntButton } from "antd";
import Header from "../../component/Header";
import Button from "../../component/Button";

export default ({ data }) => (
  <>
    <Head>
      <title>{data.product.name} | AromStore</title>
    </Head>
    <Header
      centerColumn={<h4>상품</h4>}
      rightColumn={<Button href="/cart" text="장바구니" />}
      leftColumn={<Button href="/" text="홈" />}
    />
    <div className={"product"}>
      <img src={data.product.photo.url} />
      <div>
        <h2>{data.product.name}</h2>
        <h3>{data.product.subtitle}</h3>
        <h4>{data.product.description}</h4>
        <AntButton tyep="primary">
          장바구니에 추가({data.product.price} 원)
        </AntButton>
      </div>
      <style jsx>{`
        .product {
          display: grid;
          margin: 50px 0px;
          padding: 0px 50px;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 50px;
        }
        .product img {
          max-width: 100%;
        }
      `}</style>
    </div>
  </>
);
