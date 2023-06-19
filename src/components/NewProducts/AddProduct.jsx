

const AddProduct = ({setIsOpen, isOpen}) => {


  return (
    <button onClick={() => setIsOpen(!isOpen)}>Yeni ürün Ekle</button>
  )
}

export default AddProduct