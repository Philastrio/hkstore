import Link from "next/link";
import { Card, Icon, Col } from "antd";
import { black } from "ansi-colors";
const { Meta } = Card;
const Text = ({ text }) => <span style={{ color: "black" }}>{text}</span>;

export default ({ id, name, subtitle, photoUrl }) => (
  <div style={{ marginBottom: "25px" }}>
    <Link href={`/product?id=${id}`} as={`/product/${id}`}>
      <a>
        <Card
          hoverable
          actions={[<Icon type="eye" theme="outlined" />]}
          cover={<img src={photoUrl} alt="" />}>
          <Meta
            title={<Text text={name} />}
            description={<Text text={subtitle} />}
          />
        </Card>
      </a>
    </Link>
  </div>
);
