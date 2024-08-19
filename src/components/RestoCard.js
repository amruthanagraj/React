import { RESTO_IMG } from "../utils/constants"

const RestoCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData?.info

    return(<div className="m-4 p-4 w-[250px] h-[350px] bg-slate-300 hover:bg-slate-400 flex flex-col justify-between">
    <img className="res-logo w-full h-40 object-cover" src={RESTO_IMG + cloudinaryImageId} alt={name} />
    <div className="flex-grow">
        <h3 className="font-bold py-2 text-lg truncate">{name}</h3>
        <h5 className="overflow-hidden text-sm truncate">{cuisines.join(", ")}</h5>
    </div>
    <div className="flex flex-col justify-end">
        <h5 className="text-sm">{costForTwo}</h5>
        <h5 className="text-sm">{avgRating}</h5>
    </div>
</div>
    )

}

export  const withPromotedLabel= (RestoCard) => {
    return (props)=> {
        return (
           <div>
             <label>PROMOTED</label>
             <RestoCard {...props}/>
           </div>
        )
    }
}

export default RestoCard