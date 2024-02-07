import {Card,Button} from "react-bootstrap";
import formatCurrency from "../utility/formatCurrency";


interface StreItemProps{
    id: number,
    name: string,
    price: number,
    imgUrl: string
}


const StoreItem = ({name, price, imgUrl} : StreItemProps) => {
    const quantity : number = 0;
  return (
    <Card className="h-100" >
        <Card.Img variant="top" src={imgUrl} height={"200px"} style={{objectFit: "cover"}} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-itmes-baseline mb-4">
                <span className="fs-2" >{name}</span>
                <span>{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto" >
                {
                    quantity == 0 ? (
                            <Button className="w-100" > + Add To Cart</Button>
                    ) : (
                        <div style={{gap: ".5rem"}} className="d-flex justify-content-center align-itmes-center flex-column">
                            <div style={{gap: ".5rem"}} className="d-flex align-itmes-center justify-content-center" >
                               <Button>+</Button>
                               <span className="mt-2 fw-bold px-2" >{quantity}</span>
                               <Button>-</Button>
                            </div>
                            <Button variant="danger" >Remove</Button>                           
                        </div>
                    )
                }
            </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem