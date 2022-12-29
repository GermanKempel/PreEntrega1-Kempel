import { TiShoppingCart } from "react-icons/ti";
import Badge from "react-bootstrap/Badge";

function Carrito() {
  return (
    <div>
      <TiShoppingCart color="white" size={"2em"} />
      <Badge pill bg="danger">
        1
      </Badge>
    </div>
  );
}

export default Carrito;
