import React from "react";
import "./styles.css";
import IconDress from "../../assets/icons/vestido.svg"

const MenuItem = ({
  item,
  src
}) => {

  const url = item.toLowerCase().split(" ").join("-");

  return (
    <a href={url} className={"menuItemGroup " + url}>
      {src ? <img src={src} alt={src} /> : ""}
      <p>
        {item}
      </p>
    </a>
  )
}

const CategoryHeader = () => {
  return (
    <section className="thirdRow">
      <div className="containerCatoryHeader">
        <MenuItem item="Novidades" src={IconDress} />
        <MenuItem item="Vestidos" src="" />
        <MenuItem item="Roupas" src="" />
        <MenuItem item="Sapatos" src="" />
        <MenuItem item="Lingerie" src="" />
        <MenuItem item="Acessórios" src="" />
        <MenuItem item="OUTLET" src="" />
      </div>
    </section>
  );
};

export default CategoryHeader;