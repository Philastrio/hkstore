import Head from "next/head";
import Header from "../../component/Header";
import Button from "../../component/Button";
import { Button as AntButton } from "antd";
import ProductCard from "../../component/ProductCard";

export default ({ data }) => (
  <>
    <Head>
      <title>Cart | AromStore</title>
    </Head>
    <Header
      centerColumn={<h4>장바구니</h4>}
      rightColumn={<Button href="/" text="홈" />}
      leftColumn={<Button href="/search" text="검색" />}
    />
    <div
      style={{
        marginBottom: "50px",
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        width: "100%",
        padding: "0 50px"
      }}>
      {data &&
        data.cart &&
        data.cart.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            subtitle={product.subtitle}
            price={product.price}
            photoUrl={product.photo.url}
          />
        ))}
    </div>
    <div style={{ padding: "0px 50px" }}>
      <h3>총 합계: 0</h3>
      <AntButton>나가기</AntButton>
    </div>
  </>
);
