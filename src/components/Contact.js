const Contact = ()=>{
    return <div className="font-bold text-3xl ">
        <h1>Contact Us</h1>
        <form>
            <input  className="p-4 m-4 bg-slate-200" type="text" placeholder="name"></input>
            <input className="p-4 m-4 bg-slate-200" type="text" placeholder="message"></input>
            <button className=" p-4 m-4 bg-red-500">Submit</button>
        </form>
    </div>
}
export default Contact