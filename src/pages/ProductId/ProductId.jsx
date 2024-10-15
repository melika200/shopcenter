import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductId.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Shoppingcontext } from "../../Shoppingcontext";
export default function ProductId() {
  const { Idpart: ProductItemId } = useParams();
  const [products, setProducts] = useState({});
  const navigate = useNavigate();
  const { addToCart } = useContext(Shoppingcontext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${ProductItemId}`)
      .then((response) => setProducts(response.data));
  }, [ProductItemId]);
  const deletProductHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "are you sure that you want delet this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes :(",
      cancelButtonText: "no :)",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "done",
          icon: "success",
        });
        axios.delete(`https://fakestoreapi.com/products/${ProductItemId}`);
        navigate("/product");
      }
    });
  };
  return (
    <>
      <div className="CardContainer">
        <div className="CardHeader">
          <img className="imgArticle" src={products.image} />
          <h6 className="pt-3"> {products.title} </h6>
          <p>{products.description} </p>
          <p>{products.category}</p>
          <p>price:{products.price}</p>
        </div>

        <div className="CardFooter pt-1">
          <button
            onClick={() => deletProductHandler(ProductItemId)}
            className="btnArticle"
            style={{ marginLeft: "30px" }}
          >
            delete Item
          </button>
          <Link className='card-btn' onClick={() => addToCart(products)} to={'/buy'}> Buy</Link>
                
       </div>
      </div>
    </>
  );
}
