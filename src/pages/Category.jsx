import { useParams, useNavigate } from "react-router";
import { Button } from "react-bootstrap";

function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
        <h1>Catégorie : {category}</h1>
        <Button variant="primary" onClick={handleBack}>
          Retour à la page d'accueil
        </Button>
    </>
  );
}

export default Category;
