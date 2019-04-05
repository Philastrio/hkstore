import Head from "next/head";
import Header from "../../component/Header";
import Button from "../../component/Button";
import CartButton from "../../component/CartButton";
import { Layout, Row } from "antd";
import ProductCard from "../../component/ProductCard";
const { Content } = Layout;

export default ({ data }) => (
  <>
    <Head>
      <title>Home | Arom Store</title>
    </Head>
    <Header
      centerColumn={<h4>Arom Store</h4>}
      rightColumn={<CartButton />}
      leftColumn={<Button href="/search" text="검색" />}
    />
    <Content style={{ padding: "0 50px" }}>
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px,1fr))",
          width: "100%"
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
      <div style={{ marginTop: "50px" }}>
        {data && data.onSale && data.onSale.length !== 0 && <h2>On Sale</h2>}
        <div
          style={{
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            width: "100%"
          }}>
          {data &&
            data.onSale &&
            data.onSale.map(product => (
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
      </div>
      <div style={{ marginTop: "50px" }}>
        {data && data.onSale && data.onSale.length !== 0 && <h2>Allproduct</h2>}
        <div
          style={{
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            width: "100%"
          }}>
          {data &&
            data.Allproducts &&
            data.Allproducts.map(product => (
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
      </div>
    </Content>
  </>
);
