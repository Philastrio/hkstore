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
        <h4>{searchTerm === "" ? "검색" : `검색 목록 : ${searchTerm}`}</h4>
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
    </Content>
  </>
);
