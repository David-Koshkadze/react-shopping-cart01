import { Row, Col } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3}>
        {storeItems.map((item, idx) => (
          <Col key={idx} className="mb-4">
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
