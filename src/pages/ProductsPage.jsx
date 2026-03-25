export default function ProductsPage(props) {
    const {products} = props


    return(<>
    <p>Shopping</p>


      <div>
        {products.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </>)
}