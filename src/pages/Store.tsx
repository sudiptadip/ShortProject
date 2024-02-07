import StoreItem from "../components/StoreItem"
import StoreItems from "../data/items.json"
import {Row,Col} from "react-bootstrap"

const Store = () => {
  return (
    <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3" >
            {
                StoreItems.map((e) => (
                    <Col key={e.id} >
                        <StoreItem {...e} />
                    </Col>
                ))
            }
        </Row>
    </>
  )
}

export default Store