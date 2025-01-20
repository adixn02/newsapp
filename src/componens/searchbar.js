const Navbar= ({searchvalue})=>{
    return(
<div className="border m-3 p-2 d-flex align-items-center justify-content-center">
    <p className="h2">Serach Item - {searchvalue}</p>
</div>
    )
}

export default Navbar;