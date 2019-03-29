import Link from "next/link";
import { Card, Icon, Col } from "antd";
const { Meta } = Card;

export default ({ id, name, subtitle, photoUrl }) => (
  <div style={{ marginBottom: "25px" }}>
    <Link href={`/product?id=${id}`} as={`/product/${id}`}>
      <a>
        <Card
          hoverable
          actions={[<Icon type="eye" theme="outlined" />]}
          cover={<img alt="exampe" src={photoUrl} height={"250px"} />}>
          <Meta title={name} description={subtitle} />
        </Card>
      </a>
    </Link>
  </div>
);
