import MenuItemCard from "./MenuItemCard";

const MenuCategory = ({data})=>{
    console.log(data)
    return <div className="menu-category flex flex-col">
        <h3>{data.title}</h3>
        {data.items.map(i=><MenuItemCard key={i.card.info} data={i.card.info} />)}
    </div>
}

export default MenuCategory;