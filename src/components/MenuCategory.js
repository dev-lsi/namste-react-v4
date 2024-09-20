const MenuCategory = ({data})=>{
    return <div className="menu-category flex flex-col">
        <h3>{data.title}</h3>
        {data.items.map(i=><p key={i.card.info.name}>{i.card.info.name}</p>)}
    </div>
}

export default MenuCategory;