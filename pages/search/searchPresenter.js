import Head from "next/head";
import Header from "../../component/Header";
import Button from "../../component/Button";
import { Layout, Row, Input } from "antd";
import ProductCard from "../../component/ProductCard";
const { Content } = Layout;

export default ({ data, updateSearchTerm, searchTerm }) => (
  <>
    <Head>
      <title>검색 | Arom Store</title>
    </Head>
    <Header
      centerColumn={
        <h4>{searchTerm === "" ? "검색" : `검색어 : ${searchTerm}`}</h4>
      }
      rightColumn={<Button href="/cart" text="장바구니" />}
      leftColumn={<Button href="/" text="홈으로" />}
    />
    <Content style={{ padding: "0 50px" }}>
      <Input
        onChange={updateSearchTerm}
        placeholder={"검색어 입력"}
        value={searchTerm}
      />
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          width: "100%",
          margin: "50px 0"
        }}>
        {data &&
          data.products &&
          data.products.map(product => (
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
    </Content>
  </>
);
